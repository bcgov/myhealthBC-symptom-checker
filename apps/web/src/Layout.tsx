import React, { PropsWithChildren, ReactNode } from 'react';

import { Footer } from './components/Footer';
import { Header } from './components/Header';

type LayoutProps = PropsWithChildren<ReactNode> & {
  result?: boolean;
};

const Layout = ({ result, children }: LayoutProps) => {
  return (
    <div className='flex flex-col min-h-screen bg-bcLightBackground'>
      <Header />
      <div className='flex-grow text-bcBlack mb-auto'>{children}</div>
    </div>
  );
};

export default Layout;
