import React, { useRef } from "react";
import ControlButton from "../ControlButton";
// import useElementCoords from "../../util/useElementCoords";

const genreList = [
  {
    id: 28,
    name: "动作",
  },
  {
    id: 12,
    name: "冒险",
  },
  {
    id: 16,
    name: "动画",
  },
  {
    id: 35,
    name: "喜剧",
  },
  {
    id: 80,
    name: "犯罪",
  },
  {
    id: 99,
    name: "纪录",
  },
  {
    id: 18,
    name: "剧情",
  },
  {
    id: 10751,
    name: "家庭",
  },
  {
    id: 14,
    name: "奇幻",
  },
  {
    id: 36,
    name: "历史",
  },
  {
    id: 27,
    name: "恐怖",
  },
  {
    id: 10402,
    name: "音乐",
  },
  {
    id: 9648,
    name: "悬疑",
  },
  {
    id: 10749,
    name: "爱情",
  },
  {
    id: 878,
    name: "科幻",
  },
  {
    id: 10770,
    name: "电视电影",
  },
  {
    id: 53,
    name: "惊悚",
  },
  {
    id: 10752,
    name: "战争",
  },
  {
    id: 37,
    name: "西部",
  },
];
const genreMap = genreList.reduce((map, genre) => {
  map[genre["id"]] = genre["name"];
  return map;
}, {});

const SectionCard = ({
  type,
  id,
  img,
  genre,
  handleModalOpen,
  handleModalDetail,
  setFavorite,
  favoriteList,
  width,
  height,
}) => {
  const cardRef = useRef();
  // const [, leftCoord] = useElementCoords(cardRef, marginLeft);
  // const sectionGap = 4;
  // const paddingX = 16 * 4;
  const isFavorite = favoriteList.hasOwnProperty(id);
  const typeArr = genre.reduce((acc, type, idx) => {
    acc.push(<p key={idx}>{genreMap[type]}</p>);

    if (idx !== genre.length - 1) {
      acc.push(
        <span key={idx + 0.5} className="px-2 text-center text-gray-500">
          o
        </span>
      );
    }

    return acc;
  }, []);

  const handleFavoriteList = () => {
    setFavorite((prevList) => {
      let updateList = Object.assign({}, prevList);

      if (updateList.hasOwnProperty(id)) {
        delete updateList[id];
      } else {
        updateList[id] = { type, id, img, genre, date: new Date() };
      }
      return updateList;
    });
  };
  const handleDetail = () => {
    const scrollTop = document.documentElement.scrollTop;
    // console.log(scrollY);
    const body = document.body;
    // body.style.position = "fixed";
    body.style.overflow = "hidden";
    // body.style.top = `-${scrollY}`;
    handleModalDetail({ id, type });
    handleModalOpen({ isOpen: true, scrollTop });
  };
  // window.innerWidth - 17 - (leftCoord + width + sectionGap * 2) <= paddingX
  return (
    <div
      className={`mx-1 flex flex-col rounded text-gray-200 font-bold group transform duration-200 hover:-translate-y-12 hover:scale-125 hover:z-20`}
      ref={cardRef}
    >
      <div
        id="video-preview"
        className="transform duration-200 group-hover:z-40"
        style={{ width: width, height: height }}
      >
        <img
          src={"https://image.tmdb.org/t/p/w500" + img}
          alt="img"
          className="rounded object-cover group-hover:rounded-none group-hover:rounded-t"
          style={{ width: width, height: height }}
        ></img>
      </div>
      <div
        id="video-detail"
        className="hidden w-full rounded-b p-3 bg-gray-800 transform duration-200 transition-all group-hover:block z-40"
        style={{ width: width }}
      >
        <div
          id="video-button"
          className="h-12 mb-2 flex flex-row justify-between items-center"
        >
          <div className="flex flex-row items-center gap-x-1">
            <ControlButton
              icon="play"
              type=""
              size="9"
              disabled
            ></ControlButton>
            <ControlButton
              icon={isFavorite ? "check" : "plus"}
              type="circle"
              size="8"
              onClick={() => handleFavoriteList()}
            ></ControlButton>
            <ControlButton
              icon="thumbUp"
              type="circle"
              size="8"
            ></ControlButton>
            <ControlButton
              icon="thumbDown"
              type="circle"
              size="8"
            ></ControlButton>
          </div>
          <div className="">
            <ControlButton
              icon="arrowDown"
              type="circle"
              size="8"
              onClick={() => handleDetail()}
            ></ControlButton>
          </div>
        </div>
        <div
          id="video-intro"
          className="relative w-full h-6 mb-2 flex flex-row items-center"
        >
          <span id="intro-fit" className="text-green-500 mr-2">
            100%適合您
          </span>
          <span
            id="intro-age"
            className="border border-gray-300 mr-2 leading-4 px-1"
          >
            13+
          </span>
          {/* <span id="intro-season" className=" mr-2">
            共9季
          </span> */}
          <span
            id="intro-quality"
            className="border border-gray-300 px-1 text-xs"
          >
            高畫質
          </span>
        </div>
        <div id="video-type" className="h-6 flex flex-row">
          {typeArr}
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
