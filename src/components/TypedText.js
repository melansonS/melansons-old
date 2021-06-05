import React, { useEffect, useState } from "react";

import sleep from "../utils/sleep";

const TypedText = ({ text, delay = 0, subText, className }) => {
  const [typed, setTyped] = useState("");
  const [typedSubtitle, setTypedSubtitle] = useState("");

  useEffect(() => {
    const startTyping = async () => {
      for (let i = 0; i < text.length; i++) {
        setTyped(text.slice(0, i));
        await sleep(70);
      }
      if (!subText) return;
      await sleep(delay);
      for (let i = 0; i < subText.length; i++) {
        setTypedSubtitle(subText.slice(0, i));
        await sleep(70);
      }
    };
    startTyping();
  }, [text, delay, subText]);

  return (
    <div className="typed-text">
      <b className={className}>
        {typed}
        {!typedSubtitle[0] && <span className="blinking-cursor">_</span>}
      </b>
      <span className="subtext">
        {typedSubtitle}
        {typedSubtitle[0] && <span className="blinking-cursor">_</span>}
      </span>
    </div>
  );
};

export default TypedText;
