import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageProps } from '../types/PageProps';
import { YesNoFields } from '../components/YesNoFields';
import { Question } from '../components/Question';
import { Options } from '../components/Options';

export const Q2DifficultBreathing = ({ onChange }: PageProps) => {
  const { t } = useTranslation();

  const options = ['Q2-1', 'Q2-2'];

  return (
    <div>
      <div className='pb-7'>
        <Question>{t('Q2')}</Question>
        <Options options={options.map(option => t(option))} />
      </div>

      <YesNoFields name='complicated' onChange={onChange} />
    </div>
  );
};
