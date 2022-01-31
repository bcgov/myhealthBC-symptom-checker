import React from 'react';
import { useTranslation } from 'react-i18next';

export type ErrorBoxProps = {
  error: string;
  hide?: boolean;
};

export const ErrorBox = ({ error, hide }: ErrorBoxProps) => {
  const { t } = useTranslation();

  if (hide || !error) return <></>;
  return <div className='text-bcRedError m-0'>{t(error)}</div>;
};
