import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading } from "../misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";

import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from '../../services/firebase.js';
import { useRouter } from "next/router";

const Container = tw.div`relative bg-transparent `;
const Content = tw.div`max-w-screen-xl px-5 sm:px-0 mx-auto py-20 lg:py-24`;

const Column = tw.div`xl:mr-12 xl:last:mr-0`;
const CardColumn = tw(Column)`w-full md:w-1/2 xl:w-3/12 mt-16 px-0 md:px-5 xl:px-0`;

const HeadingInfoContainer = tw.div`text-center max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`mt-4  leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;

const Card = tw.div` `;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardCompany = tw.div`text-primary-500 font-bold text-lg`;
const CardType = tw.div`font-semibold text-sm text-gray-600`;

const CardTitle = tw.h5`text-xl mt-4 font-bold text-white`;
const LogoImg = tw.div`w-8  mr-2`;
const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-between sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4 mr-4 last:mr-0`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
const CardAction = tw(PrimaryButtonBase)`w-full mt-6`;

const YouTubeButton = tw(PrimaryButtonBase)`w-full md:w-1/2 mt-6`;

export default function GLSCards({
  subheading = (
    <>
      <span tw="text-white">TECHNOVANZA VJTI </span> PRESENTS
    </>
  ),
  headingHtmlComponent = (
    <>
      Guest Lecture <span tw="text-white">Series</span>
    </>
  ),
  description = (

    <p className="text-justify">
      The motto of VJTI is to steer the all-round development of its students, to create individuals of the highest caliber, who not only go on to have the valuable contribtions in their field of expertise, but also establish themselves as concerned citizens of the society. With a renowned line - up of Guest Lectures over the years, Technovanza has always been a prime platform where the flame of expertise has been effectively transferred to many more torches. The pioneers of diverse fields have graced Technovanza with their presence, illuminating more and more minds to new areas of interest. As part of our continued efforts in this respect, we have a series of Guest Lectures throughout the academic year and also during the days of the fest.
    </p>

  ),
  linkText = "GLS on YouTube",
  buttonText = "Register",
  ytChannelUrl = "https://www.youtube.com/channel/UC0lbDKAjkBtwHiNGcaQ-8mQ",
  textOnLeft = true,
  showYtButton = true
}) {

  const router = useRouter();

  const [cards, setCards] = useState([
    // {
    //   imageSrc:
    //     "https://pbs.twimg.com/media/FGKcL54UUAEwNgh.jpg  ",
    //   forte: "IAS/IPS Officer",
    //   work: "PM Award Nominee",
    //   name: "Hari Chandana Dasari",
    //   date: "14 Dec 2022",
    //   location: "Youtube Channel"
    // },
  ]);

  useEffect(async () => {
    const searchQuery = query(collection(firestore, "GLS"), where("open", "==", true));

    const querySnapshot = await getDocs(searchQuery);

    let cardsData = [];

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      let glsData = doc.data();
      let docID = doc.id;

      let dataObject = {
        id: docID,
        name: glsData.name,
        open: glsData.open,
        time: glsData.time,
        work: glsData.work,
        date: glsData.date,
        forte: glsData.forte,
        location: glsData.location,
        imageSrc: glsData.imageSrc,
      }
      
      cardsData.push(dataObject);
    });
    
    setCards(cardsData);
  }, []);


  const handleRegisterClick = (glsID) => {
    router.push("/register/gls/" + glsID);
  }


  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <Subheading>{subheading}</Subheading>
          <HeadingTitle>{headingHtmlComponent}</HeadingTitle>
          <HeadingDescription>{description}</HeadingDescription>

          <a href={ytChannelUrl} target="_blank">
            <YouTubeButton>
              {linkText}
            </YouTubeButton>
          </a>
        </HeadingInfoContainer>

        <div className="flex flex-wrap justify-center">
          {cards.map((card, index) => (
            <CardColumn key={index}>
              <Card>
                <CardImage imageSrc={card.imageSrc} />
                <CardText>
                  <CardHeader>
                    <CardCompany>{card.forte}</CardCompany>
                    <CardType>{card.work}</CardType>
                  </CardHeader>
                  <CardTitle>{card.name}</CardTitle>
                  <CardMeta>
                    <CardMetaFeature>
                      <LogoImg>
                        <img src="https://img.icons8.com/nolan/64/time.png" />
                      </LogoImg>
                      {card.date}, {card.time}
                    </CardMetaFeature>
                  </CardMeta>
                  <CardAction onClick={() => handleRegisterClick(card.id)}>{buttonText}</CardAction>
                </CardText>
              </Card>
            </CardColumn>
          ))}
        </div>

      </Content>
    </Container>
  );
};
