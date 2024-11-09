import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Newpage() {
  return (
    <div className="relative outline-none border-none">
      <iframe
        className="border-none transform scale-[1.0] origin-center"
        src="https://1drv.ms/p/s!Ah_J0s--OAe9o-8QxPUKWmwkKQbuXA?embed=1&em=2&wdAr=1.7777777777777777&wdEaaCheck=1"
        width="100%"
        height="288px"
        frameBorder="0"
        title="Microsoft Office Presentation"
      />
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
  );
}

export default Newpage;
