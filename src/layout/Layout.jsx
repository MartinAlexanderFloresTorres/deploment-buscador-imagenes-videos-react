import { useState, useEffect } from "react"; 
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer"
import ScrollUp from "../components/ScrollUp";
import { Scroll } from "../helpers/index";

function Layout() {
  const [scroll, setScroll] = useState(false);
  
   //=============== Evento de scroll ===============//
   useEffect(() => {
    Scroll(setScroll);
  }, []);



  return (
    <>
      <Header />
      <Outlet />
      <ScrollUp scroll={scroll} />
      <Footer />
    </>
  );
}

export default Layout;
