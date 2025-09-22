import { type RouteObject } from "react-router-dom";

export const webRoutes: RouteObject[] = [
  {
    path: "/",
    element: <div>Landing Page</div>,
  },
  {
    path: "/about",
    element: <div>About Page</div>,
  },
  {
    path: "/contact",
    element: <div>Contact Page</div>,
  },
];