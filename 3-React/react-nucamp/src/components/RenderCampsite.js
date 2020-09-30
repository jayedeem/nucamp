import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

const Campsite = ({ campsite }) => {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardBody>
          <CardImg top src={baseUrl + campsite.image} alt={campsite.name} />
          <CardTitle>{campsite.name}</CardTitle>
          <CardText>{campsite.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Campsite;
