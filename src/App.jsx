import { useState } from "react";
import "./App.css";

// Import Lottie
import Lottie from "lottie-react";
import animationData from "./assets/happy-autumn-shopping.json";
import ant from "./assets/ant.json";
import blink from "./assets/blink-emoji-orange.json";
import creative from "./assets/creative-team.json";
import manThinking from "./assets/man-thinking-something.json";
import manWithDiary from "./assets/man-with-diary.json";
import business from "./assets/businessman-holding-megaphone.json";
import manRaisingHands  from "./assets/man-raising-hands.json";
import businessCrossed  from "./assets/businessman-stand-with-arms-crossed.json";
import umbrella  from "./assets/businessman-holding-umbrella.json";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <div style={{ width: 250 }}>
        <Lottie animationData={manThinking} loop />
      </div>
      <div style={{ width: 250 }}>
        <Lottie animationData={manWithDiary} loop />
      </div>
      <div style={{ width: 250 }}>
        <Lottie animationData={business} loop />
      </div>
      <div style={{ width: 250 }}>
        <Lottie animationData={manRaisingHands} loop />
      </div>
      <div style={{ width: 250 }}>
        <Lottie animationData={businessCrossed} loop />
      </div>
      <div style={{ width: 250 }}>
        <Lottie animationData={umbrella} loop />
      </div>
    </div>
  );
}

export default App;
