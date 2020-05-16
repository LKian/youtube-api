import React from "react";
import Video from "./Video";

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <Video video={video} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
