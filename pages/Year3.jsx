import React from "react";
import Navbar from "../components/Navbar";
import y3 from "../public/y3.png";
import "./year3.css";

function Year3() {
  return (
    <section id="year3">
      <div className="top-nav">
        <Navbar />
      </div>
      {/* Grain overlay */}
      <div className="grain" />

      {/* Gate / hover zone */}
      <div className="gate-wrapper">
        <div className="gate" />
      </div>
    </section>
  );
}

export default Year3;
