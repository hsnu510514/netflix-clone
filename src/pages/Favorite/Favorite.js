import React from "react";
import SectionCard from "../../components/Section/SectionCard";
import useCardSize from "../../util/useCardSize";

const Favorite = ({
  handleModalOpen,
  handleModalDetail,
  handleFavorite,
  favoriteList,
}) => {
  const [cardWidth, cardHeight] = useCardSize(false);
  const videoList = Object.values(favoriteList).sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  let content = (
    <h3 className="mb-10 text-white font-medium text-3xl">尚無影片加入</h3>
  );

  if (videoList.length > 0) {
    content = (
      <>
        <h3 className="mb-10 text-white font-medium text-3xl">我的片單</h3>
        <div className="grid grid-cols-6 gap-y-10">
          {videoList?.map((video) => (
            <div className="hover:z-20" key={video.id}>
              <div
                // className={`overflow-hidden`}
                style={{ width: cardWidth, height: cardHeight }}
              >
                <SectionCard
                  type={video.type}
                  img={video.img}
                  genre={video.genre}
                  id={video.id}
                  handleModalOpen={handleModalOpen}
                  handleModalDetail={handleModalDetail}
                  setFavorite={handleFavorite}
                  favoriteList={favoriteList}
                  width={cardWidth}
                  height={cardHeight}
                />
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  return <div className="flex-1 p-16 bg-black">{content}</div>;
};

export default Favorite;
