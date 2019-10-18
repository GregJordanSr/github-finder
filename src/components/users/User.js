import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

class User extends Component {

    // Mounting the getUser method when this page is called, using the :login param from the url
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    };

    // Checking for proper proptypes
    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,

    };

  render() {
      // Destructured the user props passed in from App.js on the User component
      const {
          name,
          avatar_url,
          location,
          bio,
          blog,
          html_url,
          followers,
          following,
          public_repos,
          public_gists,
          hireable
      } = this.props.user;
      const { loading } = this.props;

      // Utilizing the Spinner component while the page searches for user props
      if (loading) return <Spinner />

    return( 
           <>
            <Link to='/' className="btn btn-light">
                Back to Search
            </Link>

            {/** Rendered a check mark that uses a ternary and the user props from the api to see if a user is hireable */}
            Hireable: {' '}
            {hireable ? <i className="fas fa-check text-success" />:<i className="fas fa-times-circle text-danger" />}
            <div className="card grid-2">
                <div className="all-center">
                    <img 
                        src={avatar_url}
                        className="round-img"
                        alt=""
                        style={{ width: '150px'}}
                    />
                </div>
            </div>   
           </>
  )}
}

export default User;
