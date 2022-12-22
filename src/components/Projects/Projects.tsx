import { motion } from "framer-motion";
import "./Projects.scss";
import { images } from "../../constants";
import { BsGithub } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectItem = [
    {
      name: "WhereTo? Dive!",
      src: `${images.projdive}`,
      projecthref: "https://memories.piotr.rzadkowolski.dev/",
      githubhref: "https://github.com/dziekiczan1/dive",
      desc: "Website made with MERN stack for all diving fans. Users can add or like a diving spot. I also created an admin panel.",
      stack: "React, Redux, MongoDB, Express, Node.js",
    },
    {
      name: "I got so high that...",
      src: `${images.proj10}`,
      projecthref: "https://igotsohigh.netlify.app/",
      githubhref: "https://github.com/dziekiczan1/igotsohigh",
      desc: "MERN stack website, where people can share and comment their funny stories after they got high. I used JWT for authentication.",
      stack: "React, Redux, MongoDB, Express, Node.js",
    },
    {
      name: "Resume Builder",
      src: `${images.proj13}`,
      projecthref: "https://createresumex.netlify.app/",
      githubhref: "https://github.com/dziekiczan1/resumebuilder",
      desc: "This application allows the user to create their own resume. It will help you create a simple and readable CV.",
      stack: "React, Typescript, Redux Toolkit, Node.js, Express",
    },
    {
      name: "NBApp",
      src: `${images.proj11}`,
      projecthref: "https://nbapplication.netlify.app/",
      githubhref: "https://github.com/dziekiczan1/nbapp",
      desc: "NBApplication for every NBA fan out there. ",
      stack: "React, Redux Toolkit, API, MUI, TailwindCSS",
    },
    {
      name: "Currency Converter",
      src: `${images.proj12}`,
      projecthref: "https://currencyconvcoi.netlify.app/",
      githubhref: "https://github.com/dziekiczan1/coicurrencyconverter",
      desc: "Currency Converter application. It's fetching currencies and allow to convert them. All transactions are saved in History component with usage of localstorage.",
      stack: "React, Typescript, Redux Toolkit, API",
    },
    {
      name: "I don't have a window",
      src: `${images.proj3}`,
      projecthref: "https://idonthaveawindow.netlify.app/",
      githubhref: "https://github.com/dziekiczan1/idonthavewindow",
      desc: "Weather app for people who don't have a window at home...",
      stack: "React, Redux Toolkit, API",
    },
    {
      name: "Cash Flow",
      src: `${images.proj2}`,
      projecthref: "https://piotr.rzadkowolski.dev/projects/cashflow",
      githubhref: "https://github.com/dziekiczan1/cashflow",
      desc: "Simple one page webiste made for an accounting office. ",
      stack: "HTML, CSS, Javascript, Bootstrap",
    },
    {
      name: "Drum Kit",
      src: `${images.proj4}`,
      projecthref: "https://piotr.rzadkowolski.dev/projects/drum-kit/",
      githubhref: "https://github.com/dziekiczan1/drum-kit",
      desc: "Drum Kit set made with HTML, CSS, Javascript",
      stack: "HTML, CSS, Javascript",
    },
    {
      name: "Simon Game",
      src: `${images.proj6}`,
      projecthref: "https://piotr.rzadkowolski.dev/projects/simon-game/",
      githubhref: "https://github.com/dziekiczan1/simongame",
      desc: "Game made with HTML, CSS, Javascript",
      stack: "HTML, CSS, Javascript",
    },
  ];

  const refer = useRef<any>();

  useEffect(() => {
    gsap.from("#project-card", { opacity: 0, scale: 0.6 });
    gsap.to("#project-card", {
      scrollTrigger: {
        trigger: ".projects__container",
        toggleActions: "play pause restart pause",
      },
      opacity: 1,
      scale: 1,
      duration: 2,
    });
  }, []);

  return (
    <motion.div id="projects" className="app__wrapper app__primarybg">
      <motion.div
        className="heading-text"
        whileInView={{
          opacity: [0, 1],
          scale: [7, 1],
          y: [50, 0],
        }}
      >
        <motion.div
          whileInView={{
            width: [0, 300],
          }}
        ></motion.div>
        <h1>Take a look at some of my works!</h1>
      </motion.div>
      <div className="projects__container">
        {projectItem.map((project, index) => (
          <div id="project-card" ref={refer} key={index}>
            <div className="project-image">
              <img src={project.src} alt={project.name} />
              <div className="project-info">
                <div className="project-info-head">
                  <h2>{project.name}</h2>
                  <p className="p-text">{project.desc}</p>
                </div>
                <div className="project-info-bottom">
                  <p id="stack-title">Stack used:</p>
                  <p className="p-text">{project.stack}</p>
                  <div className="imghover-actions">
                    <div className="imghover-details">
                      <a
                        href={project.projecthref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="imghover-icons">
                          <AiFillEye />
                        </div>
                        <div>
                          <p className="p-text">Live</p>
                        </div>
                      </a>
                    </div>
                    <div className="imghover-details">
                      <a
                        href={project.githubhref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="imghover-icons">
                          <BsGithub />
                        </div>
                        <div>
                          <p className="p-text">Github</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
