import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <div>Welcome</div>,
      },
    ],
  },
]);

function App() {
  return (
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  );
}

export default App;
