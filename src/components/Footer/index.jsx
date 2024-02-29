import React from "react";
import { Text, Heading, Img, Button, Input } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row justify-between items-center w-full p-[50px] bg-black-900_01 max-w-7xl rounded-[20px]">
          <div className="flex flex-col items-start justify-start w-[16%] gap-[57px] my-[11px]">
            <Img src="images/img_ellipse_169.png" alt="circleimage" className="h-[60px] w-[60px] rounded-[50%]" />
            <Img
              src="images/img_ellipse_170.png"
              alt="circleimage_one"
              className="h-[60px] w-[60px] ml-[127px] rounded-[50%]"
            />
            <Img
              src="images/img_ellipse_171.png"
              alt="circleimage_two"
              className="h-[60px] w-[60px] ml-[30px] rounded-[50%]"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-[49%] gap-10">
            <div className="flex flex-col items-center justify-start w-full pb-[3px] gap-[26px]">
              <Heading size="3xl" as="h1" className="!text-white-A700 !font-metropolis text-center leading-[55px]">
                Subscribe For Get Update
                <br />
                Every New Courses
              </Heading>
              <Text as="p" className="!text-white-A700_b2 text-center">
                20k+ students daily learn with Educatsy. Subscribe for new courses.
              </Text>
            </div>
            <div className="flex flex-row justify-center w-full">
              <Input name="email" placeholder="enter your email" className="w-[77%] font-medium" />
              <Button size="3xl" className="rounded-tr-[10px] rounded-br-[10px] font-medium min-w-[138px]">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-end justify-start w-[16%] gap-[57px]">
            <Img
              src="images/img_ellipse_166.png"
              alt="circleimage"
              className="h-[60px] w-[60px] mr-[30px] rounded-[50%]"
            />
            <Img
              src="images/img_ellipse_167.png"
              alt="circleimage"
              className="h-[60px] w-[60px] mr-[127px] rounded-[50%]"
            />
            <Img src="images/img_ellipse_168.png" alt="circleimage" className="h-[60px] w-[60px] rounded-[50%]" />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center w-full mt-[516px] ml-[-1440px] px-14 py-20 bg-gray-100">
        <div className="flex flex-row justify-between items-center w-full max-w-7xl">
          <div className="flex flex-col items-center justify-start w-[15%] pb-[3px] gap-[46px]">
            <div className="flex flex-col items-center justify-start w-[97%] gap-[22px]">
              <Img src="images/img_logo.svg" alt="logo_three" className="h-[30px]" />
              <div className="flex flex-row justify-between items-center w-[85%]">
                <Img src="images/img_facebook_logo_1.svg" alt="facebooklogoone" className="h-[22px] w-[22px]" />
                <Button color="deep_orange_400" size="xs" shape="circle" className="w-9">
                  <Img src="images/img_instagram_icon.svg" />
                </Button>
                <Img src="images/img_twitter_logo.svg" alt="twitterlogo_one" className="h-[17px]" />
                <Img src="images/img_linkedin_icon.svg" alt="linkedinicon" className="h-[18px]" />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-3.5">
              <Text as="p">©2021 Educatsy</Text>
              <Text as="p">Educatsy is a registered</Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[14%] gap-[19px]">
            <Heading size="md" as="h5">
              Courses
            </Heading>
            <div className="flex flex-col items-start justify-start w-full gap-6 py-[5px]">
              <Text as="p">Classroom courses</Text>
              <Text as="p" className="!leading-[30px]">
                Virtual classroom courses
              </Text>
              <Text as="p">E-learning courses</Text>
              <Text as="p">Video Courses</Text>
              <Text as="p">Offline Courses</Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[14%] pt-0.5 gap-[17px]">
            <Heading size="md" as="h5">
              Community
            </Heading>
            <div className="flex flex-col items-start justify-center w-full gap-[27px] py-[3px]">
              <Text as="p" className="mt-0.5">
                Learners
              </Text>
              <Text as="p">Partners</Text>
              <Text as="p">Developers</Text>
              <Text as="p">Transactions</Text>
              <Text as="p">Blog</Text>
              <Text as="p">Teaching Center</Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[14%] gap-[19px]">
            <Heading size="md" as="h5">
              Quick links
            </Heading>
            <div className="flex flex-col items-start justify-center w-full gap-[27px] py-[3px]">
              <Text as="p" className="mt-0.5">
                Home
              </Text>
              <Text as="p">Professional Education</Text>
              <Text as="p">Courses</Text>
              <Text as="p">Admissions</Text>
              <Text as="p">Testimonial</Text>
              <Text as="p">Programs</Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[14%] gap-[19px]">
            <Heading size="md" as="h5">
              More
            </Heading>
            <div className="flex flex-col items-start justify-start w-full gap-[26px] py-1">
              <Text as="p">Press</Text>
              <Text as="p">Investors</Text>
              <Text as="p">Terms</Text>
              <Text as="p">Privacy</Text>
              <Text as="p">Help</Text>
              <Text as="p">Contact</Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
