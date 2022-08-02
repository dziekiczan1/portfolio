import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

  const ref = useRef<any>();

  useEffect(() => {
    gsap.set(ref.current, { opacity: 0, scale: 0.6 });
    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ".aboutme__skills-container",
        toggleActions: "restart pause pause pause",
      },
      opacity: 1,
      scale: 1,
      duration: 2,
    });
  }, []);

  // const itemVariants = {
  //   initial: { x: "-100vw", opacity: 0 },
  //   animate: { x: 0, opacity: 1 },
  //   variants={itemVariants}
  //   initial="initial"
  //   animate="animate"
  //   transition={{ duration: 0.3, delay: i * 0.1 }}
  // };

  return (
    <motion.div id="about" className="app__wrapper app__primarybg">
      <div className="aboutme__text-container" ref={ref}>
        <p>
          My name is <b>Piotr Rzadkowolski</b> and I have been fascinated and
          involved in coding websites for some time.
        </p>
        <p>
          I am a self-taught person and I derive my knowledge from people more
          experienced in the industry. I currently live in Warsaw, and I focus
          all my free time on developing my skills and learning about new
          technologies that will make my projects even better.
        </p>
        <p>
          I am a disciplined person, ready to take up work under stress and the
          need to constantly improve my professional qualifications. I am
          characterized by responsibility and the ability to work in a team, as
          well as in independent positions. My advantage is high personal
          culture, accuracy and innovation.
        </p>
        <p>I love diving, cycling and meeting new people and places.</p>
      </div>
      <div className="aboutme__skills-container" ref={ref}>
        {skillItem.map((skill, i) => (
          <motion.div className="aboutme__skills-item">
            <motion.div
              id={skill.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={skill.src} alt={skill.name} />
            </motion.div>
            <p className="p-text">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default About;
