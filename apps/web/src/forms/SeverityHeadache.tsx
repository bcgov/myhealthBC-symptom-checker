import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useFormikContext } from 'formik';
import { Severity, SymptomCheckerForm } from '../types';
import { SeverityQuestion } from './SeverityQuestion';
import { LinkUPCC } from 'src/components/LinkUPCC';
import { Link } from 'src/components/Link';

export const SeverityHeadache = () => {
  const { t } = useTranslation('severity');

  const { values } = useFormikContext<SymptomCheckerForm>();

  const symptom = 'headache';
  const details = values.symptoms[symptom];
  const severity = details.severity;

  const renderDescription = () => {
    return (
      <div>
        <Trans t={t} i18nKey={`${symptom}-description`}>
          <div className='text-base text-bcGray font-bold mb-2'>
            If you have a severe headache that started suddenly and is the worst headache of your
            life, call 9-1-1 or go to an {LinkUPCC} or emergency department right away.
          </div>
          <div className='text-base text-bcGray'>
            Get more information from{' '}
            <Link href='https://www.healthlinkbc.ca/health-topics/headaches-0'>Healthlink BC</Link>{' '}
            about headaches.
          </div>
        </Trans>
      </div>
    );
  };

  return (
    <SeverityQuestion symptom={symptom} description={renderDescription()}>
      {severity ? (
        <div className='bg-bcLightBoxBackground md:bg-gray-50 my-4 p-4 border rounded'>
          <div className='text-bcBlueLink font-bold'>{t(`${severity}`)}</div>
          <div className='font-bold mt-3'>{t(`${symptom}-${severity}-title`)}</div>
          {severity === Severity.Severe ? (
            <div className='mt-3'>{t(`${symptom}-${severity}-desc`)}</div>
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )}
    </SeverityQuestion>
  );
};
