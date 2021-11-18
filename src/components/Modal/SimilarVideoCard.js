import React from "react";
import ControlButton from "../ControlButton";

const SimilarVideoCard = ({
  type,
  id,
  img,
  genre,
  date,
  title,
  name,
  overview,
  handleFavorite,
  favoriteList,
}) => {
  const isFavorite = favoriteList.hasOwnProperty(id);

  const handleFavoriteList = () => {
    handleFavorite((prevList) => {
      let updateList = Object.assign({}, prevList);

      if (updateList.hasOwnProperty(id)) {
        delete updateList[id];
      } else {
        updateList[id] = { type, id, img, genre, date: new Date() };
      }
      return updateList;
    });
  };

  return (
    <div id="movie-card" className="h-96 rounded">
      <div id="card-img" className="w-full h-40">
        {img && (
          <img
            src={`https://image.tmdb.org/t/p/w780/${img}`}
            alt=""
            className="h-40 w-full object-cover"
          />
        )}
      </div>
      <div id="card-info" className="w-full h-48 p-3 bg-gray-800 text-white">
        <div className="mb-3 flex flex-row justify-between items-end">
          <span className="text-lg line-clamp-1">
            {title}
            {name}
          </span>
          <ControlButton
            icon={isFavorite ? "check" : "plus"}
            type="circle"
            size="10"
            onClick={handleFavoriteList}
          />
        </div>
        <p className="text-base text-gray-400 line-clamp-4">
          {overview ? overview : "無介紹"}
        </p>
      </div>
    </div>
  );
};

export default SimilarVideoCard;
