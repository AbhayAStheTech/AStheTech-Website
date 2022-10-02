import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "../misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";

const Container = tw.div`relative bg-transparent`;
const ContentWithPaddingXl = tw.div`max-w-screen-xl mx-5 md:mx-5 lg:mx-auto py-10`;
const Header = tw(SectionHeading)``;


const TabContent = tw(motion.div)` flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-transparent rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.15);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardText = tw.div`p-4 text-gray-400`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;


export default function TabCardGrid({
  heading = "Our Past Speakers",
  tabs = [

    {
      imageSrc:
        "https://www.businessinsider.in/photo/48254138.cms",
      name: "Dr A. P. J Abdul Kalam",
      designation: "Former President, Rocket Scientist",
      url: "#"
    },
    {
      imageSrc:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/2/2021_2$largeimg_1922537805.jpg",
      name: "Mr. Ratan Tata",
      designation: "Former Chairman of Tata Group, Philanthropist",
      url: "#"
    },
    {
      imageSrc:
        "https://static.toiimg.com/thumb/msid-79231382,width-400,resizemode-4/79231382.jpg",
      name: "Mrs. Kiran Bedi",
      designation: "Former IPS Officer, Activist",
      url: "#"
    },
    {
      imageSrc:
        "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2017/06/narayan-murthy-1496994613.jpg",
      name: "Mr. Narayan Murthy",
      designation: "Chairman and founder of Infosys",
      url: "#"
    },
    {
      imageSrc:
        "https://www.iitbhilai.ac.in/index.php?pid=askiran",
      name: "Dr. A. S. Kiran Kumar",
      designation: "Former Chairman, ISRO",
      url: "#"
    },
    {
      imageSrc:
        "https://indusscrolls.com/wp-content/uploads/2020/07/Gaur-Gopal-Das.jpg",
      name: "Gaur Gopal Das",
      designation: "International Life Coach and Motivational Speaker",
      url: "#"
    },
    {
      imageSrc:
        "https://pbs.twimg.com/media/DNzH4ajUIAASLC-?format=jpg&name=large",
      name: "Padmashree Nana Patekar",
      designation: "Veteran Actor, Social Activist",
      url: "https://youtu.be/-H0KkOfXuKE"
    },
    {
      imageSrc:
        "https://static.dw.com/image/17645825_303.jpg",
      name: "Vincent Cerf",
      designation: "The Father of the Internet",
      url: "#"
    },

    {
      imageSrc:
        "https://pbs.twimg.com/media/EiBbrKzXkAAjfXu.jpg",
      name: "Mr. Aman Dhattarwal",
      designation: "Founder of Apni Kaksha",
      url: "#"
    },
    {
      imageSrc:
        "https://www.nist.gov/sites/default/files/styles/480_x_480_limit/public/userphotos/bill_1263792_2.jpg?itok=L9C0wcQn",
      name: "Dr. William Daniel Phillips",
      designation: "American Physicist",
      url: "https://youtu.be/W6Y34X7W0Tc"
    },
    {
      imageSrc:
        "https://www.classicalclaps.com/wp-content/uploads/2018/03/Mahesh_Kale.jpg",
      name: "Shri Mahesh Kale",
      designation: "Indian Classical Vocalist",
      url: "https://youtu.be/LRR7v-_lSEQ"
    },
    {
      imageSrc:
        "https://image.cnbcfm.com/api/v1/image/104485169-rsz_cheyer_portraits3068_1.jpg?v=1529475178",
      name: "Mr. Adam Cheyer",
      designation: "Co-Founder of Siri Inc.",
      url: "https://youtu.be/g9-VsXYGvBo"
    },
    {
      imageSrc:
        "https://static.toiimg.com/thumb/msid-84529998,width-1200,height-900,resizemode-4/.jpg",
      name: "GM Vidit Gujrathi",
      designation: "Indian Chess GrandMaster",
      url: "https://youtu.be/oN72EBjqCs8"
    },
    {
      imageSrc:
        "https://yt3.ggpht.com/ytc/AKedOLS2F3UrjZAUena6UWLnoqNuoU-USCZqpAtiyPx05w=s900-c-k-c0x00ffffff-no-rj",
      name: "Dr. Niranjan Hiranandani",
      designation: "Co-Founder, and Managing Director, at Hiranandani Group",
      url: "https://youtu.be/RJEs1pCPK3w"
    },
    {
      imageSrc:
        "https://akm-img-a-in.tosshub.com/indiatoday/upfront-4-interview-mar12-1_647_030118040825.jpg?RS_z7cEkR1aL_ESxsADkLBB4mxj9WFuB",
      name: "Admiral Sunil Lanba",
      designation: "Retired Indian Naval Officer",
      url: "https://youtu.be/_vLo9HnRZSw"
    },
    {
      imageSrc:
        "https://www.technologyforyou.org/wp-content/uploads/2018/12/ml1.jpg",
      name: "Mr. Tanmay Bakshi",
      designation: "AI/ML expert, IBM Watson Programmer",
      url: "https://youtu.be/kDydgquD-CU"
    },
    {
      imageSrc:
        "http://cryptoconsulting.info/wp-content/uploads/2019/11/Bjarne.jpg",
      name: "Dr. Bjarne Stroustrup",
      designation: "Inventor of C++",
      url: "#"
    },
    {
      imageSrc:
        "https://mumbaimirror.indiatimes.com/photo/78084171.cms",
      name: "Mr. Boman Irani",
      designation: "Acclaimed Film and Theatre Actor",
      url: "https://www.facebook.com/watch/?v=188001192078288"
    },
    {
      imageSrc:
        "https://femina.wwmindia.com/content/2019/oct/ratnapathakshahn1570004463.jpg",
      name: "Mrs. Ratna Pathak",
      designation: "Veteran Film and Theatre Actor",
      url: "https://www.facebook.com/technovanza/videos/10156500576069672/"
    },
    {
      imageSrc:
        "https://images.news18.com/ibnlive/uploads/2021/06/1624035090_harsha-bhogle.jpg",
      name: "Mr. Harsha Bhogle",
      designation: "Cricket Commentator, Journalist",
      url: "#"
    },

    {
      imageSrc:
        "https://alchetron.com/cdn/john-c-mather-02259a50-b600-418f-8024-3b01af2cf5e-resize-750.jpeg",
      name: "Dr. John C. Mather",
      designation: "Nobel Laureate in Physics",
      url: "https://youtu.be/0jZ8aN6X2Z0"
    },

    {
      imageSrc:
        "https://theenglishpost.com/wp-content/uploads/2019/07/Simon-Taufel-Inst_600x451.jpg",
      name: "Mr. Simon Taufel",
      designation: "Umpire and Member of ICC Elite Umpires Panel",
      url: "#"
    },
    {
      imageSrc:
        "https://images.news18.com/ibnlive/uploads/2021/08/srinath.jpg",
      name: "Mr. Javagal Srinath",
      designation: "Former Cricketer, Match Referee",
      url: "#"
    },
    {
      imageSrc:
        "http://thewire.in/wp-content/uploads/2016/09/Arup-Raha-IAF-chief-Air-Marshal.jpg",
      name: "Air Chief Marshal Arup Raha",
      designation: "Air Chief Marshal, Indian Air Force",
      url: "#"
    },
    {
      imageSrc:
        "https://www.outlookindia.com/public/uploads/images_old/admiral_arun_prakash_20060123.jpg",
      name: "Admiral Arun Prakash",
      designation: "Retired Admiral, Indian Navy",
      url: "#"
    },
    {
      imageSrc:
        "https://www.simplylifeindia.com/uploads/8/1/1/5/8115412/sonam-wangchuck-motivational-speaker-simply-life-india-speakers-bureau_orig.jpg",
      name: "Mr. Sonam Wangchuk",
      designation: "Education Reformist and Innovator",
      url: "https://www.facebook.com/technovanza/videos/10156506764529672/"
    },
    {
      imageSrc:
        "https://static.toiimg.com/thumb/msid-73932878,width-1200,height-900,resizemode-4/.jpg",
      name: "Ms. Medha Patkar",
      designation: "Social Activist",
      url: "#"
    },
    {
      imageSrc:
        "https://icaonline.org/pages/golden-jubliee-celebrations/img/bharat-vatwani.jpg",
      name: "Dr. Bharat Vatwani",
      designation: "Ramon Magsaysay Awardee",
      url: "https://youtu.be/bYBHJdDkvDw"
    },
    {
      imageSrc:
        "https://w.ndtvimg.com/sites/3/2019/08/15121212/660x330_12.jpg",
      name: "Dr. Rajendra Singh",
      designation: "Water Man of India, Environmentalist",
      url: "#"
    },
    {
      imageSrc:
        "https://i.insider.com/5a13117cf914c352018b500e?width=729&format=jpeg",
      name: "Mr. Alan Mamedi",
      designation: "CEO & Co-Founder at Truecaller",
      url: "#"
    },
    {
      imageSrc:
        "https://pbs.twimg.com/media/CuZ73RKVIAEPQK1.jpg",
      name: "Dr. Jayant Narlikar",
      designation: "Padma Bhushan, Founder of the Conformal Gravity Theory",
      url: "#"
    },
    {
      imageSrc:
        "https://www.forbesindia.com/media/images/2017/Feb/img_93509_ashwinsanghi_01_jn_big.jpg",
      name: "Mr. Ashwin Sanghi",
      designation: "Writer",
      url: "#"
    },
    {
      imageSrc:
        "https://www.newsbugz.com/wp-content/uploads/2018/05/Yashpal-Sharma-Images-6.jpg",
      name: "Mr. Yashpal Sharma",
      designation: "Acclaimed Film and Theatre Actor",
      url: "#"
    },
    {
      imageSrc:
        "https://images.moneycontrol.com/static-mcnews/2020/11/R-Gopalakrishnan-770x433.jpg",
      name: "Mr. R. Gopalakrishnan",
      designation: "Executive Director, Tata Sons Ltd.",
      url: "#"
    },
    {
      imageSrc:
        "https://images.news18.com/ibnlive/uploads/2017/10/BS-Dhanoa-gettyimages.jpg",
      name: "Air Chief Marshal B. S. Dhanoa",
      designation: "25th Chief of Air Staff Indian Air Force",
      url: "https://youtu.be/WjY5JB-bx6E"
    },
    {
      imageSrc:
        "https://www.rujutadiwekar.com/c/img/mobile/414%20X%20320%20About%20Rujuta.jpg",
      name: "Mrs. Rujuta Diwekar",
      designation: "Nutritionist and Exercise Science Expert",
      url: "https://youtu.be/cEqBG8SHhE0"
    },
  ],
}) {

  return (
    <Container>
      <Header>{heading}</Header>
      <ContentWithPaddingXl>

        <TabContent>
          {tabs.map((card, index) => (
            <CardContainer key={index}>
              <Card className="group" initial="rest" whileHover="hover" animate="rest">
                <CardImageContainer imageSrc={card.imageSrc}>

                  <CardHoverOverlay
                    variants={{
                      hover: {
                        opacity: 1,
                        height: "auto"
                      },
                      rest: {
                        opacity: 0,
                        height: 0
                      }
                    }}
                    transition={{ duration: 0.3 }}
                  >

                    {
                      card.url !== "#" ?
                        <a href={card.url} target="_blank">
                          <CardButton >
                            Know More
                          </CardButton>
                        </a>
                        : null
                    }
                  </CardHoverOverlay>
                </CardImageContainer>
                <CardText>
                  <CardTitle>{card.name}</CardTitle>
                  <CardContent>{card.designation}</CardContent>
                </CardText>
              </Card>
            </CardContainer>
          ))}

        </TabContent>
      </ContentWithPaddingXl>
    </Container>
  );
};