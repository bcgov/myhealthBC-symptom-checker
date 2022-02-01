import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { SeverityQuestion } from './SeverityQuestion';

export const SeverityDiarrhea = () => {
  const { t } = useTranslation('severity');

  const symptom = 'diarrhea';

  const renderDescription = () => {
    return (
      <div>
        <div className='text-base text-bcGray mb-2'>{t(`${symptom}-description`)}</div>
        <div className='text-base text-bcGray font-bold mb-2'>{t(`${symptom}-description1`)}</div>
        <div className='text-base text-bcGray'>
          <Trans i18nKey={`${symptom}-description2`}>
            For more information on headaches, go to{' '}
            <a
              className='underline text-bcBlueLink'
              href='https://www.healthlinkbc.ca/health-topics/heada'
            >
              Healthlink BC
            </a>
            .
          </Trans>
        </div>
      </div>
    );
  };

  return <SeverityQuestion symptom={symptom} description={renderDescription()} />;
};
