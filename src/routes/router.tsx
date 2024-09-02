import App from "../App.tsx";
import { About } from "../pages/index.ts";
import {MainLayout} from "../layouts";
import {
    createBrowserRouter
  } from "react-router-dom";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
          {
              path: '',
              element: <App />,
          },
          {
              path: 'about',
              element: <About />,
          }
      ],
    }
  ]);

  export default router;