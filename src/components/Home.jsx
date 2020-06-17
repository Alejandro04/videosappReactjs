import React, { Component } from 'react';
import Track from './Track'
import SearchTrack from './SearchTracks'
import { getTracks } from '../actions/tracksAction'
import { connect } from 'react-redux'


class Home extends Component {

  componentDidMount() {
    this.props.getTracks()
  }

  render() {
    const { tracks } = this.props.tracks
    return (
      <div>
        <h2>Home</h2>
        <SearchTrack />
        <div className="tracksContainer">
          <div className="tracksCards">
            {tracks && tracks.map(({ id, type, name, albumId, previewURL}) => (
              <Track key={id} title={name} albumID={albumId} mp3Url={previewURL} />
            ))}
          </div>
          <div className="tracksList">
            Tracks List
       </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tracks: state.tracks
})

export default connect(mapStateToProps, { getTracks })(Home)