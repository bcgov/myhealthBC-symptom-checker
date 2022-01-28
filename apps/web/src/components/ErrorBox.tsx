import React from 'react';
import { useTranslation } from 'react-i18next';

export const ErrorBox = ({ error }: { error: string }) => {
  const { t } = useTranslation();

  return (
    <div className='bg-gray-50 my-4 p-4 rounded'>
      <div className='text-bcBlueLink font-bold'>{t('Errors')}</div>
      <div className='font-bold mt-3'>{error}</div>
    </div>
  );
};
