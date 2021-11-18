import React from "react";
import Canvas from "./Canvas";
import Section from "../../components/Section/Section";

const Home = ({
  handleModalOpen,
  isModalOpen,
  handleModalDetail,
  handleFavorite,
  favoriteList,
}) => {
  return (
    <div
      className={`flex-1 w-full -mb-20 pb-32 bg-black overflow-y-visible overflow-x-hidden`}
      style={{ paddingRight: 17 * Number(isModalOpen) }}
    >
      <Canvas></Canvas>
      <div id="movie-section" className="-mt-28 flex flex-col bg-black z-10">
        <Section
          title="Movie"
          handleModalOpen={handleModalOpen}
          handleModalDetail={handleModalDetail}
          isModalOpen={isModalOpen}
          handleFavorite={handleFavorite}
          favoriteList={favoriteList}
        ></Section>
        <Section
          title="TV"
          handleModalOpen={handleModalOpen}
          handleModalDetail={handleModalDetail}
          isModalOpen={isModalOpen}
          handleFavorite={handleFavorite}
          favoriteList={favoriteList}
        ></Section>
      </div>
    </div>
  );
};

export default Home;
