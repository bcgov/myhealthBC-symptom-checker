import React, { PropsWithChildren, ReactNode } from 'react';

import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const Layout = ({ children }: PropsWithChildren<ReactNode>) => {
  return (
    <div className='flex flex-col h-full'>
      <Header />
      <main className='h-full justify-center'>{children}</main>
      <Footer />
    </div>
  );
};
