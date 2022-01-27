import React from 'react';
import { Field } from 'formik';

export interface CheckboxesFormFieldProps {
  label: string;
  name: string;
  options: Array<{
    key: string;
    value: string;
    name: string;
  }>;
}

export const Checkboxes: React.FC<CheckboxesFormFieldProps> = ({ name, options }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <div className='py-2' key={option.key}>
            <div className='flex flex-row items-center'>
              <Field
                name={option.name}
                label={option.value}
                type='checkbox'
                className='mr-2 h-5 w-5 min-w-5 cursor-pointer hover:border-2'
              ></Field>
              <span id={`checkbox-${name}`} className='ml-3'>
                {option.value}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Checkboxes;
