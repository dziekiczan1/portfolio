import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Home.scss";

const Home = () => {
  return (
    <div id="home" className="app__header app__flex app__primarybg">
      <div className="app__header-img">
        <img src={images.profile} alt="" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
