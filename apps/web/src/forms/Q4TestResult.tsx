import React from 'react';
import { useTranslation } from 'react-i18next';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { PageProps } from '../types/index';
import { Question } from '../components/Question';
import { QuestionDescription } from '../components/QuestionDescription';
import question from '../images/question.svg';
import { Tooltip } from '../components/Tooltip';
import calendar from '../images/calendar.svg';

import { enCA as en, frCA as fr, ko, zhCN as zh, faIR as fa, ar, vi } from 'date-fns/locale';
import { Field } from 'formik';
import RadioButtons from 'src/components/Radio';

registerLocale('en', en);
registerLocale('ko', ko);
registerLocale('fr', fr);
registerLocale('zh', zh);
registerLocale('fa', fa);
registerLocale('ar', ar);
registerLocale('vi', vi);
registerLocale('tl', en); // date-fns doesn't support Tagalog?

export const Q4TestResult = ({ values, onChange }: PageProps) => {
  const { t, i18n } = useTranslation();

  const handleDateChange = value => {
    onChange(null, 'test.testDate', value);
  };

  const renderTestOptions = () => {
    if (values?.test?.tested !== 'true') {
      return '';
    }
    return (
      <div className='py-3'>
        <div className='font-bold my-4'>{t('Q4-Enter the details')}</div>
        <div className='my-2'>{t('Q4-Date you had your test:')}</div>
        <div className='flex w-56 p-2 mb-4 border rounded'>
          <DatePicker
            locale={i18n.language}
            selected={values.test.testDate}
            placeholderText='yyyy-mm-dd'
            ariaInvalid='error'
            dateFormat='yyyy-MM-dd'
            onChange={handleDateChange}
          />
          <img src={calendar} height={12} width={12} alt='select date' />
        </div>
        <div className='my-2'>{t('Result')}:</div>
        <div className='flex flexcol w-56 p-2 border rounded'>
          <Field
            name='test.result'
            label='test.result'
            description='test.result'
            as='select'
            onChange={onChange}
            value={values?.test?.result || ''}
            placeholder='Select'
            className='w-full'
          >
            <option value='' key='' className='hidden' />
            <option value='Negative'>{t('Negative')}</option>
            <option value='Positive'>{t('Positive')}</option>
            <option value='Indeterminate'>{t('Indeterminate')}</option>
          </Field>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className='pb-4'>
        <Question>{t('Q4')}</Question>
        <QuestionDescription text={t('Q4-desc')}>
          <div className='mt-3 flex'>
            <Tooltip text={t('Q4-help')}>
              <img src={question} alt='question mark' />
            </Tooltip>
            <div className='ml-3'>{`(${t('Optional')})`}</div>
          </div>
        </QuestionDescription>
      </div>
      <RadioButtons
        label={''}
        name={'complicatingFactors'}
        options={[
          {
            key: 'yes',
            value: 'yes',
          },
          {
            key: 'no',
            value: 'no',
          },
        ]}
      ></RadioButtons>
      {renderTestOptions()}
    </div>
  );
};
