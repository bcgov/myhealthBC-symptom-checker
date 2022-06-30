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
          <div>Last updated: June 10, 2022</div>
          <div className='flex flex-wrap md:flex-nowrap md:flex-row-reverse my-5'>
            <div className='basis-full md:basis-1/2'>
              <img src={banner} alt='government of british columbia' className='w-full' />
            </div>
            <div className='basis-full md:basis-1/2 md:pr-4'>
              <strong className='block my-4 md:mt-0'>{t('Tool description')}</strong>
              <Button
                title={t('Start assessment')}
                variant='primary'
                onClick={() => navigate('/checker')}
              >
                {t('Start assessment')}
              </Button>
            </div>
          </div>
          <div
            role='alert'
            className='border-l-bcBluePrimary border-l-8 p-4 my-4 bg-bcLightBackground'
          >
            {t('Home alert')}
          </div>
          <Trans i18nKey='home-desc'>
            <p className='mb-2'>
              You can also call 8-1-1 to talk to someone at HealthLink BC. They can:
            </p>
            <ul className='list-disc pl-6'>
              <li>Answer questions and provide advice for your specific situation</li>
              <li>Offer help in different languages</li>
            </ul>
            <p className='mb-2'>
              Do not use this self-assessment to check symptoms for anyone under 2 years old.
              Contact your health care provider or 8-1-1 instead.
            </p>
            <p className='mb-2'>
              The information in this tool is based on expert guidance from the British Columbia
              Centre for Disease (BCCDC). It does not replace your health care provider`&apos;`s
              advice.
            </p>
          </Trans>
          <h2 className='text-2xl font-bold mb-2 mt-4'>{t('home-children-header')}</h2>
          <p>{t('home-children-desc')}</p>
          <a
            href='http://www.bccdc.ca/health-info/diseases-conditions/covid-19/covid-19-and-children'
            className='underline text-bcBlueLink'
            rel='noreferrer'
            target='_blank'
          >
            {t('home-children-link')}
          </a>
        </div>
      </main>
    </>
  );
};

export default Home;
