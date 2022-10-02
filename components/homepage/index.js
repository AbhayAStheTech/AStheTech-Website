import React from 'react';

import GetStarted from './getStarted';
import Intro from './intro';
import Services from './services';
import Values from './values';
import FAQ from './faq';
// import AnimationRevealPage from "../helpers/animationRevealPage.js";

const HomePage = () => {
  return (
    <>
      <Intro />
      <Services />
      <Values />
      <GetStarted />
      <FAQ />
    </>
  );
}

export default HomePage;