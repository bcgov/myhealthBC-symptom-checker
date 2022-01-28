import React, { ChangeEvent } from 'react';
import { Field, useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import { SymptomCheckerForm, Symptoms } from '../types';

export const SymptomCheckbox = props => {
  const { name, label, checked, description } = props;

  const { values, setFieldValue } = useFormikContext<SymptomCheckerForm>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!name.includes('.')) return;
    const [key, symptom] = name.split('.');
    const checked = e.target.checked;

    const symptoms = values[key] as Symptoms;
    const details = symptoms[symptom];

    // check incompatibility of none and other symptoms
    if (checked) {
      if (symptom === 'none') {
        Object.keys(symptoms)
          .filter(key => key != symptom)
          .forEach(key => (symptoms[key].isExperienced = false));
      } else {
        symptoms.none.isExperienced = false;
      }
    }

    details.isExperienced = checked;
    setFieldValue(key, values[key]);
  };

  return (
    <div className='py-2'>
      <label className='flex flex-row items-center'>
        <Field
          name={name}
          label={label || name}
          type='checkbox'
          checked={checked}
          description={description || name}
          className='mr-2 h-5 w-5 min-w-5 cursor-pointer hover:border-2'
          onChange={handleChange}
        />
        <span id={`checkbox-${name}`} className='ml-3'>
          {label}
        </span>
      </label>
    </div>
  );
};

SymptomCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool,
  description: PropTypes.string,
};
