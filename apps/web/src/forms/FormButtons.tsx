import React, { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { useTranslation } from 'react-i18next';

type FormButtonsProps = {
  page: number;
  isLastPage: boolean;
  prev: () => void;
  next: () => void;
};

export const FormButtons = (props: FormButtonsProps) => {
  const { page, isLastPage, prev, next } = props;
  const { t } = useTranslation();
  const [type, setType] = useState('button');

  useEffect(() => {
    setType(isLastPage ? 'submit' : 'button');
  }, [isLastPage]);

  return (
    <div className='w-full'>
      <Button type='button' variant='outline' onClick={prev} disabled={page === 0}>
        {t('Go back')}
      </Button>
      <span className='ml-4'>
        <Button
          title={t('Continue')}
          type={type as 'button' | 'submit'}
          variant='primary'
          onClick={next}
          disabled={isLastPage}
        >
          {t('Continue')}
        </Button>
      </span>
    </div>
  );
};
