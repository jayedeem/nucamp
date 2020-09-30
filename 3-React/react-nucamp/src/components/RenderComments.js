import React from 'react';
import ModalComponent from './ModalComponent';
import CommentForm from './CommentForm';
import { Button } from 'reactstrap';
import { Fade, Stagger } from 'react-animation-components';
const Comments = ({
  comments,
  postComment,
  campsiteId,
  toggleModal,
  isModalOpen,
}) => {
  if (comments) {
    return (
      <div className="col-md-5 m-1">
        <h4>Comments</h4>
        <Stagger in>
          {comments.map((comment) => (
            <Fade key={comment.id}>
              <div>
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
            </Fade>
          ))}
          <Button outline onClick={toggleModal}>
            <i className="fa fa-pencil fa-lg" />
            Submit Comment
          </Button>
          <ModalComponent
            isModalOpen={isModalOpen}
            toggleModal={toggleModal}
            headerText={'Submit Comment'}
          >
            <CommentForm campsiteId={campsiteId} postComment={postComment} />
          </ModalComponent>
        </Stagger>
      </div>
    );
  }
  return <div></div>;
};

export default Comments;
