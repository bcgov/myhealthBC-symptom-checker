import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useFormikContext } from 'formik';
import { Severity, SymptomCheckerForm } from '../types';
import { SeverityQuestion } from './SeverityQuestion';
import { Link811 } from 'src/components/Link811';
import { LinkUPCC } from 'src/components/LinkUPCC';
import { Link } from 'src/components/Link';

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
            <p>
              If your pain is increasing or if you’re having trouble swallowing, contact your health
              care provider or call {Link811} right away.
            </p>

            <p>
              If you find you can’t drink anything, call 9-1-1 or go to an {LinkUPCC} or emergency
              department right away.
            </p>
            <p>
              Get more information from{' '}
              <Link href='https://www.healthlinkbc.ca/illnesses-conditions/infectious-diseases/sore-throat-and-other-throat-problems'>
                HealthLink BC
              </Link>{' '}
              about sore throats.
            </p>
          </div>
        </Trans>
      </div>
    );
  };
  let severityDescription = <div />;
  switch (severity) {
    case Severity.Moderate:
      severityDescription = (
        <div className='mt-3'>
          <Trans t={t} i18nKey={`${symptom}-${severity}-desc`}>
            If you're having trouble swallowing, contact your health care provider or call {Link811}{' '}
            right away.
          </Trans>
        </div>
      );
      break;
    case Severity.Severe:
      severityDescription = (
        <div className='mt-3'>
          <Trans t={t} i18nKey={`${symptom}-${severity}-desc`}>
            If you find you can’t drink anything, call 9-1-1 or go to an {LinkUPCC} or emergency
            department right away.
          </Trans>
        </div>
      );
      break;
  }

  return (
    <SeverityQuestion symptom={symptom} description={renderDescription()}>
      {severity && (
        <div className='bg-bcLightBoxBackground md:bg-gray-50 my-4 p-4 border rounded'>
          <div className='text-bcBlueLink font-bold'>{t(`${severity}`)}</div>
          <div className='font-bold mt-3'>{t(`${symptom}-${severity}-title`)}</div>
          {severityDescription}
        </div>
      )}
    </SeverityQuestion>
  );
};
