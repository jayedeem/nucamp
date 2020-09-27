import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from 'reactstrap';
import ModalComponent from './ModalComponent';
import CommentForm from './CommentForm';

const CampsiteInfoComponent = ({ campsite, comments }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const RenderComments = (comments) => {
    if (comments) {
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          {comments.map((comment) => (
            <div key={comment.id}>
              <p>
                {comment.text} <br />
                -- {comment.author},{' '}
                {new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit',
                }).format(new Date(Date.parse(comment.date)))}
              </p>
            </div>
          ))}
          <Button outline onClick={toggleModal}>
            <i className="fa fa-pencil fa-lg" />
            Submit Comment
          </Button>
        </div>
      );
    }
    return <div></div>;
  };

  const RenderCampsite = (campsite) => {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardBody>
            {/* <CardImg top src={campsite.image} alt={campsite.name} /> */}
            {/* <CardTitle>{campsite.name}</CardTitle> */}
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  };

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
        {RenderCampsite(campsite)}
        {RenderComments(comments)}
      </div>
      <ModalComponent
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        headerText={'Submit Comment'}
      >
        <CommentForm />
      </ModalComponent>
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
