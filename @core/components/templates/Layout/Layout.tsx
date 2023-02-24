import dynamic from 'next/dynamic';
import React, { ReactNode } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from '../../organisms/Footer/Footer';
import Header from '../../organisms/Header/Header';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <ToastContainer position="bottom-center" limit={1} />

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default dynamic(() => Promise.resolve(Layout), { ssr: false });
