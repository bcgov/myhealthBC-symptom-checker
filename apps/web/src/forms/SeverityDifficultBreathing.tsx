import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useFormikContext } from 'formik';
import { SymptomCheckerForm } from '../types';
import { SeverityQuestion } from './SeverityQuestion';
import { Link811 } from 'src/components/Link811';
import { LinkUPCC } from 'src/components/LinkUPCC';

export const SeverityDifficultBreathing = () => {
  const { t } = useTranslation('severity');

  const { values } = useFormikContext<SymptomCheckerForm>();

  const symptom = 'difficultBreathing';
  const details = values.symptoms[symptom];
  const severity = details.severity;

  let severityDescription = <></>;

  switch (severity) {
    case 'Mild':
      severityDescription = (
        <>
          <p>
            If you start to have difficulty breathing while you’re doing regular activities like
            walking to the bathroom or walking up stairs, contact your health care provider or call{' '}
            {Link811} right away.
          </p>
          <p>
            If you find it hard to breathe or can’t drink anything, call 9-1-1 or go to an{' '}
            {LinkUPCC} or emergency department right away.
          </p>
        </>
      );
      break;
    case 'Moderate':
      severityDescription = (
        <>
          <p>Contact your health care provider or call {Link811} right away.</p>
          <p>
            If you find it hard to breathe or can’t drink anything, call 9-1-1 or go to an{' '}
            {LinkUPCC} or emergency department right away.
          </p>
        </>
      );
      break;
    case 'Severe':
      severityDescription = (
        <>
          <p>
            You need medical attention. Call 9-1-1 or go to an {LinkUPCC} or emergency department
            right away.
          </p>
        </>
      );

      break;
  }

  return (
    <SeverityQuestion symptom={symptom}>
      {severity ? (
        <div className='bg-bcLightBoxBackground md:bg-gray-50 my-4 p-4 border rounded'>
          <div className='text-bcBlueLink font-bold'>{t(`${severity}`)}</div>
          <div className='font-bold mt-3'>{t(`${symptom}-${severity}-title`)}</div>
          {severity !== 'None' ? (
            <div className='mt-3'>
              <Trans t={t} i18nKey={`${symptom}-${severity}-desc`}>
                {severityDescription}
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
