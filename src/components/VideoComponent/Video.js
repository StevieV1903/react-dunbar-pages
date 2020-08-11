import React from 'react';
import ReactPlayer from 'react-player';
import './Video.css'


const Video = ({ url }) => {
    
  return (
      <div className="video-container">
      <h3 className="video-text">
          WATCH: Danny MacAskill stunt-biking in and around the turquoise waters of Dunbar Harbour...
        </h3>
      <div className="player-wrapper">
        <div className="react-player">
        <ReactPlayer
          url={ url }
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
