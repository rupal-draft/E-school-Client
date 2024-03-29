import React from "react";
import { Button, Text, Heading} from "./..";

export default function AllCoursesMaincard({
  title,
  url,
  ispaid,
  price,
  level,
  content_duration,
  subject,
  published_date
}) {
  return (
    <div className="w-80 border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <div className="p-4 gap-5 flex flex-col justify-between">
        <Heading>{title}</Heading>
        <div>
        <Text className="text-sm text-gray-500">Subject: {subject}</Text>
        <Text className="text-sm text-gray-500">Course Type: {ispaid}</Text>
        <Text className="text-sm text-gray-500">Price: {price}</Text>
        <Text className="text-sm text-gray-500">Course level: {level}</Text>
        <Text className="text-sm text-gray-500">Content Duration: {content_duration}</Text>
        <Text className="text-sm text-gray-500">Published Date: {published_date}</Text>
        </div>
        <Button size="md" variant="outline" className="mb-[20px] font-medium min-w-[159px]"><a href={url}>Go to course</a></Button>
      </div>
    </div>
  );
}
