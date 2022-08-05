import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
import { Link811 } from './Link811';
import { Link } from './Link';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <main className='bg-white'>
        <div className='container mx-auto max-w-main py-8'>
          <h2 className='text-3xl font-bold mb-5'>{t('COVID 19 self-assessment tool')}</h2>
          <Trans t={t} i18nKey={'Last updated'}>
            <div>
              Last updated: <b>August 10, 2022</b>
            </div>
          </Trans>
          <div className='my-5'>
            <div>
              <p className='my-4'>{t('Tool description')}</p>
              <Button
                title={t('Start assessment')}
                variant='primary'
                onClick={() => navigate('/checker')}
              >
                {t('Start assessment')}
              </Button>
            </div>
          </div>
          <Trans i18nKey='home-desc'>
            <p>
              <b>If you feel very sick or your symptoms are not improving,</b> contact your health
              care provider. You can also call {Link811} for health advice or to get help in a
              different language.
            </p>
            <p>
              For children under 2 years old, contact your health care provider directly or{' '}
              {Link811}.{' '}
              <Link href='http://www.bccdc.ca/health-info/diseases-conditions/covid-19/covid-19-and-children'>
                Learn more about COVID-19 and children
              </Link>
              .
            </p>
          </Trans>
        </div>
      </main>
    </>
  );
};

export default Home;
