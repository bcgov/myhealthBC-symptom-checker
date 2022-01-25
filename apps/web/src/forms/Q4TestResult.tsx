import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { PageProps } from '../types/PageProps';
import { Question } from '../components/Question';
import { QuestionDescription } from '../components/QuestionDescription';
import { YesNoFields } from '../components/YesNoFields';
import question from '../images/question.svg';
import { Tooltip } from '../components/Tooltip';
import calendar from '../images/calendar.svg';

import en from 'date-fns/locale/en-CA';
import fr from 'date-fns/locale/fr-CA';
import ko from 'date-fns/locale/ko';
import zh from 'date-fns/locale/zh-CN';
import fa from 'date-fns/locale/fa-IR';
import ar from 'date-fns/locale/ar';
import vi from 'date-fns/locale/vi';
import { Field } from 'formik';

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
  const [tested, setTested] = useState(false);
  const [testDate, setTestDate] = useState(values?.testDate || new Date());
  useEffect(() => setTested(values?.tested === 'true'), [values?.tested]);
  useEffect(() => {
    setTestDate(values?.testDate || new Date());
  }, [values?.testDate]);

  const handleDateChange = value => {
    onChange(null, 'testDate', value);
  };

  const renderTestOptions = () => {
    if (!tested) return '';
    return (
      <div className='py-3'>
        <div className='font-bold my-4'>{t('Q4-Enter the details')}</div>
        <div className='my-2'>{t('Q4-Date you had your test:')}</div>
        <div className='flex w-56 p-2 mb-4 border rounded'>
          <DatePicker
            locale={i18n.language}
            selected={testDate}
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
            name='testResult'
            label='testResult'
            description='testResult'
            as='select'
            onChange={onChange}
            value={values?.testResult || ''}
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
      <YesNoFields name='tested' onChange={onChange} />
      {renderTestOptions()}
    </div>
  );
};
