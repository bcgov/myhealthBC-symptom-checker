import React from 'react';
import { Wizard } from '../components/Wizard';
import { Q1SevereSymptom } from './Q1SevereSymptom';
import { Q2DifficultBreathing } from './Q2DifficultBreathing';
import { Values } from '../types/Values';
import { Result } from './Result';

export const SymptomChecker = () => {
  const values: Values = {
    difficultBreading: false,
    severe: false,
    symptoms: [],
    tested: false,
  };
  const submit = () => {
    console.log(values);
  };
  return (
    <div className='container h-full flex flex-col justify-center items-center'>
      <Wizard initialValues={values} onSubmit={submit}>
        <Q1SevereSymptom values={values} />
        <Q2DifficultBreathing values={values} />
        <Result values={values} />
      </Wizard>
    </div>
  );
};
