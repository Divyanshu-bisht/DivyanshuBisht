import React from "react";

export default function bglight() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "#000",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(
      circle at center,
      rgba(255, 180, 100, 0.4) 0%,
      rgba(255, 140, 60, 0.25) 20%,
      rgba(200, 100, 40, 0.12) 40%,
      rgba(150, 70, 30, 0.05) 60%,
      transparent 80%
    )`,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
