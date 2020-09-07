import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';

export default class DirectoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCampSites: null,
    };
  }
  oncampSiteSelect(campsite) {
    this.setState({
      selectedCampSites: campsite,
    });
  }
  renderSelectedCampsite(campsite) {
    if (campsite) {
      return (
        <Card>
          <CardBody>
            <CardImg top src={campsite.image} alt={campsite.name} />
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    return <div />;
  }

  render() {
    const directory = this.props.campsites.map((campsite) => {
      return (
        <div className="col-md-5 m-1" key={campsite.id}>
          <Card onClick={() => this.oncampSiteSelect(campsite)}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
              <CardTitle>{campsite.name}</CardTitle>
              <CardText>{campsite.description}</CardText>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{directory}</div>
        <div className="row">
          <div className="col-md-5 m-1">
            {this.renderSelectedCampsite(this.state.selectedCampSites)}
          </div>
        </div>
      </div>
    );
  }
}
