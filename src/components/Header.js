import React from "react";
import video from "../video/uefa.mp4";
import "../App.css";

export default function Header() {
    return (
        <header>
            <img
                style={{ width: "35%" }}
                src="https://cdn.clipart.email/53cf60a91161de45b077701e67d9ba85_premier-league-logo-png-and-vector-logo-download_2160-830.png"
                alt="Page header"
            />
            <video id="videoBg"
                autoPlay
                muted
                loop
                style={videoStyle}
            >
                <source src={video} type="video/mp4" />
            </video>
        </header>
    );
}

const videoStyle = {
    position: "fixed",
    width: "100%",
    left: 0,
    top: 0,
    zIndex: -1,
}