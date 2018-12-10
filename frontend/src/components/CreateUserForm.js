import React, { Component } from "react";
import styled from "styled-components";

import Button from "../styledComponents/Button";

const StyledCreateUserForm = styled.form``;

class CreateUserForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { username } = this.refs;

    if (username.value.length > 0) {
      this.props.addUser(username.value);
    }
  }

  render() {
    const { addUser } = this.props;

    return (
      <StyledCreateUserForm>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" ref="username" />
        <Button style={{ marginTop: "2rem" }} onClick={this.handleSubmit}>
          Create user
        </Button>
      </StyledCreateUserForm>
    );
  }
}

export default CreateUserForm;
