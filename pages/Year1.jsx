import React, { useRef } from "react";
import "./year1.css";

import char0 from "../public/char0.png";
import char1 from "../public/char1.png";
import char2 from "../public/char2.png";
import char3 from "../public/char3.png";
import char4 from "../public/char4.png";
import char5 from "../public/char5.png";
import char6 from "../public/char6.png";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

import Navbar from "../components/Navbar";
import About from "./About";

/* ---------------- STORY TEXT ---------------- */

function StoryText({ text, range, scroll, className }) {
  const shouldReduce = useReducedMotion();

  const opacity = useTransform(scroll, range, [0, 1]);
  const y = shouldReduce ? 0 : useTransform(scroll, range, [30, 0]);
  const scale = shouldReduce ? 1 : useTransform(scroll, range, [0.96, 1]);

  return (
    <motion.p className={`node ${className}`} style={{ opacity, y, scale }}>
      {text}
    </motion.p>
  );
}

/* ---------------- YEAR 1 ---------------- */

function Year1() {
  const sectionRef = useRef(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* ---------------- CAMERA MOTION ---------------- */

  const cameraScale = shouldReduce
    ? 1
    : useTransform(
        scrollYProgress,
        [0, 0.18, 0.36, 0.54, 0.72, 0.84, 0.92, 1],
        [1, 1.07, 1.1, 1.08, 1.1, 1.16, 1.12, 1]
      );

  const cameraX = shouldReduce
    ? "0%"
    : useTransform(
        scrollYProgress,
        [0, 0.18, 0.36, 0.54, 0.72, 0.84, 0.92, 1],
        ["0%", "6%", "0%", "-6%", "-8%", "0%", "6%", "0%"]
      );

  const cameraY = shouldReduce
    ? "0%"
    : useTransform(
        scrollYProgress,
        [0, 0.18, 0.36, 0.54, 0.72, 0.84, 0.92, 1],
        ["0%", "6%", "8%", "6%", "0%", "-11%", "-8%", "0%"]
      );

  /* ---------------- CHARACTER PHASES ---------------- */

  // START (linger longer)
  const char0Start = useTransform(scrollYProgress, [0, 0.12, 0.18], [1, 1, 0]);

  // PHASES — slowed + spaced
  const char1Opacity = useTransform(
    scrollYProgress,
    [0.18, 0.24, 0.28, 0.32],
    [0, 1, 1, 0]
  );

  const char2Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.36, 0.4, 0.44],
    [0, 1, 1, 0]
  );

  const char3Opacity = useTransform(
    scrollYProgress,
    [0.42, 0.48, 0.52, 0.56],
    [0, 1, 1, 0]
  );

  const char4Opacity = useTransform(
    scrollYProgress,
    [0.54, 0.6, 0.64, 0.68],
    [0, 1, 1, 0]
  );

  const char5Opacity = useTransform(
    scrollYProgress,
    [0.7, 0.76, 0.82, 0.88],
    [0, 1, 1, 0]
  );

  // SLOWER PHASE 6
  const char6Opacity = useTransform(
    scrollYProgress,
    [0.82, 0.86, 0.92, 0.96],
    [0, 1, 1, 0]
  );

  // END — slower return to char0
  const char0End = useTransform(scrollYProgress, [0.9, 0.96, 1], [0, 1, 1]);

  const charScale = shouldReduce
    ? 1
    : useTransform(scrollYProgress, [0, 1], [0.98, 1.04]);

  return (
    <>
      <About />

      <div id="year1">
        <section ref={sectionRef} className="circle-section">
          <div className="sticky">
            {/* CAMERA */}
            <motion.div
              className="scene"
              style={{
                scale: cameraScale,
                x: cameraX,
                y: cameraY,
              }}
            >
              {/* background */}
              <div className="bg" />

              {/* CHARACTER STACK */}
              <div className="character-wrap">
                {/* START */}
                <motion.img
                  src={char0}
                  className="character"
                  style={{ opacity: char0Start, scale: charScale }}
                  alt="start"
                />

                {/* EVOLUTION */}
                <motion.img
                  src={char1}
                  className="character"
                  style={{ opacity: char1Opacity, scale: charScale }}
                />
                <motion.img
                  src={char2}
                  className="character"
                  style={{ opacity: char2Opacity, scale: charScale }}
                />
                <motion.img
                  src={char3}
                  className="character"
                  style={{ opacity: char3Opacity, scale: charScale }}
                />
                <motion.img
                  src={char4}
                  className="character"
                  style={{ opacity: char4Opacity, scale: charScale }}
                />
                <motion.img
                  src={char5}
                  className="character"
                  style={{ opacity: char5Opacity, scale: charScale }}
                />
                <motion.img
                  src={char6}
                  className="character"
                  style={{ opacity: char6Opacity, scale: charScale }}
                />

                {/* END */}
                <motion.img
                  src={char0}
                  className="character"
                  style={{ opacity: char0End, scale: charScale }}
                  alt="end"
                />
              </div>

              {/* STORY TEXTS */}
              <div className="texts">
                <StoryText
                  text="First year felt loud and overwhelming, like standing in a crowd where everyone already knew where to go."
                  range={[0.12, 0.22]}
                  scroll={scrollYProgress}
                  className="n1"
                />
                <StoryText
                  text="New faces everywhere, conversations blending together, friendships forming quickly while I quietly tried to understand where I belonged."
                  range={[0.26, 0.36]}
                  scroll={scrollYProgress}
                  className="n2"
                />
                <StoryText
                  text="I spent most days trying to fit in, observing more than speaking, hoping something would eventually feel like mine."
                  range={[0.4, 0.5]}
                  scroll={scrollYProgress}
                  className="n3"
                />
                <StoryText
                  text="Somewhere between confusion and curiosity, I discovered web development and felt a strange sense of control for the first time."
                  range={[0.55, 0.65]}
                  scroll={scrollYProgress}
                  className="n4"
                />
                <StoryText
                  text="Late nights slowly turned into learning sessions, mistakes into lessons, and confusion into the beginning of something meaningful."
                  range={[0.7, 0.8]}
                  scroll={scrollYProgress}
                  className="n5"
                />
                <StoryText
                  text="I didn’t realize it then, but this was the first time something felt less like an obligation and more like a choice."
                  range={[0.82, 0.92]}
                  scroll={scrollYProgress}
                  className="n6"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER END */}
        <div className="fend">
          <p>
            THIS YEAR CLOSES WITH DISCOVERY, CURIOSITY, AND QUIET HOPE. THE PATH
            AHEAD REMAINS UNKNOWN — AND THE STORY GOES ON.
          </p>
          <div className="bottom-nav">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Year1;
