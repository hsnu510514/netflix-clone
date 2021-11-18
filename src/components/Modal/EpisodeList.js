import React, { useState, useEffect, useRef } from "react";

const EpisodeList = ({ seasons = [], id }) => {
  const [seasonIdx, setSeasonIdx] = useState(0);
  const selectRef = useRef();
  const episodeCount = seasons[seasonIdx]?.episode_count;

  useEffect(() => {
    selectRef.current.selectedIndex = 0;
  }, [id]);

  return (
    <div id="episodes" className="mb-10 divide-y divide-gray-700">
      <div id="episode-title" className="flex flex-row justify-between mb-4">
        <span className="text-3xl font-bold text-white">集數</span>
        <select
          className="h-10 border-gray-500 rounded px-2 bg-gray-800 text-white text-2xl font-bold"
          onChange={(e) => setSeasonIdx(e.target.value)}
          ref={selectRef}
        >
          {seasons?.map((season, idx) => (
            <option key={idx} className="p-2" value={idx} selected={idx === 0}>
              {season?.name}
            </option>
          ))}
        </select>
      </div>
      {episodeCount !== 0 ? (
        new Array(episodeCount).fill(0).map((episode, idx) => (
          <div
            key={idx}
            id="epidsode-list"
            className="w-full h-48 p-4 flex flex-row items-center"
          >
            <div
              id="episode-#"
              className="w-10 flex justify-center items-center"
            >
              <span className="block text-3xl font-semibold text-gray-300">
                {idx + 1}
              </span>
            </div>
            <div id="episode-image" className="mx-4">
              {seasons[seasonIdx]?.poster_path ? (
                <img
                  src={
                    `https://image.tmdb.org/t/p/w300` +
                    seasons[seasonIdx]?.poster_path
                  }
                  className="w-48 h-36 object-cover"
                  alt={`img${idx}`}
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="144px"
                  viewBox="0 0 24 24"
                  width="196px"
                  fill="gray"
                >
                  <rect fill="none" height="24" width="24" />
                  <path d="M19,19H5V5h14V19z M3,3v18h18V3H3z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7 L17,8.41L13.41,12L17,15.59z" />
                </svg>
              )}
            </div>
            <div
              id="episode-about"
              className="w-full h-full flex flex-col justify-start"
            >
              <div
                id="episode-title"
                className="py-2 text-xl text-white font-bold "
              >
                第{idx + 1}集
              </div>
              <p id="episode-intro" className="text gray-300">
                {seasons[seasonIdx]?.overview
                  ? seasons[seasonIdx]?.overview
                  : "無介紹"}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="py-2 text-3xl text-gray-300">無資料</p>
      )}
    </div>
  );
};

export default EpisodeList;
