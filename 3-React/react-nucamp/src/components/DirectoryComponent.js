import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import CampsiteInfo from './CampsiteInfoComponent';

const DirectoryComponent = ({ campsites }) => {
  const [selectedCampsites, setselectedCampsites] = useState(null);
  const onCampsiteSelect = (campsite) => {
    setselectedCampsites(campsite);
  };
  const directory = campsites.map((campsite) => {
    return (
      <div className="col-md-5 m-1" key={campsite.id}>
        <Card onClick={() => onCampsiteSelect(campsite)}>
          <CardImg width="100%" src={campsite.image} alt={campsite.name} />
          <CardImgOverlay>
            <CardTitle>{campsite.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{directory}</div>
      <CampsiteInfo campsite={selectedCampsites} />
    </div>
  );
};

// class DirectoryComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedCampSites: null,
//     };
//   }

//   oncampSiteSelect(campsite) {
//     this.setState({
//       selectedCampSites: campsite,
//     });
//   }

//   render() {
//     const { campsites } = this.props;
//     const { selectedCampSites } = this.state;

//     const directory = campsites.map((campsite) => {
//       return (
//         <div className="col-md-5 m-1" key={campsite.id}>
//           <Card onClick={() => this.oncampSiteSelect(campsite)}>
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
//         <CampsiteInfo campsite={selectedCampSites} />
//       </div>
//     );
//   }
// }
export default DirectoryComponent;
