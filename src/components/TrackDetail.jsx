import React, { Component } from 'react';
import {
    Card, CardImg, CardBody, CardTitle
} from 'reactstrap';
import { getImage } from '../actions/imagesAction'
import { connect } from 'react-redux'
import ReactAudioPlayer from 'react-audio-player';

class TrackDetail extends Component {

    componentDidMount() {
        console.log(this.props)
        if (this.props.location.data) {
            this.props.getImage(this.props.location.data.albumID)
        } else {
            this.props.history.push(`/`)
        }
    }

    render() {

        let title = ""
        let mp3Url = ""
        if (this.props.location.data === undefined) {
            this.props.history.push(`/`)
        } else {
            title = this.props.location.data.title
            mp3Url = this.props.location.data.mp3Url
        }

        return (
            <div className="trackCard">
                <Card>
                    <CardImg top width="100%" src={this.props.image.image} alt="Card image cap" />
                    <CardBody>
                        <CardTitle> {title} </CardTitle>
                        <ReactAudioPlayer className="player"
                            src={mp3Url}
                            controls
                        />
                    </CardBody>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    image: state.image
})

export default connect(mapStateToProps, { getImage })(TrackDetail)