import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useFormikContext } from 'formik';
import { Severity, SymptomCheckerForm } from '../types';
import { SeverityQuestion } from './SeverityQuestion';

export const SeverityHeadache = () => {
  const { t } = useTranslation('severity');

  const { values } = useFormikContext<SymptomCheckerForm>();

  const symptom = 'headache';
  const details = values.symptoms[symptom];
  const severity = details.severity;

  const renderDescription = () => {
    return (
      <div>
        <div className='text-base text-bcGray font-bold mb-2'>{t(`${symptom}-description`)}</div>
        <div className='text-base text-bcGray'>
          <Trans i18nKey={`${symptom}-description1`}>
            For more information on headaches, go to{' '}
            <a className='underline' href='https://www.healthlinkbc.ca/health-topics/heada'>
              Healthlink BC
            </a>
            .
          </Trans>
        </div>
      </div>
    );
  };

  return (
    <SeverityQuestion symptom={symptom} description={renderDescription()}>
      {severity ? (
        <div className='bg-bcLightBoxBackground md:bg-gray-50 my-4 p-4 border rounded'>
          <div className='text-bcBlueLink font-bold'>{t(`${severity}`)}</div>
          <div className='font-bold mt-3'>
            {t(severity === 'None' ? 'None-title' : `${symptom}-${severity}-title`)}
          </div>
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
