import React from 'react';
import { useTranslation } from 'react-i18next';
import { Question } from '../components/Question';
import { QuestionDescription } from '../components/QuestionDescription';
import Checkboxes from 'src/components/Checkboxes';

export const Q3Symptoms = () => {
  const { t } = useTranslation();

  const symptomOptions2: Array<{
    key: string;
    value: string;
    name: string;
  }> = [
    {
      key: 'fever',
      name: 'fever.isExperienced',
      value: 'Fever or chills',
    },
    {
      key: 'cough',
      name: 'cough.isExperienced',
      value: 'Cough',
    },
    {
      key: 'shortnessOfBreath',
      name: 'shortnessOfBreath.isExperienced',
      value: 'Shortness of breath',
    },
    {
      key: 'soreThroat',
      name: 'soreThroat.isExperienced',
      value: 'Sore throat',
    },
    {
      key: 'lossOfSmellTaste',
      name: 'lossOfSmellTaste.isExperienced',
      value: 'Loss of sense of smell or taste',
    },
    {
      key: 'runnyNose',
      name: 'runnyNose.isExperienced',
      value: 'Runny nose',
    },
    {
      key: 'sneezing',
      name: 'sneezing.isExperienced',
      value: 'Sneezing',
    },
    {
      key: 'diarrhea',
      name: 'diarrhea.isExperienced',
      value: 'Diarrhea',
    },
    {
      key: 'lossOfAppetite',
      name: 'lossOfAppetite.isExperienced',
      value: 'Loss of appetite',
    },
    {
      key: 'nauseaVomitting',
      name: 'nauseaVomitting.isExperienced',
      value: 'Nausea or vomiting',
    },
    {
      key: 'bodyMuscleAches',
      name: 'bodyMuscleAches.isExperienced',
      value: 'Body or muscle aches',
    },
    {
      key: 'none',
      name: 'none.isExperienced',
      value: 'None',
    },
  ];

  return (
    <div>
      <div>
        <Question>{t('Q3')}</Question>
        <QuestionDescription text={t('Q3-desc')} />
        <Checkboxes name={'symptomps'} label='symptomps' options={symptomOptions2}></Checkboxes>
      </div>
    </div>
  );
};
