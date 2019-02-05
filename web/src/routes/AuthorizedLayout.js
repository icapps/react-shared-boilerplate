import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from '../scenes';
import { Navbar } from '../components';

const AuthorizedLayout = (props) => {
  return (
    <div className='auth-layout'>
      <Navbar username={props.username} />
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/extra-routes' component={Jokes} /> */}

        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default connect((state) => ({ username: 'ESS' }))(AuthorizedLayout);
