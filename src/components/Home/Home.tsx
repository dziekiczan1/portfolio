import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useRef } from "react";
import { images } from "../../constants";
import "./Home.scss";

const Home = () => {
  const circle = useRef<any>();
  gsap.fromTo(
    circle,
    1.5,
    { rotate: 0, scale: 0, x: 150, y: 50 },
    { rotate: 360, scale: 1, x: 0, y: 0 }
  );

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
            ref={circle}
          >
            <img src={images.redux} alt="" />
          </div>
          <div className="home__header-circle" id="home__header-circle-react">
            <img src={images.react} alt="" />
          </div>
          <div className="home__header-circle" id="home__header-circle-node">
            <img src={images.node} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
