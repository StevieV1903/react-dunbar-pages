import React from 'react';
import ReactPlayer from 'react-player';
import './Video.css'


function Video() {
    return (
      <div className="video-container">
        <h3 className="video-text">
          WATCH: Danny MacAskill stunt-biking in and around the turquoise waters of Dunbar Harbour...
        </h3>
        <div className="video-player">
          <wrapper className="video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=kWkFYZnbPSY"
        />
        </wrapper>
        </div>
      </div>
    )
  }
  
  export default Video
