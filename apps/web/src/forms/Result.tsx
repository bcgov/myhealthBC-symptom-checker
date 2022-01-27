import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageProps } from '../types/index';

export const Result = ({ values }: PageProps) => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className='text-3xl mb-10'>{t('Result')}</h1>
      <pre>{JSON.stringify(values, null, 4)}</pre>
    </>
  );
};
