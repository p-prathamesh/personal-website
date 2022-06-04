import React from 'react';
import Head from 'next/head'
import BodyComponent from '../components/Body';
import FooterComponent from '../components/Footer';
import HeaderComponent from '../components/Header';
import HeaderAnimationComponent from '../components/HeaderAnimation';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Privacy Policy-Prathamesh Pawar</title>
        <meta name="description" content="Personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderAnimationComponent />
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  )
}
