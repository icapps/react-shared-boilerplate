import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ForgotPasswordView extends Component {
  render() {
    return (
      <div className="forgot-password-view">
        <Link to="/">Request new password</Link>
      </div>
    );
  }
}

export default ForgotPasswordView;
