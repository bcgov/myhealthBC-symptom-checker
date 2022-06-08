import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { SeverityQuestion } from './SeverityQuestion';

export const SeverityDiarrhea = () => {
  const { t } = useTranslation('severity');

  const symptom = 'diarrhea';

  const renderDescription = () => {
    return (
      <div>
        <Trans t={t} i18nKey={`${symptom}-description`}>
          <div className='text-base text-bcGray mb-2'>
            You need to contact your health care provider or call 8-1-1 if you have any of these
            symptoms:
          </div>
          <ul className='list-disc pl-6'>
            <li>Your diarrhea is getting worse.</li>
            <li>You have bloody diarrhea or black, tarry stool.</li>
            <li>
              You are dehydrated. Signs of dehydration include less frequent urination or feeling
              light-headed when you stand.
            </li>
          </ul>
          <div className='text-base text-bcGray'>
            Get more information about diarrhea from{' '}
            <a
              className='underline text-bcBlueLink'
              href='https://www.healthlinkbc.ca/illnesses-conditions/bowel-and-gastrointestinal-conditions/mild-moderate-or-severe-diarrhea'
              rel='noreferrer'
              target='_blank'
            >
              Healthlink BC
            </a>
            .
          </div>{' '}
        </Trans>
      </div>
    );
  };

  return <SeverityQuestion symptom={symptom} description={renderDescription()} />;
};
