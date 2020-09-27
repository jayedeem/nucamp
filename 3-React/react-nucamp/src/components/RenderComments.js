import React from 'react';
import ModalComponent from './ModalComponent';
import CommentForm from './CommentForm';
import { Button } from 'reactstrap';

const Comments = ({
  comments,
  addComment,
  campsiteId,
  toggleModal,
  isModalOpen,
}) => {
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
        <ModalComponent
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
          headerText={'Submit Comment'}
        >
          <CommentForm campsiteId={campsiteId} addComment={addComment} />
        </ModalComponent>
      </div>
    );
  }
  return <div></div>;
};

export default Comments;
