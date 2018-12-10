import React, { Component } from "react";
import styled from "styled-components";

import { ContextConsumer } from "../Context";
import Dashboard from "./Dashboard";
import Button from "../styledComponents/Button";

const StyledUserProfile = styled.div`
  padding: 4rem;
`;

const UserProfileHoc = ({ match }) => {
  return (
    <ContextConsumer>
      {values => (
        <UserProfile
          currentUser={values.state.currentUser}
          fetchUser={values.fetchUser}
          deleteUser={values.deleteUser}
          profileId={match.params.id}
        />
      )}
    </ContextConsumer>
  );
};

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.profileId);
  }

  componentDidUpdate(prevProps) {
    const id = this.props.profileId;
    const prevId = prevProps.profileId;

    if (id !== prevId) {
      this.props.fetchUser(this.props.profileId);
    }
  }

  render() {
    const { currentUser, deleteUser } = this.props;

    return (
      <Dashboard>
        <StyledUserProfile>
          User profile for:{" "}
          <strong>{currentUser && currentUser.username}</strong>
          <br />
          User ID: <strong>{currentUser && currentUser.id}</strong>
          <Button
            style={{ marginTop: "2rem" }}
            onClick={() => deleteUser(currentUser.id)}
          >
            Delete user
          </Button>
        </StyledUserProfile>
      </Dashboard>
    );
  }
}

export default UserProfileHoc;
