import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFormikContext } from 'formik';
import { SymptomCheckerForm } from '../types';
import { SeverityQuestion } from './SeverityQuestion';
import { HealthLinkBC } from '../components/HealthLinkBC';

export const SeverityCough = () => {
  const { t } = useTranslation('severity');

  const { values } = useFormikContext<SymptomCheckerForm>();

  const symptom = 'cough';
  const details = values.symptoms[symptom];
  const severity = details.severity;

  const renderDescription = () => {
    return (
      <div>
        <div className='text-base text-bcGray mb-2'>{t(`${symptom}-description`)}</div>
        <div className='text-base text-bcGray font-bold mb-2'>{t(`${symptom}-description1`)}</div>
        <div className='text-base text-bcGray'>
          <HealthLinkBC />
        </div>
      </div>
    );
  };

  return (
    <SeverityQuestion symptom={symptom} description={renderDescription()}>
      {severity ? (
        <div className='bg-gray-50 my-4 p-4 rounded'>
          <div className='text-bcBlueLink font-bold'>{t(`${severity}`)}</div>
          <div className='font-bold mt-3'>
            {t(severity === 'None' ? 'None-title' : `${symptom}-${severity}-title`)}
          </div>
        </div>
      ) : (
        ''
      )}
    </SeverityQuestion>
  );
};
