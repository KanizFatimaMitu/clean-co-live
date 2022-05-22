import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home/Home"
import LogIn from "../pages/LogIn";
import Services from "../pages/Services";

export const publicRoute = [
    {path:"/", name: "Home", Component: Home},
    {path:"/services", name: "Services", Component: Services},
    {path:"/contact", name: "Contact", Component: Contact},
    {path:"/about", name: "About", Component: About},
    {path:"/login", name: "LogIn", Component: LogIn},
  ]

//   export default publicRoute;