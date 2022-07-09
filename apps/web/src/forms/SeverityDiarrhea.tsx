import { useFormikContext } from 'formik';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Severity, SymptomCheckerForm } from 'src/types';
import { SeverityQuestion } from './SeverityQuestion';

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
            Contact your health care provider or call 8-1-1 if:
          </div>
          <ul className='list-disc pl-6'>
            <li>Your diarrhea is getting worse.</li>
            <li>You have bloody diarrhea or black, tarry stool.</li>
            <li>
              You are dehydrated, for example, you don’t have to pee very often or you feel
              light-headed when you stand up
            </li>
          </ul>
          <div className='text-base text-bcGray'>
            Get more information from{' '}
            <a
              className='underline text-bcBlueLink'
              href='https://www.healthlinkbc.ca/illnesses-conditions/bowel-and-gastrointestinal-conditions/mild-moderate-or-severe-diarrhea'
              rel='noreferrer'
              target='_blank'
            >
              Healthlink BC
            </a>
            about diarrhea.
          </div>{' '}
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
          {severity === Severity.Severe ? (
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
