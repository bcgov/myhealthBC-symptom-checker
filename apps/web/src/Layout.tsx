import React, { PropsWithChildren, ReactNode } from 'react';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { DownloadBCApp } from './components/DownloadBCApp';

type LayoutProps = PropsWithChildren<ReactNode> & {
  result?: boolean;
};

export const Layout = ({ result, children }: LayoutProps) => {
  return (
    <div className='flex flex-col min-h-screen bg-bcLightBackground'>
      <Header />
      <div className='flex-grow text-bcBlack mb-auto'>
        <main className='container mx-auto max-w-main mt-0 md:mt-12 py-6 md:py-12 px-6 md:px-24 bg-white rounded shadow-md'>
          {children}
        </main>
        {result ? <DownloadBCApp /> : ''}
      </div>
      <Footer />
    </div>
  );
};
