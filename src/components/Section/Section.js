import React, { useState, useRef, useEffect } from "react";
import ControlButton from "../ControlButton";
import SectionCard from "./SectionCard";
import useCardSize from "../../util/useCardSize";
// import "./Section.css";

const Section = ({
  title,
  handleModalDetail,
  handleModalOpen,
  isModalOpen,
  handleFavorite,
  favoriteList,
}) => {
  const [cardWidth, cardHeight] = useCardSize(isModalOpen);
  const [leftScroll, setLeftScroll] = useState(0);
  const [videoList, setVideoList] = useState(null);
  const list = useRef();
  const apiKey = "95ce9eef8636a5f2ca00baa49994b8c6";
  const url =
    title === "Movie"
      ? `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=zh-tw`
      : `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=zh-tw`;
  const visibleCards = 6;
  const sectionGap = 4;

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(url);
      const videos = await response.json();
      setVideoList(videos.results);
    };
    fetchMovie();
  }, [url]);

  const moveLeft = () => {
    if (leftScroll > visibleCards) {
      setLeftScroll((prevCount) => prevCount - visibleCards);
    } else {
      setLeftScroll(0);
    }
    if (leftScroll === 0) {
      setLeftScroll(videoList.length - visibleCards);
    }
    // list.current.scrollBy({
    //   top: 0,
    //   left: 800,
    //   behavior: "smooth",
    // });
  };

  const moveRight = () => {
    if (leftScroll < videoList.length - visibleCards * 2) {
      setLeftScroll((prevCount) => prevCount + visibleCards);
    } else {
      setLeftScroll(videoList.length - visibleCards);
      setVideoList((prevList) => [...prevList, ...prevList.slice(0, 20)]);
    }
  };

  return (
    <div className="w-full pb-16 z-10 hover:z-50">
      <div id="section-title" className="ml-16">
        <h3 className="ml-1 mb-4 text-3xl font-bold text-gray-300">
          Popular {title}
        </h3>
      </div>

      <div id="section-content" className="relative w-full flex flex-row">
        <div
          id="previous-btn"
          className="absolute left-0 w-16 h-full bg-black opacity-50 z-10 group hover:opacity-80"
        >
          <ControlButton
            className="hidden w-16 h-full filter group-hover:block"
            icon="back"
            size="14"
            onClick={() => moveLeft()}
          ></ControlButton>
        </div>

        <div
          className="ml-16 bg-white overflow-visible"
          style={{ width: "calc(100% - 128px)", height: cardHeight }}
          ref={list}
        >
          <div
            id="movie-list"
            style={{
              marginLeft: -leftScroll * (cardWidth + sectionGap * 2) || 0,
            }}
            className={`h-full flex flex-nowrap bg-black transform duration-500`}
          >
            {videoList?.map((video, idx) => (
              <SectionCard
                key={idx}
                type={title}
                id={video.id}
                img={video.poster_path}
                genre={video.genre_ids}
                handleModalOpen={handleModalOpen}
                handleModalDetail={handleModalDetail}
                setFavorite={handleFavorite}
                favoriteList={favoriteList}
                width={cardWidth}
                height={cardHeight}
              />
            ))}
            {/* <div
            className={`inline-block w-64 h-full mr-1 bg-blue-800 transform transition origin-left hover:scale-150`}
          >
            <div style={{ width: (1920 - 128 - 36) / 6 }} className="">
              1
            </div>
          </div> */}
          </div>
        </div>
        <div
          id="previous-btn"
          className="absolute right-0 w-16 h-full bg-black opacity-50 z-10 group hover:opacity-80"
        >
          <ControlButton
            className="hidden w-16 h-full filter group-hover:block"
            icon="forward"
            size="14"
            onClick={() => moveRight()}
          ></ControlButton>
        </div>
      </div>
    </div>
  );
};

export default Section;
