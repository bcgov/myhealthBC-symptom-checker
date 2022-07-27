import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useFormikContext } from 'formik';
import { Severity, SymptomCheckerForm } from '../types';
import { SeverityQuestion } from './SeverityQuestion';
import { HealthLinkBC } from 'src/components/HealthLinkBC';
import { Link811 } from 'src/components/Link811';

export const SeverityNausea = () => {
  const { t } = useTranslation('severity');

  const { values } = useFormikContext<SymptomCheckerForm>();

  const symptom = 'nauseaVomiting';
  const details = values.symptoms[symptom];
  const severity = details.severity;

  const renderDescription = () => {
    return (
      <div>
        <Trans t={t} i18nKey={`${symptom}-description`}>
          <div className='text-base text-bcGray mb-2'>
            Contact your health care provider or call {Link811} if:
            <ul className='list-disc pl-6'>
              <li>You're not able to keep down even small sips of water</li>
              <li>
                You are dehydrated, for example, you don’t have to pee very often or you feel
                light-headed when you stand up
              </li>
            </ul>
          </div>
        </Trans>
        <div className='text-base text-bcGray'>
          <HealthLinkBC
            linkForChildren={
              'https://www.healthlinkbc.ca/health-topics/nausea-and-vomiting-age-11-and-younger'
            }
            linkForAdults={
              'https://www.healthlinkbc.ca/health-topics/nausea-and-vomiting-age-12-and-older'
            }
            translationKey={'nausea-healthLinkBC'}
          />
        </div>
      </div>
    );
  };
  let severityDescription = <div />;
  if (severity === Severity.Severe) {
    severityDescription = (
      <div className='mt-3'>
        <Trans t={t} i18nKey={`${symptom}-${severity}-desc`}>
          You should get health advice. Call {Link811} or contact your health care provider.
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
