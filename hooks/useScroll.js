import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scroll, setScroll] = useState(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setScroll(window.scrollY);
    setHeight(window.innerHeight - 85);
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return {
    scroll,
    height,
  };
};
