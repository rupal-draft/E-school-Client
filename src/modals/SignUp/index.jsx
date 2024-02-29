import React from "react";
import { Text, CheckBox, Button, Input, Img, Heading, Slider } from "../../components";
import SignUpInputfield from "../../components/SignUpInputfield";
import { default as ModalProvider } from "react-modal";

export default function SignUp({ isOpen, ...props }) {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[1052px]">
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row justify-center w-full px-14 py-[71px] bg-white-A700 rounded-[15px]">
          <div className="flex flex-row justify-center w-[97%]">
            <div className="flex flex-row justify-center w-full p-2">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-col items-center justify-start w-2/5 gap-[25px]">
                    <Slider
                      autoPlay
                      autoPlayInterval={2000}
                      responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 3 } }}
                      disableDotsControls
                      activeIndex={sliderState}
                      onSlideChanged={(e) => {
                        setSliderState(e?.item);
                      }}
                      ref={sliderRef}
                      className="w-full"
                      items={[...Array(9)].map(() => (
                        <React.Fragment key={Math.random()}>
                          <Heading size="2xl" as="h1" className="mx-2.5 !text-black-900_02 !font-metropolis">
                            Welcome to
                            <br />
                            Educatsy Online
                            <br />
                            Learning Platform
                          </Heading>
                        </React.Fragment>
                      ))}
                    />
                    <div className="flex justify-center w-9 h-2.5" />
                  </div>
                  <div className="h-[641px] w-px bg-gradient" />
                  <div className="flex flex-col items-center justify-start w-[42%]">
                    <Button
                      color="white_A700"
                      leftIcon={<Img src="images/img_googleplus_1_1.svg" alt="google-plus (1) 1" />}
                      className="w-full gap-[23px] !text-gray-700_01 border-gray-300 border border-solid rounded-[10px]"
                    >
                      Sign in with google
                    </Button>
                    <div className="flex flex-row justify-center items-center w-full mt-5 gap-[11px] p-[3px]">
                      <div className="h-px w-[6%] ml-[54px] bg-gray-700_01" />
                      <a href="#" className="mt-[3px]">
                        <Text as="p" className="text-center !font-medium">
                          Or sign in with your email
                        </Text>
                      </a>
                      <div className="h-px w-[6%] mr-[54px] bg-gray-700_01" />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full mt-5 pt-[5px] gap-[9px]">
                      <Text as="p" className="!text-gray-900 !font-medium">
                        Full name
                      </Text>
                      <Input
                        color="white_A700"
                        size="xs"
                        type="text"
                        name="fullName"
                        placeholder="Enter name"
                        prefix={<Img src="images/img_account_24_outline.svg" alt="account / 24 / Outline" />}
                        className="w-full gap-[15px] rounded-tr-[10px] rounded-br-[10px] border-gray-300 border border-solid"
                      />
                    </div>
                    <SignUpInputfield className="flex flex-col items-start justify-start w-full mt-5 pt-[5px] gap-[9px]" />
                    <div className="flex flex-col items-start justify-start w-full mt-5 pt-[5px] gap-[9px]">
                      <Text as="p" className="!text-gray-900 !font-medium">
                        Password
                      </Text>
                      <Input
                        color="white_A700"
                        size="xs"
                        type="password"
                        name="password"
                        placeholder="*************"
                        prefix={
                          <Img
                            src="images/img_lockpad_locksafesecurityprotectedlock_alt_24_outline.svg"
                            alt="lock,pad lock,safe,security,protected,lock alt, / 24 / Outline"
                          />
                        }
                        suffix={
                          <div className="flex justify-center items-center w-[15px] h-[11px]">
                            <Img src="images/img_vector.svg" alt="Vector" />
                          </div>
                        }
                        className="w-full gap-[15px] rounded-tr-[10px] rounded-br-[10px] border-gray-300 border border-solid"
                      />
                    </div>
                    <Button className="w-full mt-[30px] font-medium rounded-[10px]">Sign up</Button>
                    <CheckBox
                      name="checked24outlin"
                      label="I agreed to the Terms & Conditions"
                      className="mt-6 gap-2.5 text-gray-700_01 text-left font-medium"
                    />
                    <div className="flex flex-row justify-center w-full mt-[27px] p-[3px]">
                      <a href="#" className="ml-[65px] my-px">
                        <Text as="p">Don’t have an account?</Text>
                      </a>
                      <a href="#" className="ml-1 mr-[65px]">
                        <Text as="p" className="!text-red-300_01 !font-medium">
                          Sign in
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
