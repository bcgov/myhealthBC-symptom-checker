import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import ambulance from '../images/ambulance.svg';
import { ResultPageLayout } from './ResultPageLayout';

export const ResultCall911 = () => {
  const { t } = useTranslation();

  return (
    <ResultPageLayout
      image={ambulance}
      imageBg='lightRedBackground'
      imageAlt='safe house'
      title={t('Result911')}
      titleColor='text-bcRedError'
    >
      <Trans i18nKey='Result911Description'>
        These symptoms require emergency medical care. You should <b>call 9-1-1 immediately</b>, or
        go directly to your nearest emergency department.
      </Trans>
    </ResultPageLayout>
  );
};
