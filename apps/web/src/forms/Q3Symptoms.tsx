import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PageProps } from '../types/PageProps';
import { Question } from '../components/Question';
import { Checkbox } from '../components/Checkbox';
import { QuestionDescription } from '../components/QuestionDescription';

export const Q3Symptoms = ({ values, onChange }: PageProps) => {
  const { t, i18n } = useTranslation();

  const getSymptomOptions = () => {
    return {
      fever: t('Fever or chills'),
      cough: t('Cough'),
      breathing: t('Shortness of breath'),
      throat: t('Sore throat'),
      smell: t('Loss of sense of smell or taste'),
      runnyNose: t('Runny nose'),
      sneezing: t('Sneezing'),
      diarrhea: t('Diarrhea'),
      appetite: t('Loss of appetite'),
      nausea: t('Nausea or vomiting'),
      aches: t('Body or muscle aches'),
      none: t('None of the above'),
    };
  };

  const [symptoms, setSymptoms] = useState(getSymptomOptions());

  useEffect(() => {
    setSymptoms(getSymptomOptions());
  }, [i18n.language]);

  return (
    <div>
      <div>
        <Question>{t('Q3')}</Question>
        <QuestionDescription text={t('Q3-desc')} />
        {Object.keys(symptoms).map(symptom => {
          const name = `symptoms.${symptom}`;
          return (
            <Checkbox
              key={symptom}
              name={name}
              checked={values?.symptoms && values?.symptoms[symptom] === 'true'}
              text={t(symptoms[symptom])}
              onChange={onChange}
            />
          );
        })}
      </div>
    </div>
  );
};
