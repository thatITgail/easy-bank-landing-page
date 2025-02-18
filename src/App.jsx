import { useState } from "react"
import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Features  from "../Components/Features"
import Articles from  "../Components/Articles"
import Footer from  "../Components/Footer"

export default function App(){
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  // const [backgroundColor, setBackgroundColor] = useState("white");

  const toggleNavbar = () => {
    setMobileNavOpen(!mobileNavOpen)
   document.body.style.backgroundColor = mobileNavOpen ? 'white' : '#f7f7fa';
   document.body.style.zIndex = "999";
  };

  return(
    <main className="z-10">
      <Navbar 
        onMenuToggle={toggleNavbar} 
        menuOpen = {mobileNavOpen}
      />
      <Hero />
      <Features />
      <Articles />
      <Footer />
    </main>
    
  )
} 