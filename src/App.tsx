import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./router";
import WebPage from "./pages/web";

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
  },
});

const App = () => {
  const showDemo = true;
  
  if (showDemo) {
    return <WebPage />;
  }

  return (
    <>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </>
  );
};

export default App;
