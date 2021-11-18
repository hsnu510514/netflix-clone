import React, { useState, useEffect } from "react";
import SimilarVideoCard from "./SimilarVideoCard";

const SimilarVideo = ({ videoDetail, handleFavorite, favoriteList }) => {
  const [videoList, setVideoList] = useState([]);
  const apiKey = "95ce9eef8636a5f2ca00baa49994b8c6";

  useEffect(() => {
    if (videoDetail.id) {
      const fetchRecommendedMovie = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/${videoDetail?.type?.toLowerCase()}/${
            videoDetail.id
          }/similar?api_key=${apiKey}&language=zh-tw&page=1`
        );
        const json = await response.json();

        setVideoList(
          json.results.filter((video) => video.id !== videoDetail.id)
        );
      };

      fetchRecommendedMovie();
    }
  }, [videoDetail.id, videoDetail.type]);

  return (
    <div className="mb-10">
      <h3 className="mb-6 text-3xl font-bold">類似影片</h3>
      <div className="w-full grid grid-cols-3 gap-4">
        {videoList?.map((video) => (
          <SimilarVideoCard
            key={video.id}
            type={videoDetail.type}
            id={video.id}
            genre={video.genre_ids}
            img={video.backdrop_path}
            date={video.release_date}
            title={video.title}
            name={video.name}
            overview={video.overview}
            handleFavorite={handleFavorite}
            favoriteList={favoriteList}
          ></SimilarVideoCard>
        ))}
      </div>
    </div>
  );
};

export default SimilarVideo;
