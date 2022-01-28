import React, { useState } from 'react';
import _ from 'lodash';
import { useFormik, Formik, Form } from 'formik';
import { SymptomQuestion } from './SymptomQuestion';
import { Button } from '../components/Button';
import { useTranslation } from 'react-i18next';
import { Q3Symptoms } from './Q3Symptoms';
import { setValueByPath } from '../utils';
import { Q4TestResult } from './Q4TestResult';
import { useNavigate } from 'react-router-dom';
import { Recommendation, SymptomCheckerForm, YES_NO_OPTIONS } from '../types';
import { initialValues, validationSchema } from '../types';

export const SymptomChecker = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [step, setStep] = useState(0);

  const steps = [
    {
      component: (
        <SymptomQuestion
          key={0}
          showErrors
          answerOptions={YES_NO_OPTIONS}
          question={{
            title: 'Q1',
            options: ['Q1-1', 'Q1-2', 'Q1-3', 'Q1-4', 'Q1-5'],
          }}
          name='emergentFactors'
        />
      ),
      validationSchema: validationSchema[0],
    },
    {
      component: (
        <SymptomQuestion
          key={1}
          showErrors
          answerOptions={YES_NO_OPTIONS}
          question={{
            title: 'Q2',
            options: ['Q2-1', 'Q2-2'],
          }}
          name='complicatingFactors'
        />
      ),
      validationSchema: validationSchema[1],
    },
    {
      component: <Q3Symptoms key={2} />,
      validationSchema: validationSchema[2],
    },
    {
      component: <Q4TestResult key={100} />,
      validationSchema: validationSchema[3],
    },
  ];

  const decideNextPage = (values: Partial<SymptomCheckerForm>) => {
    if (values.emergentFactors === 'yes') {
      navigate(`/result/${Recommendation.CALL_911}`);
    }

    if (values.complicatingFactors === 'yes') {
      navigate(`/result/${Recommendation.CALL_811}`);
    }

    if (values.symptoms === 'true') {
      navigate(`/result/${Recommendation.ASYMPTOMATIC_NO_TEST}`);
    }

    // temporarily
    if (step < steps.length - 1) {
      return step + 1;
    }

    navigate(`/result/${Recommendation.ASYMPTOMATIC_NO_TEST}`);
    return step;
  };

  const nextQuestion = (values: Partial<SymptomCheckerForm>) => {
    console.log('Going to next step', values);
    setStep(decideNextPage(values));
  };

  const previous = () => {
    setStep(Math.max(step - 1, 0));
  };

  return (
    <div className=' h-full flex flex-col '>
      <Formik
        initialValues={initialValues}
        validationSchema={steps[step]?.validationSchema}
        onSubmit={nextQuestion}
      >
        <Form>
          <div> {steps[step].component}</div>
          <div className='my-10 justify-center'>
            <Button
              type='button'
              variant='outline'
              widthClass='md:w-44'
              onClick={previous}
              disabled={step === 0}
            >
              {t('Go back')}
            </Button>
            <span className='ml-4'></span>
            <Button type='submit' variant='primary' widthClass='md:w-44'>
              {t('Continue')}
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
