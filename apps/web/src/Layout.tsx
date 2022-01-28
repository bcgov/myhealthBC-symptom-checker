import React, { PropsWithChildren, ReactNode } from 'react';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { DownloadBCApp } from './components/DownloadBCApp';

type LayoutProps = PropsWithChildren<ReactNode> & {
  result?: boolean;
};

const Layout = ({ result, children }: LayoutProps) => {
  return (
    <div className='flex flex-col min-h-screen bg-bcLightBackground'>
      <Header />
      <div className='flex-grow text-bcBlack mb-auto'>
        {children}
        {result ? <DownloadBCApp /> : ''}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
