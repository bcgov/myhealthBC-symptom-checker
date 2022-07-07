import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import stethoscope from '../images/stethoscope.svg';
import { ResultPageLayout } from './ResultPageLayout';
export const ResultCall811 = () => {
  const { t } = useTranslation();

  return (
    <ResultPageLayout
      image={stethoscope}
      imageBg='bg-lightYellowBackground'
      imageAlt='stethoscope'
      title={t('Result811')}
      titleColor='text-bcBlueNav'
    >
      <Trans i18nKey='Result811Notice'>
        <b>Pay attention to how you're feeling.</b> You should call 9-1-1 or visit an{' '}
        <a
          href='https://www.healthlinkbc.ca/health-services/urgent-and-primary-care-centres'
          className='underline text-bcBlueLink'
          rel='noreferrer'
          target='_blank'
        >
          Urgent and Primary Care Centre (UPCC)
        </a>{' '}
        or emergency department right away if you start to feel worse – for example, if it gets hard
        to breathe or you can’t drink anything.
      </Trans>
    </ResultPageLayout>
  );
};
