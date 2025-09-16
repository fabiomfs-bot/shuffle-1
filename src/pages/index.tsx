import React from 'react';
import Head from 'next/head';
import IndexSectionHeadersWhitePattern1 from '../components/headers-white-pattern/IndexSectionHeadersWhitePattern1';
import IndexSectionPricingWhitePattern2 from '../components/pricing-white-pattern/IndexSectionPricingWhitePattern2';
import IndexSectionFootersWhitePattern3 from '../components/footers-white-pattern/IndexSectionFootersWhitePattern3';

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title></title>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/shuffle-for-bootstrap.png'
        />
      </Head>
      <IndexSectionHeadersWhitePattern1 />
      <IndexSectionPricingWhitePattern2 />
      <IndexSectionFootersWhitePattern3 />
    </>
  );
};

export default Index;

