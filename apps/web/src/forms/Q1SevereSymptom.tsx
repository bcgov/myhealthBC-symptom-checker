import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageProps } from '../types/PageProps';

export const Q1SevereSymptom = ({ values }: PageProps) => {
  const { t } = useTranslation();

  return (
    <>
      <p className='text-3xl mb-10'>{t('Q1')} 1</p>
      <ul className='list-disc pl-6 mb-10'>
        <li>{t('Q1-1')}</li>
        <li>{t('Q1-2')}</li>
        <li>{t('Q1-3')}</li>
        <li>{t('Q1-4')}</li>
        <li>{t('Q1-5')}</li>
      </ul>

      <pre className='ml-10'>{JSON.stringify(values, null, 4)}</pre>
    </>
  );
};
