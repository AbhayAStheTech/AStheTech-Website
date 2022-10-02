import React from 'react';
// import GetStarted from './getStarted';
import Intro from './intro';
import Section from './template';
// import Values from './values';
import AnimationRevealPage from "../helpers/animationRevealPage.js";

const ServicePage = () => {
  return (
    <AnimationRevealPage>
      <Intro />

      {/* Website development */}
      <Section
        subheading="Website is your first impression!"
        heading={<><span className="text-primary-500">Website</span><wbr /> Development</>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        submitButtonText="Pricing Plan"
        imgSrc = "/images/decoration/web-development-illustration.png"
        textOnLeft={true}
      />

      {/* Mobile App Development */}
      <Section
        subheading="Make your Billion Dollar idea a realtiy!"
        heading={<><span className="text-primary-500">Mobile App</span><wbr /> Development</>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        submitButtonText="Pricing Plan"
        imgSrc = "/images/decoration/app-development-illustration.png"
        textOnLeft={false}
      />

      {/* AI/ML */}
      <Section
        subheading="Website is your first impression!"
        heading={<><span className="text-primary-500">Artificial</span><wbr /> Intelligence</>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        submitButtonText="Pricing Plan"
        imgSrc = "/images/decoration/app-development-illustration.png"
        textOnLeft={true}
      />

      {/* Designing */}
      <Section
        subheading="Website is your first impression!"
        heading={<><span className="text-primary-500">Designing</span><wbr /></>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        submitButtonText="Pricing Plan"
        imgSrc = "/images/decoration/web-development-illustration.png"
        textOnLeft={false}
      />

      {/* Marketing */}
      <Section
        subheading="Website is your first impression!"
        heading={<><span className="text-primary-500">Marketing</span><wbr /> Services</>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        submitButtonText="Pricing Plan"
        imgSrc = "/images/decoration/web-development-illustration.png"
        textOnLeft={true}
      />
    </AnimationRevealPage>
  );
}

export default ServicePage;
