import { ReactTyped } from "react-typed";
import { useState } from "react";
import "./Hero.css"

function Hero() {

  const [showPulse, setShowPulse] = useState(false);
  const [showContent, setShowContent] = useState(false);

  return (
    <div id="hero">
        <div id="codepulsetext">
            {/* First typed word */}
            <h1>
              <ReactTyped
                strings={["CODE"]}
                typeSpeed={50}
                backSpeed={40}
                startDelay={300}
                smartBackspace
                loop={false}
                showCursor={false}
                onComplete={() => setShowPulse(true)} // when CODE finishes, show PULSE
              />
            </h1>

            {/* Second typed word, only rendered after first completes */}
            {showPulse && (
              <h1 id="pulseText">
                <ReactTyped
                  strings={["PULSE"]}
                  typeSpeed={50}
                  backSpeed={40}
                  startDelay={0}
                  smartBackspace
                  loop={false}
                  showCursor={false}
                  onComplete={() => setShowContent(true)} // when PULSE finishes, show description
                />
              </h1>
            )}
      </div>

      {/* Description, fades in after PULSE completes */}
      <div className={`fade-in ${showContent ? "visible" : ""}`}>
        <h3 id="description">Coding productivity time tracker for developers</h3>
        <a id="installer" href="https://github.com/waleedhkirmani/CodePulseLandingPage/releases/download/installer/CodePulseSetup.exe" download>Install for Windows</a>
      </div>
    </div>
  );
}

export default Hero;
