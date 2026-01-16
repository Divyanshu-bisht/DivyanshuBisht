import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Bglight from "../components/Bglight";
import char0 from "../public/walk2.png";
import charFooter from "../public/walk1.png";
import footerBg from "../public/3.jpg";
import Navbar from "../components/Navbar";
import "./year2.css";

export default function Year2() {
  const containerRef = useRef(null);
  const footerRef = useRef(null);

  const TOTAL_VH = 3000;
  const vh = (v) => v / TOTAL_VH;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* ---------------- CHARACTER ---------------- */

  const characterScale = useTransform(
    scrollYProgress,
    [0, vh(100), vh(250), 1],
    [1, 1.3, 1.3, 4]
  );

  const characterY = useTransform(
    scrollYProgress,
    [0, vh(100), vh(250), 1],
    [0, -15, -15, -30]
  );

  /* ---------------- CENTER TEXT ---------------- */

  const centerOpacity = useTransform(
    scrollYProgress,
    [0, vh(20), vh(100), vh(200)],
    [0, 0, 0.5, 0]
  );

  const centerScale = useTransform(
    scrollYProgress,
    [0, vh(20), vh(100)],
    [0.72, 0.72, 1.2]
  );

  const centerY = useTransform(
    scrollYProgress,
    [0, vh(20), vh(100)],
    [82, 82, 40]
  );

  /* ---------------- TEXT DATA ---------------- */

  const leftTexts = [
    "Deadlines appeared",
    "Expectations grew",
    "Questions followed",
    "Silence felt louder",
    "Decisions stacked up",
    "Pauses became longer",
    "Habits formed unnoticed",
    "But time kept moving",
    "To move slowly",
    "I thought I had time",
  ];

  const rightTexts = [
    "Still, I waited — time didn’t.",
    "People moved ahead",
    "I had to move too",
    "Comparison crept in",
    "Pressure became routine",
    "Movement was inevitable",
    "Comfort felt heavier",
    "Days slipped quietly",
    "To feel prepared",
    "To understand myself",
  ];

  const TOTAL = leftTexts.length;

  /* ---------------- FLOW ---------------- */

  const FLOW_FADE_IN_START = vh(300);
  const FLOW_ANIM_START = vh(420);

  const SLOT_SIZE = 1.2;
  const GAP = 0.6;

  const FLOW_TOTAL = TOTAL * (SLOT_SIZE * 2 + GAP * 2);

  const flow = useTransform(
    scrollYProgress,
    [FLOW_ANIM_START, 1],
    [0, FLOW_TOTAL]
  );

  const visibility = useTransform(
    scrollYProgress,
    [FLOW_FADE_IN_START, FLOW_FADE_IN_START + vh(80), FLOW_ANIM_START],
    [0, 1, 1]
  );

  /* ---------------- STACK RENDER ---------------- */

  const renderStack = (side, texts) =>
    texts.map((text, i) => {
      const depth = TOTAL - 1 - i;
      const visualDepth = TOTAL - 1 - i;

      const baseScale = 1 - visualDepth * 0.08;
      const baseX = side === "left" ? visualDepth * 14 : -visualDepth * 14;
      const baseOpacity = Math.max(0.35, 1 - visualDepth * 0.12);

      const slotIndex =
        depth * (SLOT_SIZE * 2 + GAP * 2) +
        (side === "right" ? SLOT_SIZE + GAP : 0);

      const local = useTransform(flow, (v) => v - slotIndex);

      const scale = useTransform(
        local,
        [0, SLOT_SIZE],
        [baseScale, 1.5 - visualDepth * 0.05]
      );

      const opacity = useTransform(
        local,
        [0, SLOT_SIZE, SLOT_SIZE + GAP],
        [baseOpacity, 1, 0]
      );

      const finalOpacity = useTransform(
        [visibility, opacity],
        ([v, o]) => v * o
      );

      return (
        <motion.div
          key={text + side}
          className="stack-item"
          style={{ scale, opacity: finalOpacity, x: baseX }}
        >
          {text}
        </motion.div>
      );
    });

  /* ---------------- FOOTER SCROLL ---------------- */

  const { scrollYProgress: footerProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  /* ---------------- FOOTER TEXT (0–100vh) ---------------- */

  // 40vh delay → footer is 200vh → 40 / 200 = 0.2

  // -------- FOOTER TEXT 1 (100vh window) --------

  const footerTextOpacity = useTransform(
    footerProgress,
    [0, 0.2, 0.45, 0.6],
    [0, 0, 1, 0]
  );

  const footerTextScale = useTransform(
    footerProgress,
    [0, 0.2, 0.45],
    [0.65, 0.65, 2]
  );

  const footerTextY = useTransform(
    footerProgress,
    [0, 0.2, 0.45],
    [40, 40, -100]
  );

  // -------- FOOTER TEXT 2 --------

  const footerText2Opacity = useTransform(footerProgress, [0.7, 0.85], [0, 1]);

  const footerText2Scale = useTransform(footerProgress, [0.7, 1], [0.75, 2.5]);

  const footerText2Y = useTransform(footerProgress, [0.7, 1], [40, -100]);

  return (
    <div id="year2">
      <div className="top-nav">
        <Navbar />
      </div>
      {/* ================= MAIN SCENE ================= */}
      <div
        ref={containerRef}
        className="scene-container"
        style={{ height: "1500vh" }}
      >
        <div className="viewport">
          <div className="background">
            <section className="dark-scene">
              <Bglight />
            </section>
          </div>

          <motion.div
            className="text-layer center"
            style={{
              opacity: centerOpacity,
              scale: centerScale,
              y: centerY,
              left: "50%",
              top: "40%",
              x: "-50%",
            }}
          >
            Second year didn’t begin loudly.
            <br />
            It just… started moving.
          </motion.div>

          <div className="stack left">{renderStack("left", leftTexts)}</div>
          <div className="stack right">{renderStack("right", rightTexts)}</div>

          <motion.div
            className="character2"
            style={{ scale: characterScale, y: characterY }}
          >
            <img src={char0} alt="" />
          </motion.div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div ref={footerRef} className="footer-wrapper">
        <div className="footer-sticky">
          <div className="footer-bg">
            <img src={footerBg} alt="" />
          </div>
          <div className="bottom-nav">
            <Navbar />
          </div>
          {/* FOOTER TEXT (FIRST 100vh) */}
          <motion.div
            className="footer-text"
            style={{
              opacity: footerTextOpacity,
              scale: footerTextScale,
              y: footerTextY,
            }}
          >
            I stopped running.
            <br />I started paying attention.
          </motion.div>

          <motion.div
            className="footer-text"
            style={{
              opacity: footerText2Opacity,
              scale: footerText2Scale,
              y: footerText2Y,
            }}
          >
            Rediscovering myself
          </motion.div>

          <div className="footer-character">
            <img src={charFooter} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
