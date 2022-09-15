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
        <Trans i18nKey='ResultRapidTestNotice'>
          <p>
            <Link href='https://www2.gov.bc.ca/gov/content/covid-19/info/testing#get'>
              Rapid antigen testing kits are free for everyone
            </Link>
            . Visit your local pharmacy and ask for your testing kit.
          </p>
          <p>
            Information about managing your symptoms is available on the{' '}
            <Link href='http://www.bccdc.ca/health-info/diseases-conditions/covid-19/if-you-have-covid-19'>
              BCCDC website
            </Link>
            .
          </p>
        </Trans>
      </div>
    </ResultPageLayout>
  );
};
