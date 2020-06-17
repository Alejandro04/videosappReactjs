import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { getImage } from '../actions/imagesAction'
import { connect } from 'react-redux'

class TrackDetail extends Component {

    componentDidMount() {

        if (this.props.location.data) {
            this.props.getImage(this.props.location.data.albumID)
        } else {
            this.props.history.push(`/`)
        }
    }

    render() {

        let title = ""
        if(this.props.location.data == undefined){
            this.props.history.push(`/`)
        }else{
            title = this.props.location.data.title
        }

        return (
            <div className="trackCard">
                <Card>
                    <CardImg top width="100%" src="" alt="Card image cap" />
                    <CardBody>
                        <CardTitle> {title} </CardTitle>
                        <Button>Hear</Button>
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