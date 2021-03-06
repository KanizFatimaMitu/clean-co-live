import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar"
import {publicRoute} from "./routes/publicRoutes"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";



function App() {
  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <>
      <Navbar>
        <Routes>
          {/* <Route path="/" element= {<Home></Home>}></Route>
          <Route path="/services" element= {<Services></Services>}></Route>
          <Route path="/contact" element= {<Contact></Contact>}></Route>
          <Route path="/about" element= {<About></About>}></Route>
          <Route path="/login" element= {<LogIn></LogIn>}></Route> */}
          {
            publicRoute.map(({path,Component}, index)=> <Route key={index} path={path} element={<Component/>}></Route>)
          }
        </Routes>
      </Navbar>  
    </>
  );
}

export default App;
