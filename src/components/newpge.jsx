import React from "react";

function Newpage() {
  return (
    <div className="relative outline-none border-none">
      <iframe className="border-none transform scale-[1.001] origin-center"
        src="https://1drv.ms/p/s!Ah_J0s--OAe9o-8QxPUKWmwkKQbuXA?embed=1&em=2&wdAr=1.7777777777777777&wdEaaCheck=1"
        width="100%"
        height="400px"
        frameBorder="0"
        title="Microsoft Office Presentation"
      />
      <a
        href="https://onedrive.live.com/view.aspx?resid=BD0738BECFD2C91F!587664&authkey=!AMT1ClpsJCkG7lw"
        target="_blank"
        rel="noopener noreferrer"
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
      ></a>
    </div>
  );
}

export default Newpage;
