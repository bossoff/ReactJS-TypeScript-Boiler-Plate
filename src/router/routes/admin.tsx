import type { RouteObject } from "react-router-dom";

export const estateAdminRoutes: RouteObject[] = [
  {
    path: "/provider",
    element: <div>Service Provider Dashboard</div>,
  },
  {
    path: "/provider/services",
    element: <div>Services Management</div>,
  },
  {
    path: "/provider/bookings",
    element: <div>Bookings Management</div>,
  },
];