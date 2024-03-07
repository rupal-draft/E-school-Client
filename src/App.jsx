import Header from "components/Header";
import Login from "modals/LogIn";
import SignUp from "modals/SignUp";
import EduviCoursesDetails from "./pages/EduviCoursesDetails";
import EduviShopPage from "./pages/EduviShop";
import EduviCoursesPage from "./pages/leranopiaMainPage";
import EduviCoursesPricing from "./pages/EduviCoursesPricing";
import EduviJoinAsTeacher from "./pages/EduviJoinAsTeacher";
import Allmentors from "./pages/Allmentors";
import Singlementordetails from "./pages/Singlementordetails";
import NotFound from "pages/NotFound";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "context";
import { ToastContainer } from "react-toastify";
import ForgetPassword from "modals/ForgetPassword";
import ResetPassword from "modals/ForgetPassword/resetPassword";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const navigationElement = <Header1/>

  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/forgetpassword", element: <ForgetPassword /> },
    { path: "/resetpassword" , element: <ResetPassword />},
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: (
        <>
          <Header className="flex flex-row justify-center items-center w-full p-[22px] bg-gray-100" />
          <Outlet />
        </>
      ),
      children: [
        { path: "/", element: <EduviCoursesPage /> },
        {
          path: "/shop",
          element: <EduviShopPage />,
        },
        {
          path: "/coursedetail",
          element: <EduviCoursesDetails />,
        },
        {
          path: "/coursespricing",
          element: <EduviCoursesPricing />,
        },
        {
          path: "/joinasteacher",
          element: <EduviJoinAsTeacher />,
        },
        {
          path: "/allmentors",
          element: <Allmentors />,
        },
        {
          path: "mentordetails",
          element: <Singlementordetails />,
        },
      ],
    },
  ]);

  return (
    <Provider>
      <ToastContainer />
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
    </Provider>
  );
}

export default App;
