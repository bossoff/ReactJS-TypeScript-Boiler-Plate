import { RouteObject } from "react-router-dom";

export const superAdminRoutes: RouteObject[] = [
  {
    path: "/admin",
    element: <div>Estate Admin Dashboard</div>,
  },
  {
    path: "/admin/properties",
    element: <div>Properties Management</div>,
  },
  {
    path: "/admin/tenants",
    element: <div>Tenants Management</div>,
  },
];