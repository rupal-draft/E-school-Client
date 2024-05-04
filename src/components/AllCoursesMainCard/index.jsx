import React from "react";
import { Img, Button, Text, Heading } from "./..";

export default function AllCoursesMaincard({
  imgsrc,
  title,
  slug,
  ispaid,
  price,
  lessons,
  content_duration,
  subject,
}) {
  return (
    <div className="w-80 border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <Img
        src={imgsrc}
        alt="image"
        className="h-[200px] w-full rounded-[5px] md:h-30 md:px-auto"
      />

      <div className="p-4 gap-5 flex flex-col justify-between sm:text-sm">
        <Heading>{title}</Heading>
        <div className="flex flex-row justify-between">
          <div>
            <p>{subject}</p>
            {ispaid?<p>Price: {price}</p>: <p>Free</p>}          
          </div>
          <div>
            {lessons>=0?<p>{lessons} lessons added</p>:<p></p>}
            {content_duration?<p>{content_duration}+ hours of video</p>:<p></p>}         
          </div>
        </div>
        <Button
          size="md"
          variant="outline"
          className="mb-[20px] font-medium min-w-[159px] hover:border-none hover:bg-orange-300 hover:text-white-A700 md:w-30"
        >
          <a href={slug?`/course/${slug}`:"/allcourses"}>Go to course</a>
        </Button>
      </div>
    </div>
  );
}
