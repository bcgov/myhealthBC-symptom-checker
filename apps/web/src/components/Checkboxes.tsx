import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { FormFieldProps } from './Radio';

function Checkboxes(props: FormFieldProps) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <Field name={name}>
        {formik => {
          const { field } = formik;
          return options.map(option => {
            return (
              <div key={option.key}>
                <input
                  type='checkbox'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label>{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
      d
      <ErrorMessage name={name} />
    </div>
  );
}

export default Checkboxes;
