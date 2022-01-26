import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageProps } from '../types/PageProps';
import { Question } from '../components/Question';
import { Options } from '../components/Options';
import { YesNoFields } from '../components/YesNoFields';

export const Q1SevereSymptom = ({ onChange }: PageProps) => {
  const { t } = useTranslation();

  const options = ['Q1-1', 'Q1-2', 'Q1-3', 'Q1-4', 'Q1-5'];

  return (
    <div>
      <div className='pb-7'>
        <Question>{t('Q1')}</Question>
        <Options options={options.map(option => t(option))} />
      </div>
      <YesNoFields name='emergent' onChange={onChange} />
    </div>
  );
};
