import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Main/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import MySelectedClasses from "../pages/Dashboard/MySelectedClasses";
import MyEnrolledClasses from "../pages/Dashboard/MyEnrolledClasses";
import Payment from "../pages/Dashboard/Payment";
import useAxiosSecure from "../hooks/useAxiosSecure";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddClass from "../pages/Dashboard/AddClass";
import MyClass from "../pages/Dashboard/MyClass";
import Update from "../pages/Dashboard/Update";
import Feedback from "../pages/Dashboard/Feedback";
import ManageClasses from "../pages/Dashboard/ManageClasses";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>
      },
      {
        path: "classes",
        element: <Classes></Classes>
      },
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "selectedClasses",
          element: <MySelectedClasses></MySelectedClasses>
      },
      {
        path: "enrolledClasses",
        element: <MyEnrolledClasses></MyEnrolledClasses>
      },
      {
      path: "payment/:id",
        element: <Payment></Payment>,
        
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: "addClass",
        element: <AddClass></AddClass>
      },
      {
        path: "myClass",
        element: <MyClass></MyClass>
      },
      {
        path: "update/:id",
        element: <Update></Update>,
      
      },
      {
        path: "feedback/:id",
        element: <Feedback></Feedback>
      },
      {
        path: "manageClasses",
        element: <ManageClasses></ManageClasses>
      }
    ]

  }
]);


export default router;