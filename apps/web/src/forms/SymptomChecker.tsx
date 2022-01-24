import React, { ReactElement, useState } from 'react';
import { Q1SevereSymptom } from './Q1SevereSymptom';
import { Q2DifficultBreathing } from './Q2DifficultBreathing';
import { Values } from '../types/Values';
import { useFormik, FormikProvider } from 'formik';
import { Button } from '../components/Button';
import { useTranslation } from 'react-i18next';
import { Q3Symptoms } from './Q3Symptoms';
import _ from 'lodash';
import { setValueByPath } from '../utils';

export const SymptomChecker = () => {
  const { t } = useTranslation();
  const initialValues: Values = {
    breathing: '',
    severe: '',
    symptoms: {
      fever: '',
      cough: '',
      breathing: '',
      throat: '',
      smell: '',
      runnyNose: '',
      sneezing: '',
      diarrhea: '',
      appetite: '',
      nausea: '',
      aches: '',
      none: '',
    },
    tested: '',
  };
  const [values, setValues] = useState(initialValues);
  const submit = (values, actions) => {
    actions.setSubmitting(true);
    console.log('submitted: ', values);
    actions.setSubmitting(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const validate = values => {
    return {};
  };

  const [page, setPage] = useState(0);

  const next = () => {
    setPage(Math.min(page + 1, pages.length - 1));
  };
  const previous = () => {
    setPage(Math.max(page - 1, 0));
  };

  const formik = useFormik({
    initialValues: values,
    validate,
    onSubmit: submit,
  });

  const onChange = e => {
    const { name, type } = e.target;
    let value = e.target.value;
    if (type === 'checkbox') {
      value = e.target.checked ? 'true' : 'false';
    }
    const clone = _.cloneDeep(values);
    const [subKey, subValues] = setValueByPath(clone, name, value);
    setValues(clone);
    if (subValues) {
      formik.setFieldValue(subKey as string, subValues);
    } else {
      formik.setFieldValue(name, value);
    }
    e.stopPropagation();
  };

  const pages: ReactElement[] = [
    <Q1SevereSymptom key={0} onChange={onChange} />,
    <Q2DifficultBreathing key={1} onChange={onChange} />,
    <Q3Symptoms key={2} values={values} onChange={onChange} />,
  ];

  return (
    <div className=' h-full flex flex-col '>
      <FormikProvider value={formik}>
        <div>{pages[page]}</div>
        <div className='my-10'>
          <Button type='button' variant='outline' onClick={previous} disabled={page === 0}>
            {t('Go back')}
          </Button>
          <span className='ml-4'>
            <Button
              type={pages.length - 1 === page ? 'button' : 'submit'}
              variant='primary'
              onClick={next}
              disabled={pages.length - 1 === page}
            >
              {t('Continue')}
            </Button>
          </span>
        </div>
        {/*<div className='text-sm bg-slate-100 p-4 max-h-56 overflow-auto'>*/}
        {/*  <pre>*/}
        {/*    <strong>{'values => '}</strong>*/}
        {/*    {JSON.stringify(values, null, 2)}*/}
        {/*  </pre>*/}
        {/*</div>*/}
      </FormikProvider>
    </div>
  );
};
