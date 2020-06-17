import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Track = (props) => {
  console.log(props)
  return (
    <div className="trackCard">
      <Card>
        <CardImg top width="100%" src="image.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle> {props.title} </CardTitle>
          <Button>Hear</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Track;