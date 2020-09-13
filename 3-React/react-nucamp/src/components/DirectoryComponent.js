import React, { useState, Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderDirectoryItem({ campsite }) {
  return (
    <Card>
      <CardImg width="100%" src={campsite.image} alt={campsite.name} />
      <CardImgOverlay>
        <CardTitle>{campsite.name}</CardTitle>
      </CardImgOverlay>
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
