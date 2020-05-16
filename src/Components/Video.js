import "./Video.css";
import React from "react";

const Video = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-single item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default Video;
