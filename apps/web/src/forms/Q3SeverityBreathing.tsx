import React from 'react';
import { useTranslation } from 'react-i18next';
import { Question } from '../components/Question';
import { QuestionDescription } from '../components/QuestionDescription';
import { Severity } from '../types';
import { useFormikContext } from 'formik';
import { SymptomCheckerForm } from '../types';
import RadioButtons from '../components/Radio';
import { ErrorBox } from '../components/ErrorBox';

export const Q3SeverityBreathing = () => {
  const { t } = useTranslation();

  const { values, errors } = useFormikContext<SymptomCheckerForm>();

  const name = 'symptoms.shortnessOfBreath.severity';
  const details = values.symptoms.shortnessOfBreath;
  const severity = details.severity;

  const options = Object.values(Severity).map((s: string) => ({ key: s, value: s }));
  const error = errors.symptoms ? errors.symptoms['shortnessOfBreath']?.severity : '';

  return (
    <div>
      <div className='pb-5'>
        <Question>{t('Q3.5-breathing')}</Question>
        <QuestionDescription text={t('Q3.5-breathing-desc')} />
      </div>

      <div>
        <RadioButtons name={name} options={options} />
        {error ? <ErrorBox error={error} /> : ''}
      </div>
      {severity ? (
        <div className='bg-gray-50 my-4 p-4 rounded'>
          <div className='text-bcBlueLink font-bold'>{t(`${severity}`)}</div>
          <div className='font-bold mt-3'>
            {t(severity === 'None' ? 'None-title' : `Breathing-${severity}-title`)}
          </div>
          {severity !== 'None' ? <div className='mt-3'>{t(`Breathing-${severity}-desc`)}</div> : ''}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
