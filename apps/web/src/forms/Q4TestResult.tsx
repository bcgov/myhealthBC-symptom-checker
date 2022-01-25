import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageProps } from '../types/PageProps';
import { Question } from '../components/Question';
import { QuestionDescription } from '../components/QuestionDescription';
import { YesNoFields } from '../components/YesNoFields';
import question from '../images/question.svg';
import { Tooltip } from '../components/Tooltip';

export const Q4TestResult = ({ onChange }: PageProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className='pb-7'>
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
    </div>
  );
};
