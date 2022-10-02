import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings.js";
import { SectionDescription } from "../misc/Typography.js";

// import defaultCardImage from "images/shield-icon.svg";

// import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

// import SupportIconImage from "images/support-icon.svg";
// import ShieldIconImage from "images/shield-icon.svg";
// import CustomizeIconImage from "images/customize-icon.svg";
// import FastIconImage from "images/fast-icon.svg";
// import ReliableIconImage from "images/reliable-icon.svg";
// import SimpleIconImage from "images/simple-icon.svg";

const marketingLogo = "https://img.icons8.com/external-inipagistudio-lineal-color-inipagistudio/64/000000/external-marketing-company-plan-inipagistudio-lineal-color-inipagistudio.png";
const webDevLogo = "https://img.icons8.com/external-fauzidea-gradient-fauzidea/64/000000/external-website-online-learning-fauzidea-gradient-fauzidea-2.png";
const appDevLogo = "https://img.icons8.com/nolan/64/medical-mobile-app.png";
const supportLogo = "https://img.icons8.com/external-fauzidea-gradient-fauzidea/64/000000/external-support-online-learning-fauzidea-gradient-fauzidea.png";
const reliableLogo = "https://img.icons8.com/nolan/64/helping-hand.png";
const customLogo = "https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/000000/external-website-project-work-icongeek26-outline-gradient-icongeek26.png";
const designLogo = "https://img.icons8.com/nolan/344/design.png";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border border-gray-500 text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-12 h-12`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob1 = styled.img.attrs({
  src: `/images/decoration/svg-decorator-blob-3.svg`,
})`
  ${tw`pointer-events-none absolute top-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

const DecoratorBlob2 = styled.img.attrs({
  src: `/images/decoration/svg-decorator-blob-2.svg`,
})`
  ${tw`pointer-events-none absolute top-1/2 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

const DecoratorBlob3 = styled.img.attrs({
  src: `/images/decoration/svg-decorator-blob-7.svg`,
})`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({
  subheading = "WE PROVIDE",
  heading = "Amazing Services",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: webDevLogo,
      title: "Website Development",
      description: "Website is your first impression! We build it with the best quality and we make sure that it is easy to use and maintain.",
    },
    {
      imageSrc: appDevLogo,
      title: "App Development",
      description: "Have a Billion Dollar App idea but don't have App Developers? We have the most experienced team for that!",
    },
    {
      imageSrc: marketingLogo,
      title: "Marketing Services",
      description: "Build your brand's voice. We provide affordable targeted media, digital and outdoor marketing solutions."
    },
    {
      imageSrc: designLogo,
      title: "Designing",
      description: "Stand out your brand and your story with the power of Designing. We help you make empathy driven designs."
    },
    {
      imageSrc: reliableLogo,
      title: "Reliable Solutions",
      description: "We ensure that your business is running smoothly and that your customers are happy."
    },
    {
      imageSrc: customLogo,
      title: "Customized Solutions",
      description: "Alter the solutions and Services to your business needs according to your customers."
    },

  ];


  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {/* {description && <Description>{description}</Description>} */}
        <VerticalSpacer />
        <DecoratorBlob2 />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob1 />
      <DecoratorBlob3 />
    </Container>
  );
};
