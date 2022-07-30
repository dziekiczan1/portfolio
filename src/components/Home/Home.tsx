import { images } from "../../constants";
import "./Home.scss";

const Home = () => {
  return (
    <div id="home" className="app__header app__flex app__primarybg">
      <div className="app__header-img">
        <img src={images.profile} alt="" id="profilepic" />
      </div>
    </div>
  );
};

export default Home;
