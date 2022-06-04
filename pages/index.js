import React from 'react';
import BodyComponent from '../components/Body';
import FooterComponent from '../components/Footer';
import HeaderComponent from '../components/Header';
import HeaderAnimationComponent from '../components/HeaderAnimation';

export default function Home() {
  return (
    <div>
      <HeaderAnimationComponent />
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  )
}
