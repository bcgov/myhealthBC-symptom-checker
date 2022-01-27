import React from 'react';
import { useTranslation } from 'react-i18next';
import { Question } from '../components/Question';
import { Options } from '../components/Options';
import RadioButtons from 'src/components/Radio';
import { useFormikContext } from 'formik';

export type FieldOptionProps = {
  name: string;
  answerOptions: Array<{ key: string; value: string }>;
  showErrors: boolean;
  question: {
    title: string;
    content?: string;
    options?: Array<string>;
  };
  questionFooter?: {
    title: string;
    content: string;
  };
};

export const SymptomQuestion = (props: FieldOptionProps) => {
  const { name, answerOptions, showErrors, question, questionFooter } = props;
  const { t } = useTranslation();
  const { errors } = useFormikContext();

  return (
    <div>
      <div className='pb-7'>
        <Question>{t(question.title)}</Question>
        {question.options && <Options options={question.options.map(option => t(option))} />}
        {question.content && <div className='mt-3'>{question.content}</div>}
      </div>

      <RadioButtons label={''} name={name} options={answerOptions}></RadioButtons>

      {questionFooter ? (
        <div className='bg-gray-50 my-4 p-4 rounded'>
          <div className='text-bcBlueLink font-bold'>{t(questionFooter.title)}</div>
          <div className='font-bold mt-3'>{questionFooter.content}</div>
        </div>
      ) : (
        <></>
      )}

      {showErrors && errors[name] ? (
        <div className='bg-gray-50 my-4 p-4 rounded'>
          <div className='text-bcBlueLink font-bold'>{t('Errors')}</div>
          <div className='font-bold mt-3'>{errors[name]}</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
