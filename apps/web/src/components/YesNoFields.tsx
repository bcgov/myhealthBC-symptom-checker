import React from 'react';
import { RadioField } from './RadioField';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

export const YesNoFields = ({ name, onChange }) => {
  const { t } = useTranslation();
  return (
    <>
      <RadioField name={name} value='false' onChange={onChange} text={t('No')} />
      <RadioField name={name} value='true' onChange={onChange} text={t('Yes')} />
    </>
  );
};

YesNoFields.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
