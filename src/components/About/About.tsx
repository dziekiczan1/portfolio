import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";

const About = () => {
  const skillItem = [
    { name: "TypeScript", src: `${images.ts}`, id: "ts" },
    { name: "React", src: `${images.react}`, id: "react" },
    { name: "Redux", src: `${images.redux}`, id: "redux" },
    { name: "MongoDB", src: `${images.mongodb}`, id: "mongodb" },
    { name: "Node", src: `${images.node}`, id: "node" },
    { name: "Express", src: `${images.exp}`, id: "express" },
    { name: "Sass", src: `${images.sass}`, id: "sass" },
    { name: "Api", src: `${images.api}`, id: "api" },
    { name: "Javascript", src: `${images.js}`, id: "js" },
    { name: "Css", src: `${images.css}`, id: "css" },
    { name: "Bootstrap", src: `${images.bootstrap}`, id: "bootstrap" },
    { name: "GSAP", src: `${images.gsap}`, id: "gsap" },
  ];

  const itemVariants = {
    initial: { x: "-100vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  const bounce = {
    hover: { x: [0, -10, 0, 10], y: [0, -10, 0, 10] },
  };

  return (
    <motion.div id="about" className="app__wrapper app__primarybg">
      <div className="myskills">
        {skillItem.map((skill, i) => (
          <motion.div
            className="aboutme__skills-item"
            variants={itemVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <motion.div
              id={skill.id}
              variants={bounce}
              whileHover="hover"
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <img src={skill.src} alt={skill.name} />
            </motion.div>
            <p className="p-text">{skill.name}</p>
          </motion.div>
        ))}
      </div>

      <p className="p-text">
        My name is <b>Piotr Rzadkowolski</b> and I have been fascinated and
        involved in coding websites for some time.
      </p>
      <p className="p-text">
        I am a self-taught person and I derive my knowledge from people more
        experienced in the industry. I currently live in Warsaw, and I focus all
        my free time on developing my skills and learning about new technologies
        that will make my projects even better.
      </p>
      <p className="p-text">
        I am a disciplined person, ready to take up work under stress and the
        need to constantly improve my professional qualifications. I am
        characterized by responsibility and the ability to work in a team, as
        well as in independent positions. My advantage is high personal culture,
        accuracy and innovation.
      </p>
      <p className="p-text">
        I love diving, cycling and meeting new people and places.
      </p>
    </motion.div>
  );
};

export default About;
