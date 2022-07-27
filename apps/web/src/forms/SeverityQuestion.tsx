import React, { PropsWithChildren, ReactNode } from 'react';
import { Question } from '../components/Question';
import { QuestionDescription } from '../components/QuestionDescription';
import { Severity } from '../types';
import { useFormikContext } from 'formik';
import { SymptomCheckerForm } from '../types';
import RadioButtons from '../components/RadioButtons';
import { ErrorBox } from '../components/ErrorBox';
import { Trans, useTranslation } from 'react-i18next';

export type SeverityQuestionProps = PropsWithChildren<ReactNode> & {
  symptom: string;
  description?: ReactNode;
};

export const SeverityQuestion = (props: SeverityQuestionProps) => {
  const { symptom, children, description } = props;

  const { t } = useTranslation('severity');
  const { values, errors } = useFormikContext<SymptomCheckerForm>();

  const field = `symptoms.${symptom}.severity`;

  const options = Object.values(Severity).map((s: string) => ({ key: s, value: s }));
  const error = errors.symptoms ? errors.symptoms[symptom]?.severity : '';

  const renderSeverityDescription = () => {
    const severity = values.symptoms[symptom].severity;
    if (!values.symptoms[symptom].severity) return '';
    return (
      <div className='bg-bcLightBoxBackground md:bg-gray-50 my-4 p-4 border rounded'>
        <div className='text-bcBlueLink font-bold'>{t(`${severity}`)}</div>
        <div className='font-bold mt-3'>{t(`${symptom}-${severity}-title`)}</div>
      </div>
    );
  };

  let desc = description || <QuestionDescription text={t(`${symptom}-description`)} />;
  if (symptom === 'difficultBreathing') {
    desc = (
      <Trans t={t} i18nKey={`${symptom}-description`}>
        If you are struggling to breathe or you can only speak in single words, call 9-1-1 or go to
        an
        <a
          className='underline text-bcBlueLink'
          href='https://www.healthlinkbc.ca/health-services/urgent-and-primary-care-centres'
        >
          {' '}
          Urgent and Primary Care Centre (UPCC)
        </a>{' '}
        or emergency department right away.
      </Trans>
    );
  }
  return (
    <div>
      <div className='pb-5'>
        <Question>{t(`${symptom}-question`)}</Question>
        {desc}
      </div>
      <div>
        <RadioButtons name={field} options={options} />
        <ErrorBox error={error} />
      </div>
      {children || renderSeverityDescription()}
    </div>
  );
};
