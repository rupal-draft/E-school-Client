import React from "react";
import { Button, Text, Heading, Img } from "./..";

export default function EduviCoursesEight({
  standardone = "Standard Eight",
  standard1isa = "Standard 8 Course from NCERT Solutions help students to understand...",
  classDetails = "Class Details",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-center w-full gap-[25px] p-[15px] bg-white-A700 rounded-[15px]">
        <div className="flex flex-col items-center justify-start w-full mt-[15px] gap-5 max-w-[260px]">
          <Img src="images/img_group_orange_300.svg" alt="image" className="h-[50px] w-[50px]" />
          <div className="flex flex-col items-center justify-start w-full gap-[7px]">
            <Heading size="lg" as="h1" className="text-center">
              {standardone}
            </Heading>
            <Text as="p" className="text-center !leading-[30px]">
              {standard1isa}
            </Text>
          </div>
        </div>
        <Button size="md" variant="outline" className="mb-[15px] font-medium min-w-[159px]">
          {classDetails}
        </Button>
      </div>
    </div>
  );
}
