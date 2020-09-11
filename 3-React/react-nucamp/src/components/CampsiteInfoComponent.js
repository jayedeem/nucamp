import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

const CampsiteInfoComponent = ({ campsite }) => {
  const renderComments = (comments) => {
    if (comments) {
      console.log(comments);
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          {comments.map((comment) => (
            <p key={comment.id}>
              {comment.text} <br />
              -- {comment.author},{' '}
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
              }).format(new Date(Date.parse(comment.date)))}
            </p>
          ))}
        </div>
      );
    }
    return <div></div>;
  };

  const renderCampsite = (campsite) => {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardBody>
            <CardImg top src={campsite.image} alt={campsite.name} />
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  };

  return (
    <div>
      {campsite ? (
        <div className="row">
          {renderCampsite(campsite)}
          {renderComments(campsite.comments)}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

// class CampsiteInfoComponent extends Component {
//   renderComments(comments) {
//     if (comments) {
//       console.log(comments);
//       return (
//         <div className="col-md-5 m-1">
//           <h4>Comments</h4>
//           {comments.map((comment) => (
//             <p key={comment.id}>
//               {comment.text} <br />
//               -- {comment.author},{' '}
//               {new Intl.DateTimeFormat('en-US', {
//                 year: 'numeric',
//                 month: 'short',
//                 day: '2-digit',
//               }).format(new Date(Date.parse(comment.date)))}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return <div></div>;
//   }

//   renderCampsite(campsite) {
//     return (
//       <div className="col-md-5 m-1">
//         <Card>
//           <CardBody>
//             <CardImg top src={campsite.image} alt={campsite.name} />
//             <CardTitle>{campsite.name}</CardTitle>
//             <CardText>{campsite.description}</CardText>
//           </CardBody>
//         </Card>
//       </div>
//     );
//   }

//   render() {
//     const { campsite } = this.props;
//     return (
//       <div>
//         {this.props.campsite ? (
//           <div className="row">
//             {this.renderCampsite(campsite)}
//             {this.renderComments(campsite.comments)}
//           </div>
//         ) : (
//           <div></div>
//         )}
//       </div>
//     );
//   }
// }

export default CampsiteInfoComponent;
