import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useFormikContext } from 'formik';
import { SymptomCheckerForm } from '../types';
import { SeverityQuestion } from './SeverityQuestion';

export const SeverityDifficultBreathing = () => {
  const { t } = useTranslation('severity');

  const { values } = useFormikContext<SymptomCheckerForm>();

  const symptom = 'difficultBreathing';
  const details = values.symptoms[symptom];
  const severity = details.severity;

  return (
    <SeverityQuestion symptom={symptom}>
      {severity ? (
        <div className='bg-bcLightBoxBackground md:bg-gray-50 my-4 p-4 border rounded'>
          <div className='text-bcBlueLink font-bold'>{t(`${severity}`)}</div>
          <div className='font-bold mt-3'>{t(`${symptom}-${severity}-title`)}</div>
          {severity !== 'None' ? (
            <div className='mt-3'>
              <Trans t={t} i18nKey={`${symptom}-${severity}-desc`}>
                If you start to have difficulty breathing doing regular activities like walking to
                the bathroom or walking up stairs, contact your health care provider right away. If
                not, call 8-1-1. If your symptoms get worse, visit an{' '}
                <a
                  className='underline text-bcBlueLink'
                  href='https://www.healthlinkbc.ca/health-services/urgent-and-primary-care-centres'
                >
                  Urgent and Primary Care Centre (UPCC)
                </a>{' '}
                or emergency department
              </Trans>
            </div>
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
