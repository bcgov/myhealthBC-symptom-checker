import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

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
        <p>
          <Trans i18nKey='ResultRapidTestNotice'>
            <a
              className='underline text-bcBlueLink'
              href='https://www2.gov.bc.ca/gov/content/covid-19/info/testing#get'
              rel='noreferrer'
              target='_blank'
            >
              Rapid antigen testing kits are free for everyone
            </a>
            . Visit your local pharmacy and ask for your testing kit.
          </Trans>
        </p>
      </div>
    </ResultPageLayout>
  );
};
