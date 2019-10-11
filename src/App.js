import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert'
import axios from 'axios';
import './App.css';

const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
const secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

class App extends Component{
  state = {
    users: [],
    loading: false,
    alert: null
  }

  // Search Github users
  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios
      .get(`https://api.github.com/search/users?q=${text}&client_id=${clientId}&client_secret=${secret}`);
      
      this.setState({ users: res.data.items, loading: false })
  };

  // passed up props from Search component to clear users when userItems populate the screen
  clearUsers = () => this.setState({ users: [], loading: false });

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: {msg, type} });

    setTimeout(() => this.setState({ alert: null }), 4000)
  }
  
  render () {
    const { users, loading, alert} = this.state;
    const { searchUsers, clearUsers, setAlert,  } = this;
    
    return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Alert alert={alert} />
        <Search 
          searchUsers={searchUsers} 
          clearUsers={clearUsers} 
          showClear={users.length > 0 ? true : false}
          setAlert={setAlert}
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
