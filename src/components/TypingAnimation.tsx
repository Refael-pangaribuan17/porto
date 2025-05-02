
import React, { useEffect, useState, useRef } from "react";

const roles = [
  "Network Engineer",
  "Machine Vision",
  "Cyber Security",
  "IoT engineer",
  "Cloud Infrastructure",
  "Virtualization Specialist",
];

type TypingAnimationProps = {
  className?: string;
};

export const TypingAnimation: React.FC<TypingAnimationProps> = ({ className }) => {
  const [displayText, setDisplayText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [typing, setTyping] = useState(true); // true: typing, false: deleting
  const [charIdx, setCharIdx] = useState(0);

  // Timing
  const TYPING_SPEED = 75;
  const DELETING_SPEED = 36;
  const DELAY_AFTER_TYPED = 1200;
  const DELAY_AFTER_DELETED = 400;
  const typingTimeout = useRef<number>();

  useEffect(() => {
    const currentRole = roles[roleIdx];

    if (typing) {
      if (charIdx < currentRole.length) {
        typingTimeout.current = window.setTimeout(() => {
          setDisplayText(currentRole.slice(0, charIdx + 1));
          setCharIdx(charIdx + 1);
        }, TYPING_SPEED);
      } else {
        typingTimeout.current = window.setTimeout(() => {
          setTyping(false);
        }, DELAY_AFTER_TYPED);
      }
    } else {
      if (charIdx > 0) {
        typingTimeout.current = window.setTimeout(() => {
          setDisplayText(currentRole.slice(0, charIdx - 1));
          setCharIdx(charIdx - 1);
        }, DELETING_SPEED);
      } else {
        typingTimeout.current = window.setTimeout(() => {
          setTyping(true);
          setRoleIdx((roleIdx + 1) % roles.length);
        }, DELAY_AFTER_DELETED);
      }
    }
    return () => window.clearTimeout(typingTimeout.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typing, charIdx, roleIdx]);

  return (
    <span className={className + " inline-flex items-center gap-2"}>
      <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 dark:from-yellow-400 dark:to-yellow-200 bg-clip-text text-transparent font-semibold transition-colors text-xl md:text-2xl">
        {displayText}
      </span>
      <span className="animate-pulse text-yellow-400 text-2xl select-none" aria-hidden>
        |
      </span>
    </span>
  );
};
