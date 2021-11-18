import React, { useEffect, useState } from "react";
import ControlButton from "../../components/ControlButton";

const Canvas = () => {
  const [latest, setLatest] = useState();
  const apiKey = "95ce9eef8636a5f2ca00baa49994b8c6";

  useEffect(() => {
    const fetchLatest = async () => {
      const response =
        await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=zh-tw&page=1
      `);
      const latestMovie = await response.json();

      setLatest(latestMovie.results[0]);
    };

    fetchLatest();
  }, []);

  return (
    <div className="relative w-full -mt-16 bg-gray-900">
      <div
        id="image-gradient"
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 0%, transparent 60%, black 90%)",
        }}
      ></div>
      {latest && (
        <img
          src={`https://image.tmdb.org/t/p/original` + latest?.poster_path}
          alt=""
          className="w-full object-cover"
          style={{ height: document.documentElement.clientHeight }}
        ></img>
      )}
      <div className="absolute w-full flex flex-col pl-20 bottom-64">
        <h3 className="mb-10 text-white text-7xl font-bold">{latest?.title}</h3>
        <div className="w-1/3 flex flex-row gap-4">
          <ControlButton icon="play2" type="text" size="16">
            播放
          </ControlButton>
          <ControlButton icon="info" type="text" dark size="14">
            更多資訊
          </ControlButton>
        </div>
        <div className="flex flex-row gap-4 self-end">
          <ControlButton
            icon="volumeOff"
            type="circle"
            size="12"
          ></ControlButton>
          <span className="w-32 flex items-center border-l-2 border-white pl-4 bg-black text-xl text-white bg-opacity-30">
            {latest?.adult ? "Adult" : "All age"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
