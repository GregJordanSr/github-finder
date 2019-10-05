import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
   state = {
        users: [
        {
            id: '1',
            login: 'GregJordanSr',
            avatar_url: 'https://avatars2.githubusercontent.com/u/40050726?s=400&u=7f06ade07fd711996d3bc9766be415cbd0a0c0d0&v=4',
            html_url: 'https://github.com/GregJordanSr'
        },
        {
            id: '2',
            login: 'defunkt',
            avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
            html_url: 'https://github.com/defunkt'
        },
        {
            id: '3',
            login: 'pjhyett',
            avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
            html_url: 'https://github.com/pjhyett'
        }

    ]
};

  render() {
      
    return (
      <div>
        {this.state.users.map(user => (
            <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

export default Users;
