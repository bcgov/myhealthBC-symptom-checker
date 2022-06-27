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
          <p>
            A PCR test may be the preferred COVID-19 test. However, other testing types can be used
          </p>
        </Trans>
      </div>
      <ol className='list-decimal pl-4'>
        <li className='my-3'>
          <Trans i18nKey='ResultSymptomaticTestDescription2'>
            <a
              className='underline text-bcBlueLink'
              href='http://www.bccdc.ca/health-info/diseases-conditions/covid-19/testing/where-to-get-a-covid-19-test-in-bc'
              rel='noreferrer'
              target='_blank'
            >
              Find out where to get a test
            </a>
            . You need to{' '}
            <a
              className='underline text-bcBlueLink'
              href='http://www.bccdc.ca/health-info/diseases-conditions/covid-19/self-isolation'
              rel='noreferrer'
              target='_blank'
            >
              self-isolate
            </a>{' '}
            while you wait for your test result.
          </Trans>
        </li>
        <li className='my-3'>
          <Trans i18nKey='ResultSymptomaticTestDescription3'>
            <a
              className='underline text-bcBlueLink'
              href='http://www.bccdc.ca/health-info/diseases-conditions/covid-19/testing/test-results'
              rel='noreferrer'
              target='_blank'
            >
              Get your test results.
            </a>
          </Trans>
        </li>
        <li className='my-3'>
          <Trans i18nKey='ResultSymptomaticTestDescription4'>
            <a
              className='underline text-bcBlueLink'
              href='https://www2.gov.bc.ca/gov/content/covid-19/vaccine/treatments'
              rel='noreferrer'
              target='_blank'
            >
              Find out it you may benefit from treatment.
            </a>
          </Trans>
        </li>
      </ol>
      <div>
        <Trans i18nKey='ResultSymptomaticTestDescription6'>
          <p>
            <b>
              If you test positive for COVID-19, are 18 years or older, and are not fully vaccinated
            </b>
            , self-isolate for at least 10 days from the day your symptoms started. You can stop
            isolating after 10 days as long as your fever has resolved without the use of
            fever-reducing medication, such as acetaminophen or ibuprofen, and your symptoms have
            improved.
          </p>
          <p>
            <b>
              If you test positive for COVID-19 and are fully vaccinated or are under 18 years old
            </b>
            , self-isolate for at least 5 days from the day your symptoms started. You can stop
            isolating after 5 days as long as your fever has resolved without the use of
            fever-reducing medication, such as acetaminophen or ibuprofen, and your symptoms have
            improved.
          </p>
          <p>
            Fully vaccinated means you received both doses of a 2-dose series (e.g. AstraZeneca,
            Pfizer, or Moderna vaccine) or it has been more than 14 days since you received a single
            dose of a 1-dose series (e.g. Janssen/ Johnson and Johnson).{' '}
          </p>
          <p>
            <b>If you test negative for COVID-19</b>, stay home until you feel well enough to return
            to your regular activities.
          </p>
        </Trans>
      </div>
      <NoticeBox>
        <Trans i18nKey='ResultSymptomaticTestNotice'>
          <p>
            <b>Pay attention to how you're feeling.</b> If your symptoms change, you should get
            health advice:
          </p>
          <ul className='list-disc pl-6'>
            <li>
              Contact your health care provider <br /> OR{' '}
            </li>
            <li>Call 8-1-1 to talk to a nurse at HealthLink BC</li>
          </ul>
          <p>
            Call 9-1-1 or visit an{' '}
            <a
              className='underline text-bcBlueLink'
              href='https://www.healthlinkbc.ca/health-services/urgent-and-primary-care-centres'
              rel='noreferrer'
              target='_blank'
            >
              Urgent and Primary Care Centre
            </a>
            or emergency department right away if you start to feel worse - for example, if it gets
            hard to breathe or you can't drink anything.
          </p>
        </Trans>
      </NoticeBox>
    </ResultPageLayout>
  );
};
