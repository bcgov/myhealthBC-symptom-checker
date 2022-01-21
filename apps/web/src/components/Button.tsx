import React, { ReactNode } from 'react';

export interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  onClick: () => void;
  variant?: keyof typeof buttonColor;
  disabled?: boolean;
  children?: ReactNode;
}

export const buttonColor: Record<string, string> = {
  primary: 'border-transparent bg-bcBluePrimary text-white hover:bg-blue-800 focus:ring-blue-500',
  secondary:
    'border-1 border-bcBluePrimary bg-white text-bcBluePrimary hover:bg-gray-100 focus:ring-blue-500',
  outline: 'border border-gray-400 bg-white hover:bg-gray-100 focus:ring-blue-500',
};

export const buttonBase = `w-auto inline-flex justify-center items-center rounded 
  shadow-sm px-8 py-2 text-base font-bold focus:outline-none
  disabled:opacity-50
  focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:text-sm`;

export const Button = (props: ButtonProps) => {
  const { type, onClick, variant, disabled, children } = props;
  const classNames = `${buttonBase} ${variant ? buttonColor[variant] : ''}`;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classNames}>
      {children}
    </button>
  );
};
