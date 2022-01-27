import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import house from '../images/house.svg';
import { ResultPageLayout } from './ResultPageLayout';
import { NoticeBox } from '../components/NoticeBox';

export const ResultSymptomaticNoTest = () => {
  const { t } = useTranslation();

  return (
    <ResultPageLayout
      image={house}
      imageBg='bg-greenLight'
      imageAlt='house'
      title={t('ResultSymptomaticNoTest')}
      titleColor='text-bcGreenSuccess'
    >
      <div>{t('ResultSymptomaticNoTestDescription1')}</div>
      <div className='my-2'>{t('ResultSymptomaticNoTestDescription2')}</div>
      <NoticeBox>
        <div className='font-bold'>{t('ResultSymptomaticNoTestNotice1')}</div>
        <div className='mb-2'>{t('ResultSymptomaticNoTestNotice2')}</div>
        <div>
          <Trans i18nKey='ResultSymptomaticNoTestNotice3'>
            For more information on COVID-19 and how to stay safe, visit the{' '}
            <a
              className='underline text-bcBlueAccent'
              href='http://www.bccdc.ca/health-info/diseases-conditions/covid-19'
            >
              BCCDC website
            </a>
            .
          </Trans>
        </div>
      </NoticeBox>
    </ResultPageLayout>
  );
};
