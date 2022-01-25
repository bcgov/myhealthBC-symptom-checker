import React, { PropsWithChildren, ReactNode } from 'react';

export const Question = ({ children }: PropsWithChildren<ReactNode>) => {
  return <div className='text-3xl font-bold pb-4'>{children}</div>;
};
