import React, { useEffect, useRef, useState } from "react";
import Footer from "../footer/Footer";
import "./Styles.css";

const Src3 = ({ setIsload }) => {
  const changeload = () => {
    setIsload(true);
  };

  return (
    <video onLoadedData={changeload} autoPlay type="video/mp4" muted loop>
      <source className="videoInactive" src={`/videos/video-3.mp4`}></source>
    </video>
  );
};

const Video = () => {
  const mask = useRef();
  const titleRef = useRef();
  const [isLoad, setIsload] = useState(false);

  return (
    <>
      <section className="main">
        {!isLoad && (
          <div className="loading">
            <h2>Loading</h2>
          </div>
        )}
        <div>{<Src3 setIsload={setIsload} />}</div>
        <img ref={mask} src="/videos/mask.jpg" alt="mask" className="mask" />
        <h2 ref={titleRef}>Cities</h2>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Video;
