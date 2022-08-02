import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link811 } from 'src/components/Link811';

import noTest from '../images/noTest.svg';
import { ResultPageLayout } from './ResultPageLayout';

export const ResultAsymptomaticNoTest = () => {
  const { t } = useTranslation();

  return (
    <ResultPageLayout
      image={noTest}
      imageBg='bg-white'
      imageAlt='check mark'
      title={t('ResultAsymptomaticNoTest')}
      titleColor='text-bcGreenSuccess'
    >
      <p>
        <Trans i18nKey={'ResultAsymptomaticDescription'}>
          <b>Pay attention to how you're feeling.</b> If you start developing symptoms, you can
          re-take this self-assessment tool.
        </Trans>
      </p>
      <p>
        <Trans i18nKey='ResultAsymptomaticNotice1'>
          If you have any questions, contact your health care provider or call {Link811} to talk to
          a nurse at HealthLink BC.
        </Trans>
      </p>
    </ResultPageLayout>
  );
};
