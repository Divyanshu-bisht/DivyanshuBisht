import React, { useRef } from "react";
import pp from "../public/pp.png";
import { motion, useScroll, useTransform } from "framer-motion";
import "./about.css";
import Navbar from "../components/Navbar.jsx";

function About() {
  const triggerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ["start end", "start start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div id="about">
      <div className="top-nav">
        <Navbar />
      </div>
      <motion.div className="about" ref={triggerRef} style={{ opacity, scale }}>
        <div className="leftdiv">
          <div className="imgcont">
            <img src={pp} alt="profile picture" className="profpic" />
          </div>
        </div>
        <div className="rightdiv">
          <div className="rightcard">
            <h1 className="abouth1">About Me</h1>
            <div className="aboutcard">
              <div>
                <h1>Divyanshu Bisht</h1>
                <p className="p1">
                  It started without a plan. Like most students, I didn't really
                  know where I was going at first. I was surrounded by choices,
                  opinions, and expectations, and I picked a direction without
                  fully understanding what it would become. BCA wasn't a clear
                  goal — it was just the next step that felt possible at the
                  time.
                </p>
                <p className="p2">
                  What followed wasn't a straight line. Interests shifted,
                  motivation came and went, and some phases mattered more than
                  others. This page is a quiet record of that process — the
                  confusion, the small discoveries, and the moments where things
                  slowly started to make sense.
                </p>
                <p className="scroll">Scroll to see how it unfolded.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div ref={triggerRef} className="fade-trigger" />
    </div>
  );
}

export default About;
