import React from 'react';
import { useTranslation } from 'react-i18next';
import { Question } from '../components/Question';
import { Options } from '../components/Options';
import RadioButtons from 'src/components/RadioButtons';
import { useFormikContext } from 'formik';
import _ from 'lodash';
import { ErrorBox } from '../components/ErrorBox';

export type FieldOptionProps = {
  name: string;
  answerOptions: Array<{ key: string; value: string }>;
  question: {
    title: string;
    description?: string;
    content?: string;
    options?: Array<string>;
  };
};

export const SymptomQuestion = (props: FieldOptionProps) => {
  const { name, answerOptions, question } = props;
  const { t } = useTranslation();
  const { errors } = useFormikContext();

  const error = _.get(errors, name);

  const options = answerOptions.map(opt => {
    return { key: t(opt.key), value: opt.value };
  });

  return (
    <div>
      <div className='pb-7'>
        <Question>{t(question.title)}</Question>
        {question.description && (
          <div className='text-base text-bcGray font-bold mb-2'>{t(question.description)}</div>
        )}
        {question.options && <Options options={question.options.map(option => t(option))} />}
        {question.content && <div className='mt-3'>{t(question.content)}</div>}
      </div>
      <RadioButtons label={''} name={name} options={options}></RadioButtons>
      <ErrorBox error={error} />
    </div>
  );
};
