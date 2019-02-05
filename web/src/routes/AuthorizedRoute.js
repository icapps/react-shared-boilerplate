import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class AuthorizedRoute extends Component {
  componentWillMount() {
    // getLoggedUser();
  }

  render() {
    const { component: Component, pending, logged, ...otherProps } = this.props;
    return (
      <Route
        {...otherProps}
        render={props => {
          if (pending) return <div>Loading...</div>;
          return logged ? <Component {...this.props} /> : <Redirect to='/auth/login' />;
        }}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  state: state,
  pending: false,
  logged: state.getIn(['login', 'isLoggedIn']),
});

export default connect(mapStateToProps)(AuthorizedRoute);
