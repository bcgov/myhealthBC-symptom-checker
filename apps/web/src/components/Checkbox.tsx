import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

export const Checkbox = props => {
  const { name, text, label, checked, onChange, description } = props;
  return (
    <div className='py-2'>
      <label className='flex flex-row items-center'>
        <Field
          name={name}
          label={label || name}
          type='checkbox'
          checked={checked}
          description={description || name}
          onChange={onChange}
          className='mr-2 h-5 w-5 min-w-5 cursor-pointer hover:border-2'
        />
        <span id={`checkbox-${name}`} className='ml-3'>
          {text}
        </span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool,
  text: PropTypes.string,
  onChange: PropTypes.func,
  description: PropTypes.string,
};
