import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import banner from 'src/images/banner.svg';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <main className='bg-white'>
        <div className='container mx-auto max-w-main py-8'>
          <h2 className='text-3xl font-bold mb-5'>{t('COVID 19 self-assessment tool')}</h2>
          <div>Last updated: July 7, 2022</div>
          <div className='my-5'>
            <div>
              <img src={banner} alt='government of british columbia' className='w-full' />
            </div>
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
              care provider. You can also call 8-1-1 for health advice or to get help in a different
              language
            </p>
            <p>
              Do not use this self-assessment to check symptoms for anyone under 2 years old.
              Contact your health care provider or 8-1-1 instead.{' '}
              <a
                href='http://www.bccdc.ca/health-info/diseases-conditions/covid-19/covid-19-and-children'
                className='underline text-bcBlueLink'
                rel='noreferrer'
                target='_blank'
              >
                Learn more about COVID-19 and children.
              </a>
            </p>
            <p>
              The information in this tool is based on expert guidance from the British Columbia
              Centre for Disease (BCCDC). It does not replace your health care provider's advice.{' '}
            </p>
          </Trans>
        </div>
      </main>
    </>
  );
};

export default Home;
