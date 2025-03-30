import { Hero } from "./pages/Hero";
import { useState } from "react";
import { About } from "./pages/About";
import { LoadingScreen } from "./pages/LoadingScreen";
import { Banner } from "./pages/Banner";
import { Portfolio } from "./pages/Portfolio";
import { Stack } from "./pages/Stack";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";



export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
         <Banner/> 
       <Navbar/>
        <Hero/>
        <About/>
        <Portfolio/>
        <Stack/>
        <Footer/>
        
      
       
      </div>
    </>
  );
}

