import { Hero } from "./pages/Hero";
import { useState } from "react";
import { About } from "./pages/About";
import { LoadingScreen } from "./pages/LoadingScreen";


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
       
        <Hero/>
        <About/>
      
       
      </div>
    </>
  );
}

