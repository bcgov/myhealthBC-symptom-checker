import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import vial from '../images/vial.svg';
import { ResultPageLayout } from './ResultPageLayout';
import { NoticeBox } from '../components/NoticeBox';

export const ResultSymptomaticTest = () => {
  const { t } = useTranslation();

  return (
    <ResultPageLayout
      image={vial}
      imageBg='bg-lightYellowBackground'
      imageAlt='vial'
      title={t('ResultSymptomaticTest')}
      titleColor='text-bcBlueNav'
    >
      <div>
        <Trans i18nKey='ResultSymptomaticTestDescription1'>
          <b>If you test positive for COVID-19</b>{' '}
          <a
            className='underline text-bcBlueLink'
            href='http://www.bccdc.ca/health-info/diseases-conditions/covid-19/self-isolation'
            rel='noreferrer'
            target='_blank'
          >
            self-isolate
          </a>{' '}
          for 10 days from the day your symptoms started.
          <br />
          Public health will contact you within 24-72 hours to follow-up with you.
        </Trans>
      </div>
      <div className='mt-3 mb-4'>
        <Trans i18nKey='ResultSymptomaticTestDescription2'>
          <b>If you test positive for COVID-19</b>, stay home until you feel better.
        </Trans>
      </div>
      <ol className='list-decimal pl-4'>
        <li className='my-3'>
          <Trans i18nKey='ResultSymptomaticTestDescription3'>
            <b>If you test positive for COVID-19</b>, stay home until you feel better.
          </Trans>
        </li>
        <li className='my-3'>
          <Trans i18nKey='ResultSymptomaticTestDescription4'>
            <a
              className='underline text-bcBlueLink'
              href='https://bc.thrive.health/covid19app/resources/c03f73e6-1c25-433d-9821-559626efbc21'
              rel='noreferrer'
              target='_blank'
            >
              Access your test results
            </a>{' '}
            through any of these services.
          </Trans>
        </li>
        <li className='my-3'>
          <Trans i18nKey='ResultSymptomaticTestDescription5'>
            <a
              className='underline text-bcBlueLink'
              href='https://bc.thrive.health/covid19app/resources/7ac28674-60b0-40db-914a-e15b04af25ba'
              rel='noreferrer'
              target='_blank'
            >
              Learn what to do
            </a>{' '}
            after receiving your test results.
          </Trans>
        </li>
      </ol>
      <div>
        <Trans i18nKey='ResultSymptomaticTestDescription6'>
          For more information about the testing options for children and youth, visit{' '}
          <a
            className='underline text-bcBlueLink'
            href='http://www.bccdc.ca/health-info/diseases-conditions/covid-19/testing/children-youth'
            rel='noreferrer'
            target='_blank'
          >
            COVID-19 Testing for Children and Youth
          </a>
          .
        </Trans>
      </div>
      <div className='my-3'>{t('ResultSymptomaticTestDescription7')}</div>
      <NoticeBox>
        <div className='font-bold'>{t('ResultSymptomaticTestNotice1')}</div>
        <div className='mt-2'>{t('ResultSymptomaticTestNotice2')}</div>
      </NoticeBox>
    </ResultPageLayout>
  );
};
