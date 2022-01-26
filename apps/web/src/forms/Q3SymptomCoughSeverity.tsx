import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { PageProps } from '../types/PageProps';
import { Question } from '../components/Question';
import { RadioField } from '../components/RadioField';

export const Q3SymptomCoughSeverity = ({ values, onChange }: PageProps) => {
  const { t } = useTranslation();

  const severity = values?.severityOfBreathing || 'None';
  const noneChecked = severity === 'None' || severity === '';

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
        <RadioField
          name={'severityOfCough'}
          value='None'
          onChange={onChange}
          text={t('None')}
          checked={noneChecked}
        />
        <RadioField name={'severityOfCough'} value='Mild' onChange={onChange} text={t('Mild')} />
        <RadioField
          name={'severityOfCough'}
          value='Moderate'
          onChange={onChange}
          text={t('Moderate')}
        />
        <RadioField
          name={'severityOfCough'}
          value='Severe'
          onChange={onChange}
          text={t('Severe')}
        />
      </div>
      <div className='bg-gray-50 my-4 p-4 rounded'>
        <div className='text-bcBlueLink font-bold'>{t(severity)}</div>
        <div className='font-bold mt-3'>
          {t(severity === 'None' ? 'None-title' : `Cough-${severity}-title`)}
        </div>
      </div>
    </div>
  );
};
