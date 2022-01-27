import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import house from '../images/house.svg';
import { ResultPageLayout } from './ResultPageLayout';

export const ResultAsymptomaticNoTest = () => {
  const { t } = useTranslation();

  return (
    <ResultPageLayout
      image={house}
      imageBg='bg-greenLight'
      imageAlt='safe house'
      title={t('ResultAsymptomatic')}
      titleColor='text-bcGreenSuccess'
    >
      <div>{t('ResultAsymptomaticDescription')}</div>
      <div className='bg-bcLightBlueBackground my-4 p-4 text-bcBlueLink'>
        <div>
          <Trans i18nKey='ResultAsymptomaticNotice1'>
            If you have any questions or concerns, contact your health care provider or call{' '}
            <b>8-1-1</b>.
          </Trans>
        </div>
        <div>
          <Trans i18nKey='ResultAsymptomaticNotice2'>
            For more information on COVID-19 and how to stay safe, visit the{' '}
            <a className='underline text-bcBlueAccent' href='http://www.bccdc.ca/'>
              BCCDC website
            </a>
          </Trans>
        </div>
      </div>
    </ResultPageLayout>
  );
};
