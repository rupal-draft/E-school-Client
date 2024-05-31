import React, { useEffect, useState } from "react";
import { Heading, Text, Img, SelectBox } from "../../components";
import EduviCoursesDetailsMaincard from "../../components/CoursesDetailsMaincard";
import EduviSubjectMainCard from "../../components/SubjectMainCard";
import EduviCoursesMore from "../../components/CoursesMore";
import { oursubjectdata } from "./oursubjectdata";
import Footer from "components/Footer";
import { ourcoursedata } from "./ourcoursedata";
import axios from "axios";
import EduviShopMainCard from "components/ShopMainCard";
import AllCoursesMaincard from "components/AllCoursesMainCard";

const dropDownOptions = [
  { label: "Sort by: Latest", value: "option1" },
  { label: "Sort by: Price", value: "option2" },
  { label: "Sort by: Level", value: "option3" },
];

export default function LeranopiaMainPage() {
  const [searchBarValue7, setSearchBarValue7] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [courses, setCourses] = useState([]);
  const [bookdata, setBookdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${API_BASE_URL}/products`);
        setBookdata(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${API_BASE_URL}/courses`);
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Category
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Search
  const [searchBarValue, setSearchBarValue] = useState("");
  const handleSearch = (event) => {
    setSearchBarValue(event.target.value);
  };

  const filteredBooks = searchBarValue
    ? bookdata.filter((book) =>
        book.title.toLowerCase().includes(searchBarValue.toLowerCase())
      )
    : selectedCategory
    ? bookdata.filter((book) => book.category === selectedCategory)
    : bookdata;

  const totalpages = Math.ceil(filteredBooks.length / itemsPerPage);
  // Sorting
  const [sortBy, setSortBy] = React.useState("option1");
  const handleSort = (selectedOption) => {
    setSortBy(selectedOption.value);
  };

  let sortedBooks = [...filteredBooks];
  switch (sortBy) {
    case "option2":
      sortedBooks.sort((a, b) => a.price - b.price); // Sort by price
      break;
    case "option3":
      sortedBooks.sort((a, b) => b.totalrating - a.totalrating); // Sort by ratings
      break;
    default:
      sortedBooks.sort(
        (a, b) => new Date(b.publication_date) - new Date(a.publication_date)
      ); // Sort by latest
      break;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] sm:gap-[70px] bg-gray-100 ">
        <div
          className="flex flex-row md:flex-col items-center justify-around w-full h-[300px] gap-5 sm:gap-2 p-5 sm:p-4
  bg-yellow-100 max-w-7xl rounded-20 mt-12 sm:mt-1   sm:h-[300px] font-serif"
        >
          <h1 className="!font-semibold text-4xl sm:text-2xl whitespace-normal tracking-wide italic">
            Welcome to Learnopia ,<br /> Where Knowledge Blossoms and Futures
            Flourish!
          </h1>
          {/* <div className="h-3.5 bottom-1% right-0 left-0 backdrop-opacity-50 blur-20px absolute rounded-full" /> */}
          <img
            src="images/img_image_210x374.png"
            alt="image_one"
            className="justify-center h-[350px] w-[50%] left-[-1] bottom-0 right-0 top-0 mt-22 sm:mt-2 object-fit sm:w-[98%] "
          />
        </div>

        <div className="flex flex-col items-center justify-start w-full gap-[47px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full gap-[23px] max-w-8xl mx-16 sm:mx-0 sm:max-w-7xl">
              <h2 className="text-4xl font-bold sm:p-2">
                Discover Our Top Free Courses!
              </h2>
              <div className="flex flex-row justify-start sm:justify-center w-full">
                <div className="grid grid-cols-4 xxl:grid-cols-1 md:grid-cols-1 gap-10 min-h-[auto]">
                  {loading
                    ? Array(7)
                        .fill(0)
                        .map((_, index) => (
                          <div key={index} className="mx-auto">
                            <AllCoursesMaincard loading={true} />
                          </div>
                        ))
                    : courses.slice(0, 7).map((course, index) => (
                        <div key={index} className="mx-auto">
                          <AllCoursesMaincard
                            loading={false}
                            imgsrc={course.image.url}
                            title={course.courseTitle}
                            slug={course.slug}
                            ispaid={course.IsPaid}
                            price={course.price}
                            content_duration={course.contentDuration}
                            subject={course.subject}
                            lessons={course.lessons.length}
                          />
                        </div>
                      ))}
                  <EduviCoursesMore className="flex flex-col items-center justify-start w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full sm:px-8">
          <div className="flex flex-col items-center justify-start w-full gap-[50px] max-w-7xl">
            <div className="flex flex-col items-center justify-start w-full gap-10">
              <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-2.5">
                <h1 className="text-4xl font-bold sm:text-3xl sm:p-4 mb-4">
                  Explore Our Popular Books!
                </h1>
              </div>
              <div className="justify-center w-full gap-[15px] grid-cols-3 md:grid-cols-1 grid min-h-[auto]">
                {loading
                  ? Array.from({
                      length: indexOfLastItem - indexOfFirstItem,
                    }).map((_, index) => (
                      <div key={index}>
                        <EduviShopMainCard loading={loading} />
                      </div>
                    ))
                  : sortedBooks
                      .slice(indexOfFirstItem, indexOfLastItem)
                      .map((book) => (
                        <div key={book.isbn}>
                          <EduviShopMainCard
                            productId={book._id}
                            imgsrc={book.image.url}
                            title={book.title}
                            author={book.author}
                            ratings={book.totalrating}
                            price={book.price}
                          />
                        </div>
                      ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
