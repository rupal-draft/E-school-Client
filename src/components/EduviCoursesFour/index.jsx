import React from "react";
import { Button, Text, Heading, Img } from "./..";

export default function EduviCoursesFour({
  standardone = "Standard Four",
  standard1isa = "Standard 4 of the Aged Care Quality Standards focuses on services and supports...",
  classDetails = "Class Details",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-center w-full gap-[25px] p-[15px] bg-white-A700 rounded-[15px]">
        <div className="flex flex-col items-center justify-start w-full mt-[15px] gap-[19px] max-w-[260px]">
          <Img src="images/img_group_gray_800_02_50x50.svg" alt="image" className="h-[50px] w-[50px]" />
          <div className="flex flex-col items-center justify-start w-full gap-[9px]">
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
