import React from 'react';
import { LayoutsProps } from '@/utils/utils';
import Head from 'next/head';

const AuthLayouts = ({children, title}: LayoutsProps) => {
  return (
    <>
        <Head>
            <title>{title}</title>
        </Head>

        {children}
    </>
  );
}

export default AuthLayouts;
