import React, { useRef } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

export default function FormComponent({ toggleModal }) {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const checkbox = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    alert(
      `Username: ${usernameRef.current.value} Password: ${passwordRef.current.value} Remember ${checkbox.current.checked}`
    );

    toggleModal();
  };
  return (
    <Form onSubmit={handleLogin}>
      <FormGroup>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          name="username"
          innerRef={usernameRef}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          innerRef={passwordRef}
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" name="remember" innerRef={checkbox} />
          Remember me
        </Label>
      </FormGroup>
      <Button type="submit" value="submit" color="primary">
        Login
      </Button>
    </Form>
  );
}
