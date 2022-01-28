import React from 'react';
import { useTranslation } from 'react-i18next';

export const Q3SymptomSoreThroatSeverity = () => {
  const { t } = useTranslation();

  // const valueKey = 'symptoms.soreThroat';
  // const severity = values?.symptoms?.soreThroat || Severity.None;

  return (
    <div>
      {/* <div className='pb-5'>
        <Question>{t('Q3.5-soreThroat')}</Question>
        <div className='text-base text-bcGray mb-2'>{t('Q3.5-soreThroat-desc1')}</div>
        <div className='text-base text-bcGray font-bold mb-2'>{t('Q3.5-soreThroat-desc2')}</div>
        <div className='text-base text-bcGray'>
          <Trans i18nKey='Q3.5-soreThroat-desc3'>
            For more information on sore throat, go to{' '}
            <a className='underline text-bcBlueAccent' href='https://www.healthlinkbc.ca/'>
              Healthlink BC
            </a>{' '}
            and for{' '}
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
          {t(severity === 'None' ? 'None-title' : `SoreThroat-${severity}-title`)}
        </div>
        {severity === Severity.Severe || severity === Severity.Moderate ? (
          <div className='mt-3'>{t(`SoreThroat-${severity}-desc`)}</div>
        ) : (
          ''
        )}
      </div> */}
    </div>
  );
};
