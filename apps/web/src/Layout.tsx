import React, { PropsWithChildren, ReactNode } from 'react';

import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const Layout = ({ children }: PropsWithChildren<ReactNode>) => {
  return (
    <div className='flex flex-col h-full bg-bcLightBackground'>
      <Header />
      <div className='h-full text-bcBlack'>
        <main className='container mx-auto max-w-5xl mt-12 py-16 px-32 bg-white'>{children}</main>
      </div>
      <Footer />
    </div>
  );
};
