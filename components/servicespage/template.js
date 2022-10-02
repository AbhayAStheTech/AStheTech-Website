import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-10 md:py-12`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
    tw`md:w-7/12 mt-16 md:mt-0`,
    props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const SvgDotPattern1 = styled.img.attrs({
    src: `/images/decoration/dot-pattern.svg`,
})`
    ${tw`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`}
  `;

const SvgDotPattern2 = styled.img.attrs({
    src: `/images/decoration/dot-pattern.svg`,
})`
    ${tw`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`}
  `;
const SvgDotPattern3 = styled.img.attrs({
    src: `/images/decoration/dot-pattern.svg`,
})`
    ${tw`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`}
  `;
const SvgDotPattern4 = styled.img.attrs({
    src: `/images/decoration/dot-pattern.svg`,
})`
    ${tw`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`}
  `;



const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

export default ({
    subheading = "Lorem Ipsum",
    heading = <>Feel free to <span tw="text-primary-500">get in touch</span><wbr /> with us.</>,
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    submitButtonText = "Pricing",
    textOnLeft = true,
    pricingUrl = "/pricing",
    imgSrc = "/images/decoration/web-development-illustration.png",
}) => {
    // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

    return (
        <Container>

            {textOnLeft ? <SvgDotPattern2 /> : <SvgDotPattern1 />}
            <TwoColumn>
                <ImageColumn>
                    <Image imageSrc={imgSrc} />
                </ImageColumn>
                <TextColumn textOnLeft={textOnLeft}>
                    <TextContent>
                        {subheading && <Subheading>{subheading}</Subheading>}
                        <Heading>{heading}</Heading>
                        <Description>{description}</Description>
                        <a href={pricingUrl}><SubmitButton type="button">{submitButtonText}</SubmitButton></a>
                    </TextContent>
                </TextColumn>
            </TwoColumn>
        </Container>
    );
};
