import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import game1 from '../assets/images/game1.png';
import game2 from '../assets/images/game2.png';
function Newpage() {
  return (
    <div className="flex flex-wrap justify-evenly bg-[#b23d29]">
      <div className="relative outline-none border-none flex-grow min-w-[300px] max-w-[500px] ">
        <img src={game1} alt="" class="h-[500px] w-full " />
      
      <Link
        to="/game1" // Use your internal route path here
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          cursor: "pointer",
          textDecoration: "none",
        }}
      ></Link>
      </div>
      <div className="relative outline-none border-none flex-grow min-w-[300px] max-w-[500px] ">
        <img src={game2} alt="" class="h-[500px] w-full " />
      
      <Link
        to="/game2" // Use your internal route path here
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          cursor: "pointer",
          textDecoration: "none",
        }}
      ></Link>
      </div>
      
    </div>
    
  );
}

export default Newpage;
