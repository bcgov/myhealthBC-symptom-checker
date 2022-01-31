import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFormikContext } from 'formik';
import { Severity, SymptomCheckerForm } from '../types';
import { SeverityQuestion } from './SeverityQuestion';

export const SeveritySoreThroat = () => {
  const { t } = useTranslation('severity');

  const { values } = useFormikContext<SymptomCheckerForm>();

  const symptom = 'soreThroat';
  const details = values.symptoms[symptom];
  const severity = details.severity;

  return (
    <SeverityQuestion symptom={symptom}>
      {severity ? (
        <div className='bg-bcLightBoxBackground md:bg-gray-50 my-4 p-4 border rounded'>
          <div className='text-bcBlueLink font-bold'>{t(`${severity}`)}</div>
          <div className='font-bold mt-3'>
            {t(severity === 'None' ? 'None-title' : `${symptom}-${severity}-title`)}
          </div>
          {severity === Severity.Severe || severity === Severity.Moderate ? (
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
