import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useFormikContext } from 'formik';
import { SymptomCheckerForm } from '../types';
import { SeverityQuestion } from './SeverityQuestion';
import { HealthLinkBC } from 'src/components/HealthLinkBC';

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
          <div className='text-base text-bcGray font-bold mb-2'>
            You need to contact your health care provider or call 8-1-1 if you have any of these
            symptoms:
            <ul className='list-disc pl-6'>
              <li>You are not able to keep down small sips of water</li>
              <li>
                You feel like you are dehydrated because you have less frequent urination or you
                feel light-headed when you stand
              </li>
            </ul>
          </div>
          <div className='text-base text-bcGray'></div>
        </Trans>
        <div className='text-base text-bcGray'>
          <HealthLinkBC />
        </div>
      </div>
    );
  };

  return (
    <SeverityQuestion symptom={symptom} description={renderDescription()}>
      {severity ? (
        <div className='bg-bcLightBoxBackground md:bg-gray-50 my-4 p-4 border rounded'>
          <div className='text-bcBlueLink font-bold'>{t(`${severity}`)}</div>
          <div className='font-bold mt-3'>{t(`${symptom}-${severity}-title`)}</div>
        </div>
      ) : (
        ''
      )}
    </SeverityQuestion>
  );
};
