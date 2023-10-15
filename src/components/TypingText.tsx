import React, { useState, useEffect, useRef } from "react";

type Section = {
  text: string;
};

function TypingText({ text }: Section) {
  const [currentText, setCurrentText] = useState("");
  const [type, setType] = useState(false);

  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

const handleIntersect: IntersectionObserverCallback = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => {
  const [entry] = entries; // Destructuring to get the first entry

  if (entry?.isIntersecting && textRef.current) {
    // Use optional chaining on entry
    setType(true);
    observer.unobserve(textRef.current);
  }
};




    if (textRef.current) {
      observer = new IntersectionObserver(handleIntersect, {
        threshold: 0.1,
      });
      observer.observe(textRef.current);
    }

    return () => observer && observer.disconnect();
  }, []);

  useEffect(() => {
    if (!type) return;

    const index = currentText.length;
    if (index < text.length) {
      setTimeout(() => {
        setCurrentText(text.substr(0, index + 1));
      }, 25);
    }
  }, [type, currentText, text]);

  return <span ref={textRef} className="text-2xl sm:text-6xl">{currentText}</span>;
}

export default TypingText;
