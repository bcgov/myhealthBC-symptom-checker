import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import call911 from '../images/call911.svg';
import { ResultPageLayout } from './ResultPageLayout';

export const ResultCall911 = () => {
  const { t } = useTranslation();
  return (
    <ResultPageLayout
      image={call911}
      imageBg='bg-white'
      imageAlt='ambulance'
      title={t('Result911')}
      titleColor='text-bcRedError'
    >
      <Trans i18nKey='Result911Description'>
        <b>
          Call 9-1-1 or visit an{' '}
          <a
            className='underline text-bcBlueLink'
            href='https://www.healthlinkbc.ca/health-services/urgent-and-primary-care-centres'
            rel='noreferrer'
            target='_blank'
          >
            Urgent and Primary Care Centre (UPCC)
          </a>{' '}
          or emergency department right away.
        </b>
      </Trans>
    </ResultPageLayout>
  );
};
