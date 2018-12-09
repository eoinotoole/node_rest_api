import React, { Component, createContext } from "react";

const Context = createContext();

export class ContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };

    this.fetchUsers = this.fetchUsers.bind(this);
  }

  fetchUsers() {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => {
        this.setState({ users: data });
      });
  }

  render() {
    const { children } = this.props;

    return (
      <Context.Provider
        value={{
          state: this.state,
          fetchUsers: this.fetchUsers
        }}
      >
        {children}
      </Context.Provider>
    );
  }
}

export const ContextConsumer = Context.Consumer;
