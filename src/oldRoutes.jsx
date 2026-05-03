import Start from "./pages/Start";
import AboutUS from "./pages/AboutUs";

export default [
  {
    path: "/",
    element: <Start />,
    label: "Start",
  },
  {
    path: "/about-us",
    element: <AboutUS />,
    label: "About us",
  },
];
