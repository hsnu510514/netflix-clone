import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import ControlButton from "../ControlButton";
import EpisodeList from "./EpisodeList";
import SimilarVideo from "./SimilarVideo";

const aboutInfo = {
  director: ["卡特·貝斯", "克雷格·湯瑪斯"],
  actor: [
    "喬什·拉德諾",
    "傑森·席格尼爾",
    "派屈克·哈里斯",
    "寇碧·史莫森",
    "艾莉森·漢尼根",
  ],
  segment: ["浪漫喜劇節目", "情境劇", "喜劇節目", "美國節目"],
  type: ["感性", "滑稽", "浪漫"],
  age: 13,
};

const Modal = ({
  isOpen,
  handleModal,
  modalDetail,
  handleFavorite,
  favoriteList,
}) => {
  const route = useLocation();
  const [prevRecord, setPrevRecord] = useState();
  const [detail, setDetail] = useState();
  const [credits, setCredits] = useState();
  const modalRef = useRef();
  const apiKey = "95ce9eef8636a5f2ca00baa49994b8c6";
  // const urlList =
  //   modalDetail.type === "Movie"
  //     ?
  //     : [
  //         fetch(
  //           `https://api.themoviedb.org/3/tv/${modalDetail.id}?api_key=${apiKey}&language=zh-tw`
  //         ),
  //         fetch(`https://api.themoviedb.org/3/tv/${modalDetail.id}/credits?api_key=${apiKey}&language=zh-tw
  //   `),
  //       ];
  const isFavorite = favoriteList.hasOwnProperty(modalDetail.id);

  useEffect(() => {
    if (modalDetail.id) {
      Promise.all([
        fetch(
          `https://api.themoviedb.org/3/${modalDetail?.type?.toLowerCase()}/${
            modalDetail.id
          }?api_key=${apiKey}&language=zh-tw`
        ),
        fetch(`https://api.themoviedb.org/3/${modalDetail?.type?.toLowerCase()}/${
          modalDetail.id
        }/credits?api_key=${apiKey}&language=zh-tw
    `),
      ])
        .then(async ([videoDetail, videoCredits]) => {
          const detail = await videoDetail.json();
          const credits = await videoCredits.json();
          const actors = credits?.cast.filter(
            (actor) => actor.known_for_department === "Acting"
          );

          setDetail(detail);
          setCredits(actors);
        })
        .catch((err) => console.log(err));
    }
  }, [modalDetail.id, modalDetail.type]);
  // useEffect(() => {
  //   console.log(detail);
  //   console.log(credits);
  //   console.log("id", modalId);
  // }, [detail, modalId]);

  const handleFavoriteList = () => {
    handleFavorite((prevList) => {
      let updateList = Object.assign({}, prevList);

      if (updateList.hasOwnProperty(modalDetail.id)) {
        setPrevRecord(updateList[modalDetail.id]);
        delete updateList[modalDetail.id];

        if (route.pathname === "/my-list") {
          handleModalOpen();
        }
      } else {
        if (route.pathname === "/my-list") {
          updateList[modalDetail.id] = prevRecord;
        } else {
          updateList[modalDetail.id] = {
            id: detail.id,
            img: detail.backdrop_path,
            genre: detail.genres.map((type) => type.id),
            date: new Date(),
          };
        }
      }
      return updateList;
    });

    // handleFavorite((prevList) => {
    //   let updateList = Object.assign({}, prevList);

    //   delete updateList[modalId];
    //   handleModalOpen();

    //   return updateList;
    // });
  };

  const handleModalOpen = () => {
    const body = document.body;
    body.style.overflow = "";
    document.documentElement.scrollTop = isOpen.scrollTop;
    modalRef.current.scrollTop = 0;

    handleModal({ isOpen: false, scrollTop: 0 });
  };

  return (
    <div className={`${isOpen.isOpen ? "visible" : "invisible"}`}>
      <div
        id="backdrop"
        className={`${
          isOpen.isOpen ? "visible" : "invisible"
        } fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-50`}
        onClick={() => handleModalOpen()}
      >
        <div
          className="block w-full h-screen overflow-y-scroll z-50"
          ref={modalRef}
        >
          <div
            id="modal"
            className={`w-3/5 mt-16 mx-auto rounded-md bg-black text-white transform transition ${
              isOpen.isOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"
            } shadow-2xl overflow-hidden z-40`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              id="video-preview"
              className="relative w-full"
              style={{
                height: 600,
              }}
            >
              <div
                id="image-gradient"
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, transparent 0%, transparent 80%, black 100%)",
                }}
              ></div>
              <img
                src={
                  `https://image.tmdb.org/t/p/w780/` +
                  `${detail?.backdrop_path || detail?.poster_path}`
                }
                className="w-full h-full object-cover"
                alt="backdrop"
              ></img>
              <div className="absolute bottom-10 px-10 w-full flex flex-col">
                <h1 id="title" className="text-6xl font-black mb-8">
                  {detail?.title}
                  {detail?.name}
                </h1>
                <div
                  id="control-panel"
                  className="flex flex-row justify-between"
                >
                  <div id="panel-left" className="w-1/2  flex flex-row gap-2">
                    <ControlButton icon="play2" type="text" size="12">
                      播放
                    </ControlButton>
                    <ControlButton
                      icon={isFavorite ? "check" : "plus"}
                      type="circle"
                      size="12"
                      onClick={() => handleFavoriteList()}
                    />
                    <ControlButton icon="thumbUp" type="circle" size="12" />
                    <ControlButton icon="thumbDown" type="circle" size="12" />
                  </div>
                  <div id="panel-right">
                    <ControlButton icon="volumeUp" type="circle" size="12" />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-10">
              <div id="video-intro" className="mb-12 flex flex-row bg-black">
                <div
                  id="intro-left"
                  className="w-2/3 mr-4 flex flex-col justify-between"
                >
                  <div className="mt-2 mb-4 text-xl">
                    <span
                      id="intro-fit"
                      className="text-green-500 font-bold mr-2"
                    >
                      評價 {detail?.vote_average} 分
                    </span>
                    {detail?.release_date && (
                      <span className="mr-2">
                        {detail?.release_date.substring(0, 4)}
                      </span>
                    )}
                    <span
                      id="intro-age"
                      className="border border-gray-300 mr-2 leading-3 px-2 text-lg"
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
                  <p className="my-2 text-xl font-semibold line-clamp-3">
                    {detail?.overview}
                  </p>
                </div>
                <div id="intro-right" className="w-1/3 text-sm">
                  <div className="my-4">
                    <span className="mr-2 font-semibold text-gray-400">
                      演員:
                    </span>
                    <span className="font-bold">
                      {credits
                        ?.slice(0, 5)
                        .map((actor) => actor.name)
                        .join(", ")}
                    </span>
                  </div>
                  <div className="my-4">
                    <span className="mr-2 font-semibold text-gray-400">
                      類型:
                    </span>
                    <span className="font-bold">
                      {detail?.genres.map((genre) => genre.name).join(", ")}
                    </span>
                    {/* {aboutInfo.segment.map((segment) => (
                  <span className="font-semibold">{segment}</span>
                ))} */}
                  </div>
                  {/* <div className="my-4">
                <span className="mr-2 text-gray-300">節目性質:</span>
                {aboutInfo.type.map((type) => (
                  <span className="font-semibold">{type}</span>
                ))}
              </div> */}
                </div>
              </div>
              {modalDetail?.type === "TV" && (
                <div id="episodes">
                  <EpisodeList seasons={detail?.seasons} id={detail?.id} />
                </div>
              )}
              <SimilarVideo
                videoDetail={modalDetail}
                handleFavorite={handleFavorite}
                favoriteList={favoriteList}
              />
              <div id="about" className="text-white">
                {detail?.title && (
                  <h3 className="text-2xl font-bold mb-4">{`關於《${detail?.title}》`}</h3>
                )}
                {detail?.name && (
                  <h3 className="text-2xl font-bold mb-4">{`關於《${detail?.name}》`}</h3>
                )}
                {/* <span className="mr-2">創作者:</span>
                {aboutInfo.director.map((director) => (
                  <span className="font-semibold">{director}</span>
                ))}
                <br /> */}
                <div className="my-2">
                  <span className="mr-2 font-semibold text-gray-400">
                    演員:
                  </span>
                  <span className="font-bold">
                    {credits
                      ?.slice(0, 5)
                      .map((actor) => actor.name)
                      .join(", ")}
                  </span>
                </div>
                <div className="my-2">
                  <span className="mr-2 font-semibold text-gray-400">
                    類型:
                  </span>
                  <span className="font-bold">
                    {detail?.genres.map((genre) => genre.name).join(", ")}
                  </span>
                  {/* {aboutInfo.segment.map((segment) => (
                  <span className="font-semibold">{segment}</span>
                ))} */}
                </div>
                <div className="my-2">
                  <span className="mr-2 font-semibold text-gray-400">
                    年齡分級:
                  </span>
                  <span className="border mr-2 px-2 font-bold">
                    {aboutInfo.age}
                  </span>
                  <p className="inline font-bold">適合{aboutInfo.age}歲以上</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
