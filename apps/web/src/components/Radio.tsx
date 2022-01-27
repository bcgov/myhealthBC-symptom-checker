import React from 'react';
import { Field, ErrorMessage } from 'formik';

export interface FormFieldProps {
  label: string;
  name: string;
  options: Array<{
    key: string;
    value: string;
  }>;
}

function RadioButtons(props: FormFieldProps) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <Field name={name}>
        {formik => {
          const { field } = formik;
          return options.map(option => {
            return (
              <div
                className='flex space-x-5 items-center cursor-pointer leading-none py-3'
                key={option.key}
              >
                <Field
                  type='radio'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                ></Field>
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
}

export default RadioButtons;
