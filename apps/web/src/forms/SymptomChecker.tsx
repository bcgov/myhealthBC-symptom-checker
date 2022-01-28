import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import _ from 'lodash';
import { Button } from '../components/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { initialValues, Recommendation, SymptomCheckerForm } from '../types';
import QuestionSteps from './QuestionSteps';

export const SymptomChecker = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [step, setStep] = useState(0);

  const [pageHistory, setPageHistory] = useState<number[]>([]);

  const steps = QuestionSteps;

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

    // go to severity selection for the primary symptoms
    for (let index = step + 1; index < steps.length; index++) {
      const symptom = steps[index].symptom;
      if (!symptom) continue;
      const { checked, required } = values.symptoms[symptom];
      if (checked && required) {
        return index;
      }
    }

    // go to health work questions

    // go to test result
    if (step < steps.length - 1) {
      return steps.length - 1;
    }

    const symptoms = Object.keys(values.symptoms)
      .filter(symptom => symptom !== 'none')
      .map(symptom => values.symptoms[symptom]);
    if (symptoms.some(s => s.severity)) {
      navigate(`/result/${Recommendation.SYMPTOMATIC_TEST}`);
    } else if (symptoms.length > 0) {
      navigate(`/result/${Recommendation.SYMPTOMATIC_NO_TEST}`);
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
    <main className='container mx-auto max-w-main mt-0 md:mt-12 md:mb-12 py-6 md:py-12 px-6 md:px-24 bg-white rounded shadow-md'>
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
    </main>
  );
};
