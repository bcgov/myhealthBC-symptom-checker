import { useFormikContext } from 'formik';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Severity, SymptomCheckerForm } from 'src/types';
import { SeverityQuestion } from './SeverityQuestion';
import { Link811 } from 'src/components/Link811';
import { Link } from 'src/components/Link';

export const SeverityDiarrhea = () => {
  const { t } = useTranslation('severity');
  const { values } = useFormikContext<SymptomCheckerForm>();

  const symptom = 'diarrhea';
  const details = values.symptoms[symptom];
  const severity = details.severity;
  const renderDescription = () => {
    return (
      <div>
        <Trans t={t} i18nKey={`${symptom}-description`}>
          <div className='text-base text-bcGray mb-2'>
            Contact your health care provider or call {Link811} if:
          </div>
          <ul className='list-disc pl-6'>
            <li>Your diarrhea is getting worse</li>
            <li>You have bloody diarrhea or black, tarry stool</li>
            <li>
              You are dehydrated, for example, you don’t have to pee very often or you feel
              light-headed when you stand up
            </li>
          </ul>
          <div className='text-base text-bcGray mt-3'>
            Get more information from{' '}
            <Link href='https://www.healthlinkbc.ca/illnesses-conditions/bowel-and-gastrointestinal-conditions/mild-moderate-or-severe-diarrhea'>
              Healthlink BC
            </Link>{' '}
            about diarrhea.
          </div>{' '}
        </Trans>
      </div>
    );
  };
  let severityDescription = <div />;
  if (severity === Severity.Severe) {
    severityDescription = (
      <div className='mt-3'>
        <Trans t={t} i18nKey={`${symptom}-${severity}-desc`}>
          <p>You should get health advice. Call {Link811} or contact your health care provider.</p>
        </Trans>
      </div>
    );
  }

  return (
    <SeverityQuestion symptom={symptom} description={renderDescription()}>
      {severity ? (
        <div className='bg-bcLightBoxBackground md:bg-gray-50 my-4 p-4 border rounded'>
          <div className='text-bcBlueLink font-bold'>{t(`${severity}`)}</div>
          <div className='font-bold mt-3'>{t(`${symptom}-${severity}-title`)}</div>
          {severityDescription}
        </div>
      ) : (
        ''
      )}
    </SeverityQuestion>
  );
};
