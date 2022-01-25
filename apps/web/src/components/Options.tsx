import React from 'react';

interface OptionsProps {
  options: string[];
}

export const Options = ({ options }: OptionsProps) => {
  return (
    <ul className='list-disc pl-6'>
      {options.map(option => (
        <li key={option}>{option}</li>
      ))}
    </ul>
  );
};
