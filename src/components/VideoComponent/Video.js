import React from 'react';
import ReactPlayer from 'react-player';
import './Video.css'


function Video() {
    return (
      <div className="video-container">
      <h3 className="video-text">
          WATCH: Danny MacAskill stunt-biking in and around the turquoise waters of Dunbar Harbour...
        </h3>
      <div className="player-wrapper">
        <div className="react-player">
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=kWkFYZnbPSY"}
          width='100%'
          height='100%'
          controls={true}
        />
        </div>
      </div>
      </div>
    )
  }
  
  export default Video
