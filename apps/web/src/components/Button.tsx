import React, { ReactNode } from 'react';
import classNames from 'classnames';

export interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  title?: string;
  onClick?: () => void;
  variant?: keyof typeof buttonColor;
  disabled?: boolean;
  children?: ReactNode;
  widthClass?: string;
}

export const buttonColor: Record<string, string> = {
  primary: 'border-transparent bg-bcBluePrimary text-white hover:bg-blue-800 focus:ring-blue-500',
  secondary:
    'border-1 border-bcBluePrimary bg-white text-bcBluePrimary hover:bg-gray-100 focus:ring-blue-500',
  outline: 'border border-gray-400 bg-white hover:bg-gray-100 focus:ring-blue-500',
};

export const buttonBase = classNames(
  'inline-flex justify-center items-center',
  'min-w-button h-button px-8 py-2 sm:mt-0',
  'text-base font-bold',
  'shadow-sm focus:outline-none',
  'rounded',
  'disabled:opacity-50',
);

export const Button = (props: ButtonProps) => {
  const { type, title, onClick, widthClass, variant, disabled, children } = props;
  const classes = classNames(buttonBase, variant ? buttonColor[variant] : '', widthClass || '');
  return type === 'submit' ? (
    <button title={title} type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  ) : (
    <button title={title} type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
};
