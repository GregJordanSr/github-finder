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

//  async componentDidMount() {
   
//    this.setState({ loading: true });
//     const res = await axios
//       .get(`https://api.github.com/users?client_id=${clientId}&client_secret=${secret}`);

//       this.setState({ users: res.data, loading: false })
//   };


  // Search Github users
  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios
      .get(`https://api.github.com/search/users?q=${text}&client_id=${clientId}&client_secret=${secret}`);
      
      this.setState({ users: res.data.items, loading: false })
  };


  clearUsers = () => this.setState({ users: [], loading: false });
  
  render () {
    return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Search 
          searchUsers={this.searchUsers} 
          clearUsers={this.clearUsers} 
          showClear={this.state.users.length > 0 ? true : false}
        /> 
        <Users 
          loading={this.state.loading} 
          users={this.state.users} 
        />

      </div>
    </div>
  );
  }
}

export default App;
