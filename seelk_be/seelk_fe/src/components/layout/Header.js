import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/Auth';

export class Header extends Component {
    static propTypes = {
      auth: PropTypes.object.isRequired,
      logout: PropTypes.func.isRequired
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a onClick={this.props.logout} className="nav-link">Logout</a>
            </li>
          </ul>
        );

        // const guestLinks = (
        //   <ul className="navbar-nav mr-auto">
        //     <li className="nav-item">
        //       <Link to="/register" className="nav-link">Register</Link>
        //     </li>
        //     <li className="nav-item">
        //       <Link to="/login" className="nav-link">Login</Link>
        //     </li>
        //   </ul>
        // );

        return (
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" href="#">Seelk Hacking Game</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse float-right" id="navbarColor02">
                { isAuthenticated ? authLinks : "" }
              </div>
            </div>
          </nav>
        )
    }
}

const mapStateToProps = state => ({
  auth: state.Auth
});

export default connect(mapStateToProps, { logout })(Header);