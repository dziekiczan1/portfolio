import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { images } from "../../constants";
import "./Home.scss";

const Home = () => {
  const circle1 = useRef<any>();
  const circle2 = useRef<any>();
  const circle3 = useRef<any>();

  useEffect(() => {
    const circles = [circle1.current, circle2.current, circle3.current];
    gsap.fromTo(
      circles,
      { rotate: 0, scale: 0, x: 150, y: 50 },
      { rotate: 360, scale: 1, x: 0, y: 0 }
    );
  });

  return (
    <div id="home" className="app__header app__flex app__primarybg">
      <div className="app__header-img">
        <img src={images.profile} alt="" className="bg_profile" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="bg_circle"
          src={images.circle}
          alt=""
        />
        <div className="home__header-circles">
          <div
            className="home__header-circle"
            id="home__header-circle-redux"
            ref={circle1}
          >
            <img src={images.redux} alt="" />
          </div>
          <div
            className="home__header-circle"
            id="home__header-circle-react"
            ref={circle2}
          >
            <img src={images.react} alt="" />
          </div>
          <div
            className="home__header-circle"
            id="home__header-circle-node"
            ref={circle3}
          >
            <img src={images.node} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
