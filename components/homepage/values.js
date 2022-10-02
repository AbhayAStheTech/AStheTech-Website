import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";
// import TeamIllustrationSrc from "../../public/images/decoration/team-illustration-2.svg";
// import { ReactComponent as SvgDotPattern } from "../../public/images/decoration/dot-pattern.svg";
// import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
// import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

const BriefcaseIcon = "https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-briefcase-interface-kiranshastry-lineal-kiranshastry.png";
const MoneyIcon = "https://img.icons8.com/emoji/48/000000/heavy-dollar-sign-emoji.png";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
    tw`md:w-6/12 mt-16 md:mt-0`,
    props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img(props => [
    props.imageRounded && tw`rounded`,
    props.imageBorder && tw`border`,
    props.imageShadow && tw`shadow`
]);


const DecoratorBlob = styled.img.attrs({
    src: `/images/decoration/dot-pattern.svg`,
})`
  ${tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`}
`;

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
    SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-8 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Features = tw.div`mx-auto md:mx-0 flex flex-col lg:flex-row max-w-xs lg:max-w-none`;
const Feature = tw.div`mt-10 lg:mt-8 flex items-center md:items-start flex-col md:mr-8 last:mr-0`;

const FeatureHeadingContainer = tw.div`flex items-center`;
const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-primary-500 text-primary-500 text-center rounded p-2 flex-shrink-0`}
  ${props => [
        props.iconRoundedFull && tw`rounded-full`,
        props.iconFilled && tw`border-0 bg-primary-500 text-gray-100`
    ]}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const FeatureHeading = tw.div`ml-3 font-bold text-xl`;

const FeatureDescription = tw.div`mt-4 text-center md:text-left text-gray-600 leading-relaxed`;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
    tw`mt-12 text-sm font-bold inline-block mx-auto md:mx-0 bg-primary-500 text-gray-100 px-6 py-3 mb-5`,
    props.buttonRounded && tw`rounded-full`
]);

export default ({
    subheading = "Our Expertise",
    heading = (
        <>
            Designed & Developed by <span tw="text-primary-500">Professionals.</span>
        </>
    ),
    description = "We are a team of designers, developers, and marketers who really care about delivering the best experience for our clients.",
    primaryButtonText = "View Pricing",
    primaryButtonUrl = "https://timerse.com",
    imageSrc = "/images/decoration/server-illustration-2.svg",
    buttonRounded = true,
    imageRounded = true,
    imageBorder = false,
    imageShadow = false,
    showDecoratorBlob = false,
    textOnLeft = true,
    iconRoundedFull = true,
    iconFilled = true,
    iconContainerCss = null
}) => {
    // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

    /*
     * Change the features variable as you like, add or delete objects
     * `icon` must be a React SVG component. See how BriefcaseIcon is imported above. For a full list of available icons, see Feather Icons.
     */
    const features = [
        {
            icon: BriefcaseIcon,
            title: "Professionalism",
            description: "We have the best professional people in their respective domains just to work with you.",
            iconContainerCss: tw`bg-red-300 text-teal-800`
        },
        {
            icon: MoneyIcon,
            title: "Affordable",
            description: "We promise to offer you the best rate we can - at par with the industry standard.",
            iconContainerCss: tw`bg-green-200 text-red-800`
        }
    ];

    return (
        <Container>
            <TwoColumn>
                <ImageColumn>
                    <Image src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded} />
                    <DecoratorBlob />
                </ImageColumn>
                <TextColumn textOnLeft={textOnLeft}>
                    <TextContent>
                        <Subheading>{subheading}</Subheading>
                        <Heading>{heading}</Heading>
                        <Description>{description}</Description>
                        <Features>
                            {features.map((feature, index) => (
                                <Feature key={index}>
                                    <FeatureHeadingContainer>
                                        <FeatureIconContainer
                                            iconFilled={iconFilled}
                                            iconRoundedFull={iconRoundedFull}
                                            css={feature.iconContainerCss || iconContainerCss}
                                        >
                                            <img className="w-8 h-8" src={feature.icon}/>
                                            {/* {<feature.Icon />} */}
                                        </FeatureIconContainer>
                                        <FeatureHeading>{feature.title}</FeatureHeading>
                                    </FeatureHeadingContainer>
                                    <FeatureDescription>{feature.description}</FeatureDescription>
                                </Feature>
                            ))}
                        </Features>

                        <PrimaryButton buttonRounded={buttonRounded} as="a" href="/pricing">
                            {primaryButtonText}
                        </PrimaryButton>
                    </TextContent>
                </TextColumn>
            </TwoColumn>
        </Container>
    );
};
