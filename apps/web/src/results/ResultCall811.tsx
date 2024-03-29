import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link811 } from 'src/components/Link811';
import { LinkUPCC } from 'src/components/LinkUPCC';

import call811 from '../images/call811.svg';
import { ResultPageLayout } from './ResultPageLayout';
export const ResultCall811 = () => {
  const { t } = useTranslation();

  return (
    <ResultPageLayout
      image={call811}
      imageBg='bg-white'
      imageAlt='stethoscope'
      title={t('Result811')}
      titleColor='text-bcBlueNav'
    >
      <Trans i18nKey='Result811Notice'>
        <p>
          Contact your health care provider or call {Link811} to talk to a nurse at HealthLink BC.
        </p>
        <p>
          <b>Pay attention to how you're feeling.</b> If you start to feel very sick (for example,
          if you're having trouble breathing or can't drink anything), call 9-1-1 or visit an{' '}
          {LinkUPCC} emergency department right away.
        </p>
      </Trans>
    </ResultPageLayout>
  );
};
