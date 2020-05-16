import "./Video.css";
import React from "react";

const Video = ({ video }) => {
  return (
    <div className="video-single item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default Video;
