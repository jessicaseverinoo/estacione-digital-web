import ErrorPage from '../errors/error-page';
import History from '../pages/History/History';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import Wallet from '../pages/Wallet/Wallet';

import {
    createBrowserRouter,
  } from "react-router-dom";
import { ROUTES } from '../constants/Constants';
import NewVehicle from '../pages/NewVehicle/NewVehicle';
import ListVehicles from '../pages/ListVehicles/ListVehicles';

export const routes = createBrowserRouter([
    {
      path: ROUTES.LOGIN,
      element: <Login />,
      errorElement: <ErrorPage />
    },
    {
      path: ROUTES.HOME,
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: ROUTES.HISTORY,
      element: <History />,
      errorElement: <ErrorPage />
    },
    {
      path: ROUTES.PROFILE,
      element: <Profile />,
      errorElement: <ErrorPage />
    },
    {
      path: ROUTES.WALLET,
      element: <Wallet />,
      errorElement: <ErrorPage />
    },
    {
      path: ROUTES.VEHICLE.NEW,
      element: <NewVehicle />,
      errorElement: <ErrorPage />
    },
    {
      path: ROUTES.VEHICLE.EDIT,
      element: <NewVehicle />,
      errorElement: <ErrorPage />
    },
    {
      path: ROUTES.VEHICLE.LIST,
      element: <ListVehicles />,
      errorElement: <ErrorPage />
    }
])