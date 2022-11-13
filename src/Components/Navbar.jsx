import React from "react";
import tutedude from "../Images/tuteDudeLogo.png";
import Profile from "../Images/profile.png";
import Arrow from "../Images/arrowDown.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="logo_img" src={tutedude} alt="tutedude" />
      </div>
      <ul>
        <li>My Assignment</li>
        <li>Chat With Mentor</li>
        <li className="active"><img src={Profile} alt="" /> ProfileName <img src={Arrow} alt="" /></li>
      </ul>
      {/* <div className="profile_name">
        {" "}
        <FaUserCircle /> ProfileName <FaVuejs />
      </div> */}
    </div>
  );
}

export default Navbar;
