import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import banner from 'src/images/banner.svg';
import covidAndChildren from 'src/images/children.png';
import covidapp from 'src/images/covidapp.png';
import appStore from 'src/images/app_store.svg';
import playStore from 'src/images/play_store.svg';
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
          <div>Last updated</div>
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
            <ul>
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
        </div>
      </main>
      <aside className='container mx-auto max-w-main py-8'>
        <div className='flex flex-wrap md:flex-nowrap'>
          <div className='basis-full md:basis-1/2 p-5 md:mr-5 mb-5 drop-shadow-md bg-white'>
            <Trans i18nKey='home-covid19-children-desc'>
              <h3 className='text-xl font-bold'>COVID-19 and children</h3>
              <img src={covidAndChildren} alt='covid 19 and children' className='my-3 w-full' />
              <p>
                Children generally show COVID-19 symptoms differently than adults. For example, they
                may have milder symptoms, or they may show a change in energy level, appetite or
                behaviour.
                <a
                  className='inline-block'
                  target='_blank'
                  href='http://www.bccdc.ca/health-info/diseases-conditions/covid-19/covid-19-and-children'
                  rel='noreferrer'
                >
                  Learn more about COVID-19 and children.
                </a>
              </p>
            </Trans>
          </div>
          <div className='basis-full md:basis-1/2 p-5 md:ml-5 mb-5 drop-shadow-md bg-white'>
            <Trans i18nKey='home-mobile-apps-desc'>
              <h3 className='text-xl font-bold'>My Health BC app</h3>
              <img src={covidapp} alt='covid apps' className='my-3 w-full' />
              <p className='mb-5'>
                Take COVID-19 self-assessment on your phone with access to you and your
                family&apos;s assessment history and all your BC proofs of vaccination.
              </p>
            </Trans>
            <a className='inline-block' href='#' title='App Store' target='_blank'>
              <img src={appStore} className='pr-3' alt='App Store' />
            </a>
            <a className='inline-block' href='#' title='Play Store' target='_blank'>
              <img src={playStore} alt='Play Store' />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Home;
