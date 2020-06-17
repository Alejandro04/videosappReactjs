import React from 'react';
import Track from './Track'
import SearchTrack from './SearchTracks'

export default (props) => {
  return (
    <div>
      <h2>Home</h2>
      <SearchTrack />
      <div className="tracksContainer">
        <div className="tracksCards">
          <Track />
          <Track />
          <Track />
          <Track />
          <Track />
          <Track />
        </div>
        <div className="tracksList">
          Tracks List
       </div>
      </div>
    </div>
  );
};

