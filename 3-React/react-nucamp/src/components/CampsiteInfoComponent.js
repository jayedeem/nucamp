import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import Comments from './RenderComments';
import Campsite from './RenderCampsite';

const CampsiteInfoComponent = ({ campsite, comments, addComment }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  console.log(campsite);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/directory">Directory</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{campsite.name}</BreadcrumbItem>
          </Breadcrumb>
          <h2>{campsite.name}</h2>
          <hr />
        </div>
      </div>
      <div className="row">
        <Campsite campsite={campsite} />
        <Comments
          comments={comments}
          addComment={addComment}
          campsite={campsite}
          campsiteId={campsite.id}
          toggleModal={toggleModal}
          isModalOpen={isModalOpen}
        />
      </div>
    </div>
  );
};

// class CampsiteInfoComponent extends Component {
//   renderComments(comments) {
//     if (comments) {
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
//     const { renderCampsite, renderComments } = this;
//     return (
//       <div>
//         {campsite ? (
//           <div className="container">
//             <div className="row">
//               {renderCampsite(campsite)}
//               {renderComments(campsite.comments)}
//             </div>
//           </div>
//         ) : (
//           <div></div>
//         )}
//       </div>
//     );
//   }
// }

export default CampsiteInfoComponent;
