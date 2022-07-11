import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useFormikContext } from 'formik';
import { SymptomCheckerForm } from '../types';
import { SeverityQuestion } from './SeverityQuestion';

export const SeverityDifficultBreathing = () => {
  const { t } = useTranslation('severity');

  const { values } = useFormikContext<SymptomCheckerForm>();

  const symptom = 'difficultBreathing';
  const details = values.symptoms[symptom];
  const severity = details.severity;

  let preLinkText;
  let postLinkText;
  let link = (
    <a
      className='underline text-bcBlueLink'
      href='https://www.healthlinkbc.ca/health-services/urgent-and-primary-care-centres'
    >
      {'  '} Urgent and Primary Care Centre (UPCC) {'  '}
    </a>
  );
  switch (severity) {
    case 'Mild':
      preLinkText = (
        <>
          If you start to have difficulty breathing while you’re doing regular activities like
          walking to the bathroom or walking up stairs, contact your health care provider or call
          8-1-1 right away. <br />
          If not, call 8-1-1.
          <br />
          <br />
          If you find it hard to breathe or can’t drink anything your symptoms get worse, call 9-1-1
          or go to visit an {'  '}
        </>
      );
      postLinkText = `or emergency department right away.`;
      break;
    case 'Moderate':
      preLinkText = (
        <>
          Contact your health care provider or call 8-1-1 right away.
          <br />
          <br />
          If you find it hard to breathe or can’t drink anything, call 9-1-1 or go to an
        </>
      );
      postLinkText = <>or emergency department right away.</>;
      break;
    case 'Severe':
      preLinkText = `
      You need medical attention. Please Call 9-1-1 or go to an`;
      postLinkText = `or emergency department right away.`;

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
                {preLinkText}
                {link}
                {postLinkText}
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
