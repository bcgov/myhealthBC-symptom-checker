import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { LinkUPCC } from 'src/components/LinkUPCC';

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
        <b>Call 9-1-1 or visit an {LinkUPCC} or emergency department right away.</b>
      </Trans>
    </ResultPageLayout>
  );
};
