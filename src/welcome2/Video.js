
import React from "react";


export default function Video(props) {
  return (
    <div className="video-responsive"
        style={props.style}>
      <iframe
        src="https://www.youtube.com/embed/dl-ECFvtwow"
        width="853"
        height="480"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}