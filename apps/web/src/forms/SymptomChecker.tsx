import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import _ from 'lodash';
import { Button } from '../components/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  AgeRanges,
  initialValues,
  Recommendation,
  SymptomCheckerForm,
  VaccinationStatus,
} from '../types';
import { QuestionSteps, LastStep, numberOfQuestions } from './QuestionSteps';
import { goBack, goForward, submitRecommendation, submitSymptomChoices } from 'src/utils/anayltics';

export const SymptomChecker = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [step, setStep] = useState(0);

  const [pageHistory, setPageHistory] = useState<number[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    window.onpopstate = () => {
      if (step > 1) {
        navigate(window.location.pathname);
      }
      if (step > 0) {
        return previous();
      }
      window.onbeforeunload = () => null;
    };
  }, [step]);

  const steps = QuestionSteps;

  useEffect(() => {
    navigate(window.location.pathname);
    window.onbeforeunload = () => {
      return t('LeaveSite');
    };
  }, []);

  const recommend = (recommendation: Recommendation) => {
    window.onbeforeunload = () => null;
    window.onpopstate = null;
    submitRecommendation(recommendation);
    navigate('/result', { state: { recommendation } });
  };

  const decideNextPage = (values: SymptomCheckerForm) => {
    if (values.emergentFactors === 'yes') {
      return recommend(Recommendation.CALL_911);
    }

    if (values.complicatingFactors === 'yes') {
      return recommend(Recommendation.CALL_811);
    }

    // 0 - emergent, 1 - complicated, 2 - symptoms, 3 - test result
    if (step < 2) {
      return step + 1;
    }

    // exit if no symptoms
    if (values.symptoms.none.checked === true) {
      return recommend(Recommendation.ASYMPTOMATIC_NO_TEST);
    }

    // go to severity selection for the primary symptoms
    let index = step + 1;
    for (; index < numberOfQuestions - 1; index++) {
      const symptom = steps[index].symptom;
      if (!symptom) break;
      const { checked, required } = values.symptoms[symptom];
      if (checked && required) {
        return index;
      }
    }

    const healthWorkConcern = Object.values(values.healthWork).some(value => value === 'yes');
    if (healthWorkConcern) {
      return recommend(Recommendation.SYMPTOMATIC_TEST);
    }

    if (values.healthWork.unvaccinated && values.healthWork.age) {
      let needsTest = false;
      const { unvaccinated, age, chronicConditions } = values.healthWork;
      let isMultiple = true;
      switch (unvaccinated) {
        case VaccinationStatus.None:
          if (age !== AgeRanges.UnderFifty || chronicConditions === 'yes') {
            needsTest = true;
          }
          break;

        case VaccinationStatus.Partial1Dose:
        case VaccinationStatus.Partial2Dose:
          if (age === AgeRanges.UnderFifty) {
            return recommend(Recommendation.SYMPTOMATIC_NO_TEST);
          }
          if (age === AgeRanges.OverSeventy) {
            isMultiple = false;
          }
          if (chronicConditions === 'yes') {
            needsTest = true;
          }
          break;

        case VaccinationStatus.Full:
          if (age !== AgeRanges.OverSeventy) {
            return recommend(Recommendation.SYMPTOMATIC_NO_TEST);
          }
          if (age === AgeRanges.OverSeventy && chronicConditions === 'yes') {
            needsTest = true;
          }
          break;

        default:
          // this shouldn't happen...
          break;
      }
      if (needsTest) {
        return recommend(Recommendation.SYMPTOMATIC_TEST);
      }
      // set the final question (do not .push because back button)
      const lastStep = LastStep(isMultiple);
      steps[numberOfQuestions - 1] = lastStep;
    }

    // go to health work questions
    if (index < numberOfQuestions) {
      return index;
    }
    return recommend(Recommendation.SYMPTOMATIC_NO_TEST);
  };

  const nextQuestion = (values: SymptomCheckerForm) => {
    const nextStep = decideNextPage(values);
    if (step === 2) {
      submitSymptomChoices(
        step,
        steps[step].key,
        Object.keys(values.symptoms).filter(symptom => values.symptoms[symptom].checked === true),
      );
    }
    if (nextStep) {
      if (step !== 2) {
        goForward(steps[step], step);
      }
      pageHistory.push(step);
      setPageHistory([...pageHistory]);
      setStep(nextStep);
    }
  };

  const previous = () => {
    const prev = pageHistory.pop();
    if (prev !== undefined) {
      goBack(steps[step], step);
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
