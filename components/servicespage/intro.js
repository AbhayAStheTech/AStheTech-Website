import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-5 lg:py-10`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center`;


const Container = tw.div`relative`;


const DecoratorBlob1 = styled.img.attrs({
  src: `/images/decoration/svg-decorator-blob-6.svg`,
})`
  ${tw`pointer-events-none opacity-50 absolute left-0 top-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const Intro = () => {
  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Our Services</HeadingTitle>
          <HeadingDescription>
            We offer a plethora of services to help your business grow.
          </HeadingDescription>
        </HeadingInfoContainer>
      </SingleColumn>
      <DecoratorBlob1 />
    </Container>
  );
};

export default Intro;
