import React from 'react';
import { Field } from 'formik';

export interface FormFieldProps {
  label?: string;
  name: string;
  options: Array<{
    key: string;
    value: string;
  }>;
  optional?: boolean;
}

const RadioButtons = (props: FormFieldProps) => {
  const { label, name, options, optional, ...rest } = props;

  const validator = value => {
    if (optional || options.map(option => option.value).includes(value)) {
      return null;
    }
    return 'Required';
  };

  return (
    <div>
      {label ? <label>{label}</label> : ''}
      <Field name={name} validate={validator}>
        {formik => {
          const { field } = formik;
          return options.map(option => {
            return (
              <div className='flex space-x-5 items-center leading-none py-3' key={option.key}>
                <Field
                  type='radio'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                  className='h-5 w-5 cursor-pointer'
                />
                <label className='!ml-0 pl-4 md:cursor-pointer ' htmlFor={option.value}>
                  {option.key}
                </label>
              </div>
            );
          });
        }}
      </Field>
    </div>
  );
};

export default RadioButtons;
