import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [step]);

  const steps = QuestionSteps;

  const recommend = (recommendation: Recommendation) => {
    navigate('/result', { state: { recommendation } });
  };

  const decideNextPage = (values: SymptomCheckerForm) => {
    if (values.emergentFactors === 'yes') {
      recommend(Recommendation.CALL_911);
    }

    if (values.complicatingFactors === 'yes') {
      recommend(Recommendation.CALL_811);
    }

    // 0 - emergent, 1 - complicated, 2 - symptoms, 3 - test result
    if (step < 3) {
      return step + 1;
    }

    // go to severity selection for the primary symptoms
    let index = step + 1;
    for (; index < steps.length; index++) {
      const symptom = steps[index].symptom;
      if (!symptom) break;
      const { checked, required } = values.symptoms[symptom];
      if (checked && required) {
        return index;
      }
    }

    // go to health work questions
    if (index < steps.length) {
      return index;
    }

    const symptoms = Object.keys(values.symptoms)
      .filter(symptom => symptom !== 'none' && values.symptoms[symptom].checked)
      .map(symptom => values.symptoms[symptom]);
    const healthWorkConcern = Object.values(values.healthWork).some(value => value === 'yes');

    if (symptoms.length === 0) {
      recommend(Recommendation.ASYMPTOMATIC_NO_TEST);
    } else if (healthWorkConcern) {
      recommend(Recommendation.SYMPTOMATIC_TEST);
    } else {
      recommend(Recommendation.SYMPTOMATIC_NO_TEST);
    }
    return step;
  };

  const nextQuestion = (values: SymptomCheckerForm) => {
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
    <main className='container mx-auto max-w-main mt-0 md:mt-12 md:mb-12 py-6 md:py-12 px-6 md:px-24 bg-lightBlueBackground md:bg-white md:rounded shadow-md'>
      <div className=' h-full flex flex-col '>
        <Formik
          initialValues={_.cloneDeep(initialValues)}
          validationSchema={steps[step]?.validationSchema}
          onSubmit={nextQuestion}
        >
          <Form>
            <div> {steps[step].component}</div>
            <div className='my-10 justify-center flex flex-col md:flex-row mx-2 md:mx-0 m'>
              <Button
                type='button'
                variant='outline'
                widthClass='md:w-44'
                onClick={previous}
                disabled={step === 0}
              >
                {t('Go back')}
              </Button>
              <span className='ml-4 mt-3 md:mt-0'></span>
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
