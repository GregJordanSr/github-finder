import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
const secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

class App extends Component{
  state = {
    users: [],
    loading: false
  }


  // Search Github users
  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios
      .get(`https://api.github.com/search/users?q=${text}&client_id=${clientId}&client_secret=${secret}`);
      
      this.setState({ users: res.data.items, loading: false })
  };


  clearUsers = () => this.setState({ users: [], loading: false });
  
  render () {
    const { users, loading } = this.state;
    const { searchUsers, clearUsers } = this;
    return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Search 
          searchUsers={searchUsers} 
          clearUsers={clearUsers} 
          showClear={users.length > 0 ? true : false}
        /> 
        <Users 
          loading={loading} 
          users={users} 
        />

      </div>
    </div>
  );
  }
}

export default App;
