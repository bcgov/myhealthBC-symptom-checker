import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { PageProps } from '../types/PageProps';
import { Question } from '../components/Question';
import { RadioField } from '../components/RadioField';
import { Severity } from '../types/Severity';

export const Q3SymptomCoughSeverity = ({ values, onChange }: PageProps) => {
  const { t } = useTranslation();

  const valueKey = 'symptoms.cough';
  const severity = values?.symptoms?.cough || Severity.None;

  return (
    <div>
      <div className='pb-5'>
        <Question>{t('Q3.5-cough')}</Question>
        <div className='text-base text-bcGray mb-2'>{t('Q3.5-cough-desc1')}</div>
        <div className='text-base text-bcGray font-bold mb-2'>{t('Q3.5-cough-desc2')}</div>
        <div className='text-base text-bcGray'>
          <Trans i18nKey='Q3.5-cough-desc3'>
            For more information on cough, see HealthLinkBC&apos;s information for
            <span className='underline text-bcBlueAccent'>children age 11 and younger</span> and for{' '}
            <span className='underline text-bcBlueAccent'>people age 12 and older.</span>
          </Trans>
        </div>
      </div>

      <div>
        {Object.values(Severity).map(value => (
          <RadioField
            name={valueKey}
            key={value}
            value={value}
            onChange={onChange}
            text={t(value)}
            checked={value === severity}
          />
        ))}
      </div>
      <div className='bg-gray-50 my-4 p-4 rounded'>
        <div className='text-bcBlueLink font-bold'>{t(`${severity}`)}</div>
        <div className='font-bold mt-3'>
          {t(severity === Severity.None ? 'None-title' : `Cough-${severity}-title`)}
        </div>
      </div>
    </div>
  );
};
