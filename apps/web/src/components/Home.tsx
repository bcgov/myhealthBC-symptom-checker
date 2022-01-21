import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className='h-full flex flex-col justify-center items-center m-auto'>
      <div className='p-12'>{t('Welcome')}</div>
      <Button variant='primary' onClick={() => navigate('/checker')}>
        {t('Start assessment')}
      </Button>
    </div>
  );
};

export { Home };
