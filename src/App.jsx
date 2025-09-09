import { useState } from "react";
import "./App.css";
import Lottie from "lottie-react";

// Import animations
import manThinking from "./assets/man-thinking-something.json";
import manWithDiary from "./assets/man-with-diary.json";
import business from "./assets/businessman-holding-megaphone.json";
import manRaisingHands from "./assets/man-raising-hands.json";
import businessCrossed from "./assets/businessman-stand-with-arms-crossed.json";
import umbrella from "./assets/businessman-holding-umbrella.json";
import confuse from "./assets/Confuse women.json";

// Create animation list
const animations = [
  { name: "Thinking", data: manThinking },
  { name: "Diary", data: manWithDiary },
  { name: "Business", data: business },
  { name: "Raising Hands", data: manRaisingHands },
  { name: "Crossed", data: businessCrossed },
  { name: "Umbrella", data: umbrella },
  { name: "Confuse", data: confuse },
];

function App() {
  const [selected, setSelected] = useState(animations[0]); // default first animation

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {/* Preview area */}
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <Lottie animationData={selected.data} loop style={{ width: "100%" }} />
        <h2 style={{ fontSize: "1.2rem", marginTop: "10px" }}>{selected.name}</h2>
      </div>

      {/* Animation buttons */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
          marginTop: "30px",
        }}
      >
        {animations.map((anim, index) => (
          <button
            key={index}
            onClick={() => setSelected(anim)}
            style={{
              border:
                selected.name === anim.name
                  ? "3px solid #4CAF50"
                  : "2px solid #ccc",
              borderRadius: "12px",
              padding: "10px",
              cursor: "pointer",
              background: "white",
              width: "140px",
              flex: "1 1 120px", // responsive width
              maxWidth: "160px",
            }}
          >
            <Lottie
              animationData={anim.data}
              loop
              style={{ height: "100px", width: "100%" }}
            />
            <p
              style={{
                marginTop: "8px",
                fontSize: "0.9rem",
                wordWrap: "break-word",
              }}
            >
              {anim.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
