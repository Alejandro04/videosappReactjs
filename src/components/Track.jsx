import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom'
import slug from 'slug'
import dotenv from 'dotenv'

const Track = (props) => {
  dotenv.config()

  let slugTitle = "undefined"
  if (props.title) {
    slugTitle = slug(props.title)
  }

  return (
    <div className="trackCard">
      <Card>
        <CardImg top width="100%" src="http://localhost:3000/image.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle> {props.title} </CardTitle>
          <Link to={'/tracks/play/' + slugTitle} key={props.id}>
            <Button>Hear</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default Track;