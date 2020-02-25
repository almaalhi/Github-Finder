import React, { Component } from "react";

class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "mojombo",
        avatar_url: "https://avatars0/githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo"
      },
      {
        id: "2",
        login: "defunkt",
        avatar_url: "https://avatars0/githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo"
      },
      {
        id: "3",
        login: "alex",
        avatar_url: "https://avatars0/githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo"
      }
    ]
  };

  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <div key={user.id}>{user.login}</div>
        ))}
      </div>
    );
  }
}

export default Users;
