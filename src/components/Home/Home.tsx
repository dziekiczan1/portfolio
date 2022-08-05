import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Home.scss";
import { gsap } from "gsap";

const Home = () => {
  // const circle1 = useRef<any>();
  // const circle2 = useRef<any>();
  // const circle3 = useRef<any>();

  // useEffect(() => {
  //   const circles = [circle1.current, circle2.current, circle3.current];
  //   gsap.fromTo(
  //     circles,
  //     { rotate: 0, scale: 0, x: 150, y: 50 },
  //     { rotate: 360, scale: 1, x: 0, y: 0 }
  //   );
  // });

  return (
    <div id="home" className="app__header app__primarybg">
      <div className="home__welcometext">
        <div className="home__messagecloud">
          <h1 id="home__messagecloud-heading">Piotr Rzadkowolski</h1>
          <p id="home__messagecloud-paragraph">Front-End Developer</p>
        </div>
        <div className="home__messagecloud-tick"></div>
      </div>
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
          <motion.div
            className="home__header-circle"
            id="home__header-circle-redux"
            whileInView={{
              rotate: [0, 360],
              scale: [0, 1],
              x: [150, 0],
              y: [50, 0],
            }}
          >
            <img src={images.redux} alt="" />
          </motion.div>
          <motion.div
            className="home__header-circle"
            id="home__header-circle-react"
            whileInView={{
              rotate: [0, 360],
              scale: [0, 1],
              x: [150, 0],
              y: [50, 0],
            }}
          >
            <img src={images.react} alt="" />
          </motion.div>
          <motion.div
            className="home__header-circle"
            id="home__header-circle-node"
            whileInView={{
              rotate: [0, 360],
              scale: [0, 1],
              x: [150, 0],
              y: [50, 0],
            }}
          >
            <img src={images.node} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
