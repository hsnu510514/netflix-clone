import { useState, useEffect } from "react";

const useCardSize = (isModalOpen) => {
  const [cardWidth, setCardWidth] = useState();
  const [cardHeight, setCardHeight] = useState();

  useEffect(() => {
    const containerWidth = window.innerWidth - 17 - 128;
    const sectionGap = 4;
    const width = (containerWidth - (5 * 2 + 2) * sectionGap) / 6;
    const height = (width * 3) / 4;

    setCardWidth(width);
    setCardHeight(height);
  }, [isModalOpen]);

  // console.log("w/h", cardWidth, cardHeight);
  return [cardWidth, cardHeight];
};

export default useCardSize;
