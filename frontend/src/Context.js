import React, { Component, createContext } from "react";
import { withRouter } from "react-router-dom";

const Context = createContext();

class ContextProviderUnrouted extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      currentUser: {}
    };

    this.fetchUsers = this.fetchUsers.bind(this);
    this.fetchUser = this.fetchUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  fetchUsers() {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => {
        this.setState({ users: data });
      });
  }

  fetchUser(id) {
    fetch(`http://localhost:3000/users/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ currentUser: data[0] });
      })
      .catch(err => {
        throw Error(err);
      });
  }

  deleteUser(id) {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE"
    })
      .then(res => res.status)
      .then(status => {
        status === 200
          ? this.fetchUsers()
          : Error(`Error, responded with status ${status}`);
      })
      .then(() => {
        console.log(this.props.history.push("/users"));
      })
      .catch(err => {
        throw Error(err);
      });
  }

  addUser(username) {
    const bodyObj = { username };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyObj)
    })
      .then(res => {
        res.status === 200
          ? this.fetchUsers()
          : Error(`Error, responded with status ${status}`);
      })
      .catch(err => {
        throw Error(err);
      });
  }

  render() {
    const { children } = this.props;

    return (
      <Context.Provider
        value={{
          state: this.state,
          fetchUsers: this.fetchUsers,
          fetchUser: this.fetchUser,
          deleteUser: this.deleteUser,
          addUser: this.addUser
        }}
      >
        {children}
      </Context.Provider>
    );
  }
}

const ContextConsumer = Context.Consumer;
const ContextProvider = withRouter(ContextProviderUnrouted);

export { ContextProvider, ContextConsumer };
