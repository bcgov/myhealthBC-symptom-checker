import React, { PropsWithChildren, ReactNode } from 'react';

type QuestionDescPropTypes = PropsWithChildren<ReactNode> & {
  text: string;
};

export const QuestionDescription = ({ text, children }: QuestionDescPropTypes) => {
  return (
    <div className='text-base text-bcGray pb-4'>
      {text}
      {children}
    </div>
  );
};
