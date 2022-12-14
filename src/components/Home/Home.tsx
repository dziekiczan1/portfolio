import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <link rel="image preload" href={images.circle} as="image" />
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
            src={images.circle}
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="bg_circle"
            alt="Background circle"
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
              <img src={images.redux} alt="Redux" width={48} height={48} />
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
              <img src={images.react} alt="React" width={48} height={48} />
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
              <img
                src={images.tailwind}
                alt="TailwindCSS"
                width={48}
                height={48}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
