import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageProps } from '../types/PageProps';
import { Field } from 'formik';

export const Q1SevereSymptom = ({ onChange }: PageProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <p className='text-3xl font-bold mb-10'>{t('Q1')}</p>
        <ul className='list-disc pl-6 mb-10'>
          <li>{t('Q1-1')}</li>
          <li>{t('Q1-2')}</li>
          <li>{t('Q1-3')}</li>
          <li>{t('Q1-4')}</li>
          <li>{t('Q1-5')}</li>
        </ul>
      </div>

      <div className='mb-4 pl-1'>
        <label className='flex items-center cursor-pointer leading-none'>
          <Field
            name='severe'
            label='Severe'
            type='radio'
            value='false'
            description='severe?'
            onChange={onChange}
            className='mr-2 h-5 w-5 min-w-5 cursor-pointer hover:border-2'
          />
          <span className='ml-3'>{t('No')}</span>
        </label>
      </div>
      <div className='mb-4 pl-1'>
        <label className='flex items-center cursor-pointer leading-none'>
          <Field
            name='severe'
            label='Severe'
            type='radio'
            value='true'
            description='severe?'
            onChange={onChange}
            className='mr-2 h-5 w-5 min-w-5 cursor-pointer hover:border-2'
          />
          <span className='ml-3'>{t('Yes')}</span>
        </label>
      </div>
    </div>
  );
};
