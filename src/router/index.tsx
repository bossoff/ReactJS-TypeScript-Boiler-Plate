import type { RouteObject } from "react-router-dom";
import { authRoutes } from "./routes/auth"; // Authentication 
import { webRoutes } from "./routes/landing"; //landing page 
import { estateAdminRoutes } from "./routes/admin"; // estate Admin page
import { superAdminRoutes } from "./routes/super-admin"; // provider page
import { errorRoutes } from "./routes/errors"; // Error pages

const routes: RouteObject[] = [...authRoutes, ...webRoutes, ...estateAdminRoutes, ...superAdminRoutes, ...errorRoutes];
export default routes;