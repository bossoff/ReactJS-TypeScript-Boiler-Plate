import { type RouteObject } from "react-router-dom";

export const errorRoutes: RouteObject[] = [
  {
    path: "/404",
    element: <div>404 - Page Not Found</div>,
  },
  {
    path: "/500",
    element: <div>500 - Internal Server Error</div>,
  },
  {
    path: "/403",
    element: <div>403 - Forbidden</div>,
  },
  {
    path: "*",
    element: <div>404 - Page Not Found</div>,
  },
];