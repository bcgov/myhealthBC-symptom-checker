import React from 'react';
import { useTranslation } from 'react-i18next';
import { Question } from '../components/Question';
import { QuestionDescription } from '../components/QuestionDescription';
import { useFormikContext } from 'formik';
import { SymptomCheckbox } from '../components/SymptomCheckbox';
import { SymptomCheckerForm } from '../types';
import { ErrorBox } from '../components/ErrorBox';

export const Q3Symptoms = () => {
  const { t } = useTranslation('symptoms');
  const { values, errors } = useFormikContext<SymptomCheckerForm>();

  return (
    <div>
      <Question>{t('Question')}</Question>
      <QuestionDescription text={t('Description')} />
      <div className='mt-4'>
        {Object.keys(values.symptoms).map(symptom => {
          return (
            <SymptomCheckbox
              key={symptom}
              name={`symptoms.${symptom}`}
              checked={values?.symptoms[symptom]?.checked}
              label={t(symptom)}
            />
          );
        })}
      </div>
      <ErrorBox error={errors.symptoms as string} />
    </div>
  );
};
