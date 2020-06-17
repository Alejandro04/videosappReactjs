import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom'
import slug from 'slug'

class Track extends Component {

  render() {

    let slugTitle = "undefined"
    if (this.props.title) {
      slugTitle = slug(this.props.title)
    }

    return (
      <div className="trackCard">
        <Card>
          <CardImg top width="100%" src="http://localhost:3000/image.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle> {this.props.title} </CardTitle>
            <Link
              to={{
                pathname: "/tracks/play/" + `${slugTitle}`,
                data: this.props // your data array of objects
              }}
            >
              <Button>Hear</Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    )
  }

}

export default Track