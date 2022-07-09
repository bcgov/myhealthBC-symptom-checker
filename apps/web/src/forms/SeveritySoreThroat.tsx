import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useFormikContext } from 'formik';
import { Severity, SymptomCheckerForm } from '../types';
import { SeverityQuestion } from './SeverityQuestion';

export const SeveritySoreThroat = () => {
  const { t } = useTranslation('severity');

  const { values } = useFormikContext<SymptomCheckerForm>();

  const symptom = 'soreThroat';
  const details = values.symptoms[symptom];
  const severity = details.severity;

  const renderDescription = () => {
    return (
      <div>
        <Trans t={t} i18nKey={`${symptom}-description`}>
          <div className='text-base text-bcGray mb-2'>
            If your pain is increasing or if you’re having trouble swallowing, please contact your
            health care provider or call 8-1-1 right away.
            <br />
            <br />
            If you find you can’t are not able to drink anything, you need medical attention. call
            9-1-1 or visit go to an{' '}
            <a
              className='underline text-bcBlueLink'
              href='https://www.healthlinkbc.ca/health-services/urgent-and-primary-care-centres'
            >
              Urgent and Primary Care Centre (UPCC)
            </a>{' '}
            or an emergency department right away.
          </div>
          <div className='text-base text-bcGray mb-2'>
            Get more information about sore throats from{' '}
            <a
              className='underline text-bcBlueLink'
              href='https://www.healthlinkbc.ca/illnesses-conditions/infectious-diseases/sore-throat-and-other-throat-problems'
            >
              HealthLink BC
            </a>{' '}
            about sore throats
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
          {severity === Severity.Moderate ? (
            <div className='mt-3'>{t(`${symptom}-${severity}-desc`)}</div>
          ) : (
            ''
          )}
          {severity === Severity.Severe ? (
            <div className='mt-3'>
              <Trans t={t} i18nKey={`${symptom}-${severity}-desc`}>
                If you find you can’t are not able to drink anything, you need medical attention.
                call 9-1-1 or visit go to an
                <a
                  className='underline text-bcBlueLink'
                  href='https://www.healthlinkbc.ca/health-services/urgent-and-primary-care-centres'
                >
                  {' '}
                  Urgent and Primary Care Centre (UPCC)
                </a>{' '}
                or an emergency department right away.
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
