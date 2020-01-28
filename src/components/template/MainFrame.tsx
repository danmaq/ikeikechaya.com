import React from 'react';
import Head from '~/components/atoms/Head';
import Footer from '~/components/organisms/Footer';
import Header from '~/components/organisms/Header';

export const DOM: React.FC = ({ children }) => (
  <>
    <Head />
    <Header />
    <h1>{children}</h1>
    <Footer />
  </>
);
DOM.displayName = 'InnerMainFrame';

export default DOM;
