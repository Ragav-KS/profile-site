import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./routes/Home";
import { useAngularTicker } from "./hooks/useAngularTicker";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div id="scroll-wrapper" className="fixed overflow-hidden">
        <Outlet />,
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  useAngularTicker();

  return (
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  );
}

export default App;
