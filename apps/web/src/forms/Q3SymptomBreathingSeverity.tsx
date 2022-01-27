import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageProps } from '../types/PageProps';
import { Question } from '../components/Question';
import { RadioField } from '../components/RadioField';
import { QuestionDescription } from '../components/QuestionDescription';
import { Severity } from '../types/Severity';

export const Q3SymptomBreathingSeverity = ({ values, onChange }: PageProps) => {
  const { t } = useTranslation();

  const valueKey = 'symptoms.breathing';
  const severity = values?.symptoms?.breathing || Severity.None;

  return (
    <div>
      <div className='pb-5'>
        <Question>{t('Q3.5-breathing')}</Question>
        <QuestionDescription text={t('Q3.5-breathing-desc')} />
      </div>

      <div>
        {Object.values(Severity).map(value => (
          <RadioField
            name={valueKey}
            key={value}
            value={value}
            onChange={onChange}
            text={t(value)}
            checked={value === severity}
          />
        ))}
      </div>
      <div className='bg-gray-50 my-4 p-4 rounded'>
        <div className='text-bcBlueLink font-bold'>{t(`${severity}`)}</div>
        <div className='font-bold mt-3'>
          {t(severity === 'None' ? 'None-title' : `Breathing-${severity}-title`)}
        </div>
        {severity !== 'None' ? <div className='mt-3'>{t(`Breathing-${severity}-desc`)}</div> : ''}
      </div>
    </div>
  );
};
