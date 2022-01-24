import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageProps } from '../types/PageProps';

export const Q2DifficultBreathing = ({ values }: PageProps) => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className='text-3xl mb-10'>{t('Question')} 2</h1>
      <pre>{JSON.stringify(values, null, 4)}</pre>
    </>
  );
};
