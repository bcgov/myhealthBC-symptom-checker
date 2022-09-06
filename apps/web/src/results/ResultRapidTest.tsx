import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'src/components/Link';

import rapidTest from '../images/rapidTest.svg';
import { ResultPageLayout } from './ResultPageLayout';

// language changes, but this is currently described as the "non-PCR" test result
export const ResultRapidTest = () => {
  const { t } = useTranslation();

  return (
    <ResultPageLayout
      image={rapidTest}
      imageBg='bg-white'
      imageAlt='self isolate'
      title={t('ResultRapidTest')}
      titleColor='text-bcBlueNav'
    >
      <div>
        <p>{t('ResultRapidTestDescription1')}</p>
        <Trans i18nKey='ResultRapidTestDescription2'>
          <p>
            <Link href='https://www2.gov.bc.ca/gov/content/covid-19/info/testing#get'>
              Rapid antigen testing kits are free for everyone
            </Link>
            . Visit your local pharmacy and ask for your testing kit.
          </p>
        </Trans>
        <Trans i18nKey='ResultRapidTestDescription3'>
          <p>You can get a PCR COVID-19 test if you:</p>
          <ul className='list-disc pl-6'>
            <li>Identify as an Indigenous person (proof of ancestry is not required), or</li>
            <li>
              Work in health care at a hospital, long-term care facility, assisted living facility
              or community clinic, or
            </li>
            <li>
              Work as a first responder (police officer, firefighter, emergency medical technician
              or paramedic, or
            </li>
            <li>
              Live or work in a congregate setting, like a long-term care facility, shelter,
              correctional facility or group home, or
            </li>
            <li>
              Live in a community that is far from testing centres and hospitals, including rural,
              remote, isolated or Indigenous communities or a work camp.
            </li>
          </ul>

          <p>
            <Link href='http://www.bccdc.ca/health-info/diseases-conditions/covid-19/testing/where-to-get-a-covid-19-test-in-bc'>
              Find out where to get a COVID-19 test in B.C.
            </Link>
          </p>
        </Trans>
      </div>
    </ResultPageLayout>
  );
};
