import React from "react";
import video from "../video/uefa.mp4";
import "../App.css";


export default function Header() {
  return (
      <div>
        <header style={{alignContent: "center", verticalAlign: "middle"}}>
          <video id="videoBg"
                 autoPlay
                 muted
                 loop
                 style={videoStyle}
          >
            <source src={video} type="video/mp4"/>
          </video>
        </header>


      </div>
  );
}

const videoStyle = {
  position: "fixed",
  width: "100%",
  left: 0,
  top: 0,
  zIndex: -1,
}