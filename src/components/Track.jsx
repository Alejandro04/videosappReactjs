import React, { Component } from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom'
import slug from 'slug'
import ReactAudioPlayer from 'react-audio-player';

class Track extends Component {

  render() {

    let slugTitle = "undefined"
    if (this.props.title) {
      slugTitle = slug(this.props.title)
    }

    return (
      <div className="trackCard">

        <Card>
          <CardImg top width="100%" src={`https://api.napster.com//imageserver/v2/albums/${this.props.albumID}/images/170x170.jpg`} alt="imageAlbum" />
          <CardBody>
            <CardTitle> {this.props.title} </CardTitle>
            <ReactAudioPlayer className="player"
              src={this.props.mp3Url}
              controls
            />
            <Link
              to={{
                pathname: "/tracks/play/" + `${slugTitle}`,
                data: this.props
              }}
            >
              <Button>See Details</Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    )
  }

}

export default Track