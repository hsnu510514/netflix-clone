import { useState, useEffect } from "react";

const useElementCoords = (ref, leftScroll) => {
  const [topCoord, setTopCoord] = useState();
  const [leftCoord, setLeftCoord] = useState();

  useEffect(() => {
    const box = ref.current.getBoundingClientRect();

    const body = document.body;
    const docEl = document.documentElement;

    const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    const scrollLeft =
      window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    const clientTop = docEl.clientTop || body.clientTop || 0;
    const clientLeft = docEl.clientLeft || body.clientLeft || 0;

    const top = box.top + scrollTop - clientTop;
    const left = box.left + scrollLeft - clientLeft;

    setTopCoord(top);
    setLeftCoord(left);
  }, [ref, leftScroll]);

  return [topCoord, leftCoord];
};

export default useElementCoords;
