import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { PageProps } from '../types/PageProps';
import { Question } from '../components/Question';
import { RadioField } from '../components/RadioField';
import { Severity } from '../types/Severity';

export const Q3SymptomCoughSeverity = ({ values, onChange }: PageProps) => {
  const { t } = useTranslation();

  const severity = values?.symptoms?.breathing || Severity.None;

  return (
    <div>
      <div className='pb-5'>
        <Question>{t('Q3.5-cough')}</Question>
        <div className='text-base text-bcGray mb-2'>{t('Q3.5-cough-desc1')}</div>
        <div className='text-base text-bcGray font-bold mb-2'>{t('Q3.5-cough-desc2')}</div>
        <div className='text-base text-bcGray'>
          <Trans i18nKey='Q3.5-cough-desc3'>
            For more information on cough, see HealthLinkBC&apos;s information for
            <strong>children age 11 and younger</strong> and for{' '}
            <strong>people age 12 and older.</strong>
          </Trans>
        </div>
      </div>

      <div>
        <RadioField
          name={'symptoms.cough'}
          value={Severity.None}
          onChange={onChange}
          text={t('None')}
          checked={severity === Severity.None}
        />
        <RadioField
          name={'symptoms.cough'}
          value={Severity.Mild}
          onChange={onChange}
          text={t(Severity.Mild)}
        />
        <RadioField
          name={'symptoms.cough'}
          value={Severity.Moderate}
          onChange={onChange}
          text={t('Moderate')}
        />
        <RadioField
          name={'symptoms.cough'}
          value={Severity.Severe}
          onChange={onChange}
          text={t('Severe')}
        />
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
