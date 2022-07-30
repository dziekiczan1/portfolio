import React, { useRef } from "react";
import "./Social.scss";
import { gsap } from "gsap";
import { Expo, Power1 } from "gsap";

const Social = () => {
  const quadrantItemsUser = useRef<any>();
  const quadrantItemsGit = useRef<any>();
  const quadrantItemsFile = useRef<any>();
  const quadrantItemsLinked = useRef<any>();
  const socialmediaicon = useRef<any>();

  const tl = gsap.timeline({ paused: true });
  tl.timeScale(1.6);

  tl.to(
    socialmediaicon,
    0.4,
    { rotation: 45, width: "120px", height: "120px", ease: Expo.easeOut },
    "first"
  );
  tl.to(".plus .plus-vertical", 0.3, { height: "0", ease: Power1.easeIn }, 1);
  tl.to(".plus .plus-horizontal", 0.3, { width: "0", ease: Power1.easeIn }, 1);

  tl.to(".app__socialmediaicon", 0, { backgroundColor: "transparent" });
  tl.to(quadrantItemsUser, 0.15, { x: -5, y: -5 }, "seperate");
  tl.to("#arrow-up", 0.2, { opacity: 1, y: 0 }, "seperate+=0.2");
  tl.to(quadrantItemsGit, 0.15, { x: 5, y: -5 }, "seperate");
  tl.to("#arrow-right", 0.2, { opacity: 1, x: 0 }, "seperate+=0.2");
  tl.to(quadrantItemsLinked, 0.15, { x: 5, y: 5 }, "seperate");
  tl.to("#arrow-down", 0.2, { opacity: 1, y: 0 }, "seperate+=0.2");
  tl.to(quadrantItemsFile, 0.15, { x: -5, y: 5 }, "seperate");
  tl.to("#arrow-left", 0.2, { opacity: 1, x: 0 }, "seperate+=0.2");

  //   cube.addEventListener("mouseenter", playTimeline);
  //   cube.addEventListener("mouseleave", reverseTimeline);

  function playTimeline(e: any) {
    console.log("test");
    e.stopPropagation();
    tl.play();
  }

  function reverseTimeline(e: any) {
    e.stopPropagation();
    tl.timeScale(1.8);
    tl.reverse();
  }

  return (
    <div className="app__socialmediaicon-wrapper">
      <div
        className="app__socialmediaicon"
        ref={socialmediaicon}
        onClick={playTimeline}
        onMouseLeave={reverseTimeline}
      >
        <div className="plus">
          <div className="plus-horizontal"></div>
          <div className="plus-vertical"></div>
        </div>
        <div className="quadrant">
          <div className="quadrant__item" ref={quadrantItemsUser}>
            <div className="quadrant__item__content">
              <a href="https://piotr.rzadkowolski.dev/" target="_blank">
                <i className="fa-solid fa-user fa-lg" id="arrow-up"></i>
              </a>
            </div>
          </div>
          <div className="quadrant__item" ref={quadrantItemsGit}>
            <div className="quadrant__item__content">
              <a href="https://github.com/dziekiczan1" target="_blank">
                <i className="fa-brands fa-github fa-lg" id="arrow-left"></i>
              </a>
            </div>
          </div>
          <div className="quadrant__item" ref={quadrantItemsFile}>
            <div className="quadrant__item__content">
              <a
                href="https://piotr.rzadkowolski.dev/Piotr Rzadkowolski.pdf"
                target="_blank"
              >
                <i className="fa-solid fa-file fa-lg" id="arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="quadrant__item" ref={quadrantItemsLinked}>
            <div className="quadrant__item__content">
              <a
                href="https://www.linkedin.com/in/piotr-rzadkowolski-a0a44411b/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin fa-lg" id="arrow-down"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
