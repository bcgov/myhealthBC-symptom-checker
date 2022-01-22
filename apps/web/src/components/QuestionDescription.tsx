import React from 'react';
import PropTypes from 'prop-types';

export const QuestionDescription = ({ text }) => {
  return <div className='text-base text-bcGray pb-4'>{text}</div>;
};

QuestionDescription.propTypes = {
  text: PropTypes.string,
};
