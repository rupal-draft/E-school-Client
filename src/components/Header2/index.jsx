import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline, IoIosLogOut } from "react-icons/io";
import { Context } from "context";
import axios from "axios";
import { toast } from "react-toastify";
import { FaFaceGrinStars } from "react-icons/fa6";
import { Dropdown, Menu } from "antd";

export default function Header2({ ...props }) {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const image = user?.image?.url;
  const logout = async () => {
    dispatch({
      type: "LOGOUT",
    });
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("Role");
    window.localStorage.removeItem("Token");
    navigate("/login");
  };

  // const Name = {user.name}
  const navigateLogin = () => {
    navigate("/login");
    setMobileMenuOpen(false);
  };
  const navigateOverview = () => {
    navigate("/overview");
    setMobileMenuOpen(false);
  };
  const navigateCreateCourse = () => {
    navigate("/create-course");
    setMobileMenuOpen(false);
  };
  const navigateCreateProduct = () => {
    navigate("/create-product");
    setMobileMenuOpen(false);
  };
  const navigateBeInstructor = () => {
    navigate("/");
    setMobileMenuOpen(false);
  };

  const Firstname = user?.name.split(" ");
  const name = Firstname?.[0]?.toUpperCase();

  const getInitials = () => {
    if (image !== null) {
      return (
        <img
          src={image}
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
      );
    } else {
      const firstInitial = user ? user.name.charAt(0).toUpperCase() : "";
      return (
        <div className="w-10 h-10 bg-orange-400 rounded-full mx-auto  flex items-center justify-center">
          <span className="text-xl font-semibold text-gray-100">
            {firstInitial || <FaFaceGrinStars />}
          </span>
        </div>
      );
    }
  };

  // Menu for Ant Design Dropdown
  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={logout}>
        <p className="flex flex-row gap-2 items-center">
          Logout
          <IoIosLogOut />
        </p>
      </Menu.Item>
    </Menu>
  );

  return (
    <header {...props}>
      <div className="flex flex-row justify-between w-full mx-auto max-w-7xl">
        <a className="text-2xl font-bold" href="/">
          🎓 𝑳𝒆𝒂𝒓𝒏𝑶𝒑𝒊𝒂
        </a>

        {/* Mobile Menu Button */}
        <button
          className="hidden md:block text-2xl p-1"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="flex md:hidden md:flex lg:justify-center lg:items-center  gap-8">
          {/* <form className="flex">
            <input
              type="text"
              placeholder="Enter your search term"
              className="px-4 py-1 bg-white rounded-l-md border-orange-200 focus:ring-orange-300"
            />
            <button
              type="submit"
              className="px-4 py-1 bg-orange-300 text-white rounded-r-md hover:bg-orange-200 focus:outline-none"
            >
              Search
            </button>
          </form> */}
          <button
            className="hover:text-orange-300 font-medium"
            onClick={navigateBeInstructor}
          >
            My DashBoard
          </button>
          <button
            className="font-medium hover:text-orange-300"
            onClick={navigateCreateCourse}
          >
            Create Course
          </button>
          <button
            className="font-medium hover:text-orange-300"
            onClick={navigateCreateProduct}
          >
            Create Product
          </button>
          <button
            className="font-medium hover:text-orange-300"
            onClick={navigateOverview}
          >
            Overview
          </button>
          <Dropdown overlay={menu} trigger={["click"]}>
            <button
              className="flex items-center gap-1 float-right"
              id="dropdown-menu"
            >
              <p className="text-gray-900 font-medium mr-1">{name}</p>
              <div className="w-12">{getInitials()}</div>
            </button>
          </Dropdown>
        </div>

        {/* Mobile Menu */}

        {isMobileMenuOpen && (
          <div className=" h-screen fixed inset-0 z-50 overflow-hidden overscroll-none mx-auto">
            <div className="h-full px-auto shadow-lg backdrop-blur-md backdrop-filter bg-opacity-100 text-center">
              <div className="lg:hidden relative top-8 py-2 mx-auto text-xl flex flex-col gap-y-1 justify-center text-center">
                <div className="pt-2 flex items-center gap-x-2 mx-auto">
                  <div className="w-12 ">{getInitials()}</div>
                  <p className="font-bold">{name}</p>
                </div>
                <p className="mt-2 mb-8 text-sm font-semibold tracking-widest text-center">
                  {user.email}
                </p>

                <button
                  className="font-medium hover:text-orange-300 mb-4 text-center"
                  onClick={navigateBeInstructor}
                >
                  My Dashboard
                </button>

                <button
                  className="font-medium hover:text-orange-300 mb-4 text-center"
                  onClick={navigateCreateCourse}
                >
                  Create Course
                </button>

                <button
                  className="font-medium hover:text-orange-300 mb-4 text-center"
                  onClick={navigateCreateProduct}
                >
                  Create Product
                </button>

                <button
                  className="text-center font-medium hover:text-orange-300 block mb-4"
                  onClick={navigateOverview}
                >
                  Overview
                </button>

                <button
                  onClick={logout}
                  className="rounded-md w-28 mx-auto my-4"
                >
                  <p className="text-gray-100 font-medium bg-orange-400 px-3 py-1 border-2 boder-white rounded-md">
                    Logout
                  </p>
                </button>

                <button
                  onClick={toggleMobileMenu}
                  className="items-center text-5xl hover:text-orange-300 block my-6 mx-auto"
                >
                  <IoIosCloseCircleOutline />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
