import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useFormikContext } from 'formik';
import { Severity, SymptomCheckerForm } from '../types';
import { SeverityQuestion } from './SeverityQuestion';
import { HealthLinkBC } from '../components/HealthLinkBC';
import { Link811 } from 'src/components/Link811';

export const SeverityCough = () => {
  const { t } = useTranslation('severity');

  const { values } = useFormikContext<SymptomCheckerForm>();

  const symptom = 'cough';
  const details = values.symptoms[symptom];
  const severity = details.severity;

  const renderDescription = () => {
    return (
      <div>
        <Trans t={t} i18nKey={`${symptom}-description`}>
          <div className='text-base text-bcGray mb-2'>
            Contact your health care provider or call {Link811} if:
            <ul className='list-disc pl-6'>
              <li>Your cough is getting worse</li>
              <li>You start coughing up blood or phlegm</li>
              <li>Your cough makes it hard to breathe</li>
            </ul>
          </div>
        </Trans>
        <div className='text-base text-bcGray mt-3'>
          <HealthLinkBC
            linkForChildren={'https://www.healthlinkbc.ca/health-topics/coughs-age-11-and-younger'}
            linkForAdults={'https://www.healthlinkbc.ca/health-topics/coughs-age-12-and-older'}
            translationKey={'cough-healthLinkBC'}
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
