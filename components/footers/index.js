import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../images/logo/logo.png";

const Container = tw.div`relative bg-gray-900 text-gray-400`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const CompanyLogoImg = tw.div`w-48`;
const LogoImg = tw.div`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-2 sm:mx-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`

export default function Footer() {
  return (
    <Container>
      <Content>
        <Row>

          <LinksContainer>
            <Link href="/">
              <LogoContainer>
                <CompanyLogoImg> <Image src={logo} /> </CompanyLogoImg>
                {/* <LogoText>Technovanza</LogoText> */}
              </LogoContainer>
            </Link>
          </LinksContainer>

          <LinksContainer>
            <Link href="/">Home</Link>
            <Link href="/events">Events</Link>
            <Link href="/gls">GLS</Link>
            <Link href="/about">About Us</Link>
          </LinksContainer>

          <SocialLinksContainer>

            <SocialLink target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/technovanza">
              <LogoImg> <img src="https://img.icons8.com/nolan/64/instagram-new.png" /> </LogoImg>
            </SocialLink>

            <SocialLink target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/technovanza/">
              <LogoImg> <img src="https://img.icons8.com/nolan/50/facebook.png" /></LogoImg>
            </SocialLink>

            <SocialLink target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/TechnovanzaVJTI">
              <LogoImg> <img src="https://img.icons8.com/nolan/50/youtube-play.png" /> </LogoImg>
            </SocialLink>

            <SocialLink target="_blank" rel="noopener noreferrer" href="https://in.linkedin.com/company/technovanza-vjti">
              <LogoImg> <img src="https://img.icons8.com/nolan/50/linkedin.png" /> </LogoImg>
            </SocialLink>

            <SocialLink target="_blank" rel="noopener noreferrer" href="https://twitter.com/Technovanza">
              <LogoImg> <img src="https://img.icons8.com/nolan/50/twitter.png" /> </LogoImg>
            </SocialLink>

          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2022, Technovanza. All Rights Reserved.
          </CopyrightText>
          <p tw="mt-6 text-xs text-gray-600 text-center">
            I agree to abide by the {" "}
            <a href="/terms-and-conditions" tw="border-b border-gray-500 border-dotted">
              Terms of Service
            </a>{" "}
            and the{" "}
            <a href="/privacy-policy" tw="border-b border-gray-500 border-dotted">
              Privacy Policy
            </a>
          </p>
        </Row>
      </Content>
    </Container>
  );
};