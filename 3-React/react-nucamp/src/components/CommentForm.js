import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';

import { Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      rating: 1,
      comment: '',
      touched: {
        author: false,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBlur = (field) => () => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(values) {
    console.log('Current state is: ' + JSON.stringify(values));
    alert('Current state is: ' + JSON.stringify(values));
  }

  render() {
    return (
      <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
        <div className="form-group">
          <Label htmlFor="rating">Rating</Label>

          <Control.select
            model=".rating"
            id="rating"
            name="rating"
            placeholder="Rating"
            className="form-control"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Control.select>
        </div>

        <div className="form-group">
          <Label htmlFor="yourName">Your Name</Label>

          <Control.text
            model=".author"
            id="author"
            name="author"
            placeholder="Your Name"
            className="form-control"
            validators={{
              required,
              minLength: minLength(2),
              maxLength: maxLength(15),
            }}
          />
          <Errors
            className="text-danger"
            model=".author"
            show="touched"
            component="div"
            messages={{
              required: 'Required',
              minLength: 'Must be at least 2 characters',
              maxLength: 'Must be 15 characters or less',
            }}
          />
        </div>

        <div className="form-group">
          <Label htmlFor="comment">Your Comment</Label>

          <Control.textarea
            model=".comment"
            id="comment"
            name="comment"
            rows="6"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <Button type="submit" color="primary">
            Submit
          </Button>
        </div>
      </LocalForm>
    );
  }
}

export default CommentForm;
