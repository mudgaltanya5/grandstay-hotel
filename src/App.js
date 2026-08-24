import './App.css';

import AppLayout from './Components/Layout/AppLayout';

import Home from './Page/Home.jsx';
import About from './Page/About.jsx';
import Rooms from './Page/Rooms.jsx';
import RoomDetails from './Page/RoomDetails.jsx';
import AllRooms from './Page/AllRooms.jsx';
import Booking from './Page/Booking.jsx';
import Galleries from './Page/Galleries.jsx';
import Contact from './Page/Contact.jsx';
import Login from './Page/Login.jsx';
import Signup from './Page/Signup.jsx';
import GalleryDetails from './Page/GalleryDetails.jsx';
import Payment from './Page/Payment.jsx';
import BookingSuccess from './Page/BookingSuccess.jsx';


import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';

import { getgalleryApi } from './api/getgalleryApi.jsx';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,

      children: [

        {
          path: "/",
          element: <Home />
        },

        {
          path: "/about",
          element: <About />
        },

        {
          path: "/rooms",
          element: <Rooms />
        },

        {
          path: "/RoomDetails",
          element: <RoomDetails />
        },

        {
          path: "/rooms/:id",
          element: <AllRooms />
        },

        {
          path: "/booking",
          element: <Booking />
        },

        {
          path: "/galleries",
          element: <Galleries />,
          loader: getgalleryApi
        },

        {
          path: "/galleries/:id",
          element: <GalleryDetails />
        },

        {
          path: "/Payment",
          element: <Payment />
        },

        {
          path: "/booking-success",
          element: <BookingSuccess />
        },

        {
          path: "/contact",
          element: <Contact />
        },

        {
          path: "/login",
          element: <Login />
        },

        {
          path: "/signup",
          element: <Signup />
        }

      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;