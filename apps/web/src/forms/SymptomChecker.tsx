import React, { ReactElement, useState } from 'react';
import _ from 'lodash';
import { FormikProvider, useFormik } from 'formik';
import { Q1SevereSymptom } from './Q1SevereSymptom';
import { Q2DifficultBreathing } from './Q2DifficultBreathing';
import { Button } from '../components/Button';
import { useTranslation } from 'react-i18next';
import { Q3Symptoms } from './Q3Symptoms';
import { setValueByPath } from '../utils';
import { Q4TestResult } from './Q4TestResult';
import { useNavigate } from 'react-router-dom';
import { Recommendation } from '../types/Recommendation';
import { Q3SymptomBreathingSeverity } from './Q3SymptomBreathingSeverity';
import { Q3SymptomCoughSeverity } from './Q3SymptomCoughSeverity';
import { initialValues } from '../types/initialValues';
import { Q3SymptomBodyAchesSeverity } from './Q3SymptomBodyAchesSeverity';
import { Q3SymptomSoreThroatSeverity } from './Q3SymptomSoreThroatSeverity';

export const SymptomChecker = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [values, setValues] = useState(initialValues);
  const submit = (values, actions) => {
    actions.setSubmitting(true);
    console.log('submitted: ', values);
    actions.setSubmitting(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const validate = () => {
    return {};
  };

  const [page, setPage] = useState(0);

  const formik = useFormik({
    initialValues: values,
    validate,
    onSubmit: submit,
  });

  const onChange = (e, key, value) => {
    let name, newValue;
    if (e) {
      name = e.target.name;
      newValue = e.target.value;
      e.stopPropagation();
    } else {
      name = key;
      newValue = value;
    }
    if (e?.target.type === 'checkbox') {
      newValue = e.target.checked ? 'true' : 'false';
    }
    const clone = _.cloneDeep(values);
    const [subKey, subValues] = setValueByPath(clone, name, newValue);
    setValues(clone);
    if (subValues) {
      formik.setFieldValue(subKey as string, subValues);
    } else {
      formik.setFieldValue(name, newValue);
    }
  };

  const pages: ReactElement[] = [
    <Q1SevereSymptom key={0} onChange={onChange} />,
    <Q2DifficultBreathing key={1} onChange={onChange} />,
    <Q3Symptoms key={2} values={values} onChange={onChange} />,
    <Q3SymptomBreathingSeverity key={3} values={values} onChange={onChange} />,
    <Q3SymptomCoughSeverity key={4} values={values} onChange={onChange} />,
    <Q3SymptomBodyAchesSeverity key={5} values={values} onChange={onChange} />,
    <Q3SymptomSoreThroatSeverity key={6} values={values} onChange={onChange} />,
    <Q4TestResult key={100} values={values} onChange={onChange} />,
  ];

  const decideNextPage = () => {
    // temporarily
    if (page < pages.length - 1) {
      return page + 1;
    }
    navigate(`/result/${Recommendation.ASYMPTOMATIC}`);
    return page;
  };

  const next = () => {
    setPage(decideNextPage());
  };
  const previous = () => {
    setPage(Math.max(page - 1, 0));
  };

  return (
    <div className=' h-full flex flex-col '>
      <FormikProvider value={formik}>
        <div>{pages[page]}</div>
        <div className='my-10'>
          <Button
            type='button'
            variant='outline'
            widthClass='md:w-44'
            onClick={previous}
            disabled={page === 0}
          >
            {t('Go back')}
          </Button>
          <span className='ml-4'>
            <Button
              type={pages.length - 1 === page ? 'button' : 'submit'}
              variant='primary'
              widthClass='md:w-44'
              onClick={next}
            >
              {t('Continue')}
            </Button>
          </span>
        </div>
        <div className='text-sm bg-slate-100 p-4 max-h-56 overflow-auto'>
          <pre>
            <strong>{'values => '}</strong>
            {JSON.stringify(values, null, 2)}
          </pre>
        </div>
      </FormikProvider>
    </div>
  );
};
