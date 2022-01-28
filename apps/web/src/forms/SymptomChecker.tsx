import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import _ from 'lodash';
import { SymptomQuestion } from './SymptomQuestion';
import { Button } from '../components/Button';
import { useTranslation } from 'react-i18next';
import { Q3Symptoms } from './Q3Symptoms';
import { Q4TestResult } from './Q4TestResult';
import { useNavigate } from 'react-router-dom';
import { Recommendation, SymptomCheckerForm, YES_NO_OPTIONS } from '../types';
import { initialValues, validationSchema } from '../types';
import { Q3SeverityBreathing } from './Q3SeverityBreathing';
import { Q3SymptomSoreThroatSeverity } from './Q3SymptomSoreThroatSeverity';

export const SymptomChecker = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [step, setStep] = useState(0);

  const [pageHistory, setPageHistory] = useState<number[]>([]);

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
      symptom: 'shortnessOfBreath',
      component: <Q3SeverityBreathing />,
    },
    {
      symptom: 'soreThroat',
      component: <Q3SymptomSoreThroatSeverity />,
    },
    {
      component: <Q4TestResult key={100} />,
      validationSchema: validationSchema[3],
    },
  ];

  const decideNextPage = (values: SymptomCheckerForm) => {
    if (values.emergentFactors === 'yes') {
      navigate(`/result/${Recommendation.CALL_911}`);
    }

    if (values.complicatingFactors === 'yes') {
      navigate(`/result/${Recommendation.CALL_811}`);
    }

    if (step < 2) {
      return step + 1;
    }

    // go to severity selection
    let severityStep = -1;
    for (let index = step + 1; index < steps.length; index++) {
      const symptom = steps[index].symptom;
      if (symptom !== 'none' && index > step && symptom && values.symptoms[symptom].isExperienced) {
        severityStep = index;
        if (severityStep !== step) {
          return severityStep;
        }
      }
    }

    // go to health work questions

    // go to test result
    if (step < steps.length - 1) {
      return steps.length - 1;
    }

    const hasSymptoms = Object.keys(values.symptoms)
      .filter(symptom => symptom !== 'none')
      .some(symptom => values.symptoms[symptom].isExperienced);
    if (hasSymptoms) {
      navigate(`/result/${Recommendation.SYMPTOMATIC_TEST}`);
    } else {
      navigate(`/result/${Recommendation.ASYMPTOMATIC_NO_TEST}`);
    }
    return step;
  };

  const nextQuestion = (values: SymptomCheckerForm) => {
    console.log('Going to next step', values);
    const nextStep = decideNextPage(values);
    if (nextStep) {
      pageHistory.push(step);
      setPageHistory([...pageHistory]);
      setStep(nextStep);
    }
  };

  const previous = () => {
    const prev = pageHistory.pop();
    if (prev !== undefined) {
      setStep(prev);
      setPageHistory([...pageHistory]);
    }
  };

  return (
    <div className=' h-full flex flex-col '>
      <Formik
        initialValues={_.cloneDeep(initialValues)}
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
