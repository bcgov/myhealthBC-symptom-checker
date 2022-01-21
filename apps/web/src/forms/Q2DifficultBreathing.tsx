import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageProps } from '../types/PageProps';
import { Field } from 'formik';

export const Q2DifficultBreathing = ({ onChange }: PageProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <h1 className='text-3xl font-bold mb-10'>{t('Q2')}</h1>
        <ul className='list-disc pl-6 mb-10'>
          <li>{t('Q2-1')}</li>
          <li>{t('Q2-2')}</li>
        </ul>
      </div>

      <div className='mb-4 pl-1'>
        <label className='flex items-center cursor-pointer leading-none'>
          <Field
            name='breath'
            label='breath'
            type='radio'
            value='false'
            description='Difficult Breathing'
            onChange={onChange}
            className='mr-2 h-5 w-5 min-w-5 cursor-pointer hover:border-2'
          />
          <span className='ml-3'>{t('No')}</span>
        </label>
      </div>
      <div className='mb-4 pl-1'>
        <label className='flex items-center cursor-pointer leading-none'>
          <Field
            name='breath'
            label='breath'
            type='radio'
            value='true'
            description='Difficult Breathing'
            onChange={onChange}
            className='mr-2 h-5 w-5 min-w-5 cursor-pointer hover:border-2'
          />
          <span className='ml-3'>{t('Yes')}</span>
        </label>
      </div>
    </div>
  );
};
