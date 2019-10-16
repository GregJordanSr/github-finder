import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
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
      <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Switch>

            {/* Using BrowserRouter from react-router-dom*/}
            <Route exact path='/' render={props => (
              <> 
                <Search 
                  searchUsers={searchUsers} 
                  clearUsers={clearUsers} 
                  showClear={users.length > 0 ? true : false}
                  setAlert={setAlert}
                /> 
                <Users loading={loading} users={users}/>
              </>
            )}/>
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />  
          </Switch>
        </div>
      </div>
      </Router>
  );
  }
}

export default App;
