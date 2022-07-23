import React from "react";
import { Login } from "../pages/Login";
import { Event } from "../pages/Event";
import { MainPage } from "../pages/MainPage";

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum RoutesNames {
  Login = "/login",
  Event = "/event",
  Anyway = "/*",
  MainPage = "/mainPage",
}

export const publicRoutes: IRoute[] = [
  {
    path: RoutesNames.Login,
    element: Login,
  },
  {
    path: RoutesNames.Anyway,
    element: Login,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: RoutesNames.Event,
    element: Event,
  },

  {
    path: RoutesNames.MainPage,
    element: MainPage,
  },
];
