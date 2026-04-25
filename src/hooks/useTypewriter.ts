"use client";

import { useState, useEffect } from "react";

/**
 * Cycles through an array of words with a typewriter effect.
 * @param words  Array of strings to cycle through
 * @param speed  Typing speed in ms per character (default 80)
 * @param pause  Pause at end of each word in ms (default 1800)
 */
export function useTypewriter(words: string[], speed = 80, pause = 1800): string {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[idx % words.length];
    const delay = deleting ? speed / 2 : speed;

    const timeout = setTimeout(() => {
      if (!deleting && displayed === current) {
        setTimeout(() => setDeleting(true), pause);
        return;
      }
      if (deleting && displayed === "") {
        setDeleting(false);
        setIdx((i) => i + 1);
        return;
      }
      setDisplayed((d) =>
        deleting ? d.slice(0, -1) : current.slice(0, d.length + 1)
      );
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx, words, speed, pause]);

  return displayed;
}
