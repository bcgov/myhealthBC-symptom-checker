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
          {/*<div className='mb-5'>*/}
          {/*  <ul className='flex'>*/}
          {/*    <li className='pr-3 mr-3 border-r-bc-gray border-r-2'>English</li>*/}
          {/*    <li className='mr-6'>*/}
          {/*      <a className='text-blue-500 hover:text-blue-800' href='#'>*/}
          {/*        French*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</div>*/}
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
              The Ministry of Health, in partnership with Thrive Health, created this
              self-assessment tool to provide up-to-date guidance and recommendations for testing
              and follow-up for COVID-19 that follows BCCDC guidance. You can complete this
              assessment for yourself or on behalf of someone else.
              <strong>We do not recommend this tool for children under 2 years old</strong>; please
              see your healthcare provider.
            </p>
            <p className='mb-2'>
              This guidance is not to be used to determine suitability to attend/return to work or
              school.
            </p>
            <p className='mb-2'>
              This self-assessment tool is intended for COVID-19 only and does not replace your
              health care provider&apos;s advice. Your symptoms may not be related to COVID-19 and
              could require you to seek medical attention.
            </p>
          </Trans>
        </div>
      </main>
      <aside className='container mx-auto max-w-main py-8'>
        <div className='flex flex-wrap md:flex-nowrap'>
          <div className='basis-full md:basis-1/2 p-5 md:mr-5 mb-5 drop-shadow-md bg-white'>
            <h3 className='text-xl font-bold'>COVID-19 and Children</h3>
            <img src={covidAndChildren} alt='covid 19 and children' className='my-3 w-full' />
            <Trans i18nKey='home-covid19-children-desc'>
              <p>
                Children generally have milder symptoms of COVID-19 than adults. Children may also
                present symptoms of COVID-19 differently than adults. For example, symptoms in
                children may be a change in activity level, appetite, or behaviour. For children,
                it&apos;s important to think about what is usual or unusual about their specific
                symptoms. For more information visit COVID-19 and children.
              </p>
            </Trans>
          </div>
          <div className='basis-full md:basis-1/2 p-5 md:ml-5 mb-5 drop-shadow-md bg-white'>
            <h3 className='text-xl font-bold'>My Health BC app</h3>
            <img src={covidapp} alt='covid apps' className='my-3 w-full' />
            <Trans i18nKey='home-mobile-apps-desc'>
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
