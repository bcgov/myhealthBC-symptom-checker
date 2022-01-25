import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageProps } from '../types/PageProps';
import { Question } from '../components/Question';
import { RadioField } from '../components/RadioField';
import { QuestionDescription } from '../components/QuestionDescription';

export const Q3SymptomBreathingSeverity = ({ values, onChange }: PageProps) => {
  const { t } = useTranslation();

  const severity = values?.severityOfBreathing || 'None';
  const noneChecked = severity === 'None' || severity === '';

  return (
    <div>
      <div className='pb-5'>
        <Question>{t('Q3.5')}</Question>
        <QuestionDescription text={t('Q3.5-desc')} />
      </div>

      <div>
        <RadioField
          name={'severityOfBreathing'}
          value='None'
          onChange={onChange}
          text={t('None')}
          checked={noneChecked}
        />
        <RadioField
          name={'severityOfBreathing'}
          value='Mild'
          onChange={onChange}
          text={t('Mild')}
        />
        <RadioField
          name={'severityOfBreathing'}
          value='Moderate'
          onChange={onChange}
          text={t('Moderate')}
        />
        <RadioField
          name={'severityOfBreathing'}
          value='Severe'
          onChange={onChange}
          text={t('Severe')}
        />
      </div>
      <div className='bg-gray-50 my-4 p-4 rounded'>
        <div className='text-bcBlueLink font-bold'>{t(severity)}</div>
        <div className='font-bold mt-3'>{t(`${severity}-title`)}</div>
        {severity !== 'None' ? <div className='mt-3'>{t(`${severity}-desc`)}</div> : ''}
      </div>
    </div>
  );
};
