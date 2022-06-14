
import React from "react";
import ReactPlayer from "react-player";


export default function Video(props) {
  return (
    <div className="video-responsive"
        style={props.style}>
      <iframe
        src="https://www.youtube.com/embed/dl-ECFvtwow"
        width="560"
        height="315"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />

      <ReactPlayer controls url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />


    </div>
  );
}