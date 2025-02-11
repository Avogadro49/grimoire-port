import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
}

const useTypewriter = ({ text, speed = 50 }: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};
export default useTypewriter;
