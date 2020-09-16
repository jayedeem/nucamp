import React, { useState, Component } from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({ campsite }) {
  return (
    <Card>
      <Link to={`/directory/${campsite.id}`}>
        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
        <CardImgOverlay>
          <CardTitle>{campsite.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

function Directory({ campsites }) {
  const directory = campsites.map((campsite) => {
    return (
      <div key={campsite.id} className="col-md-5 m-1">
        <RenderDirectoryItem campsite={campsite} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Directory</BreadcrumbItem>
          </Breadcrumb>
          <h2>Directory</h2>
          <hr />
        </div>
      </div>
      <div className="row">{directory}</div>
    </div>
  );
}

// class DirectoryComponent extends Component {
//   oncampSiteSelect(campsite) {
//     this.setState({
//       selectedCampSites: campsite,
//     });
//   }

//   render() {
//     const { campsites, onClick } = this.props;

//     const directory = campsites.map((campsite) => {
//       return (
//         <div className="col-md-5 m-1" key={campsite.id}>
//           <Card onClick={() => onClick(campsite.id)}>
//             <CardImg width="100%" src={campsite.image} alt={campsite.name} />
//             <CardImgOverlay>
//               <CardTitle>{campsite.name}</CardTitle>
//             </CardImgOverlay>
//           </Card>
//         </div>
//       );
//     });
//     return (
//       <div className="container">
//         <div className="row">{directory}</div>
//       </div>
//     );
//   }
// }
export default Directory;
