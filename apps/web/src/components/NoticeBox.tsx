import React, { PropsWithChildren, ReactNode } from 'react';

export const NoticeBox = ({ children }: PropsWithChildren<ReactNode>) => {
  return (
    <div className='bg-bcLightBlueBackground my-4 p-4 text-bcBlueLink rounded'>{children}</div>
  );
};
