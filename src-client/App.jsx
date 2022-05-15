import React from 'react';
import {
  Route, BrowserRouter as Router, Redirect, Switch
} from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactNotification from 'react-notifications-component';

import BooksContainer from './components/books/books-container';
import ClassesContainer from './components/classes/classes-container';
import Chapters from './components/chapters/chapters';
import ResultsTable from './components/results/ResultsTable';
import Leaderboard from './components/leaderboard/table';
import ContentContainer from './components/resources/Layout';
import AdminDashboard from './components/admin/dashboard';
import UserProfile from './components/user/UserProfile';

import SignIn from './components/auth/sign-in';
import SignUp from './components/auth/sign-up';
import Header from './components/header';

import 'react-notifications-component/dist/theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './css/all.min.css';

import { createStore } from './store';
import PrivateRoute from './routes/private-route';
import UnauthorizedRoute from './routes/unauthorized-route';
import PublicRoute from './routes/public-route';
import AdminRoute from './routes/admin-route';

import API from './api/api';

// Define the main app
const App = ({ store }) => {
  const user = store.get('user');
  if (!user) {
    API.get('auth/me').then(({ data }) => {
      store.set('user', data);
    }).catch(() => {
      store.set('user', {});
    });
    return null;
  }

  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <div className="App">
        <Route
          render={(props) => (<Header {...props} store={store} />)}
        />

        <div id="body-content">
          <ReactNotification />
          <Switch>

            <PublicRoute exact path="/books" component={BooksContainer} />
            <PublicRoute exact path="/bookId=:bookId/" component={ContentContainer} />
            <PublicRoute exact path="/bookId=:bookId/chapters" component={Chapters} />
            <PublicRoute exact path="/bookId=:bookId/chapterId=:chapterId/resources" component={ContentContainer} />
            <PrivateRoute exact path="/bookId=:bookId/results" component={ResultsTable} />

            {(user && user.role && user.role !== 'admin')
              && (<PrivateRoute exact path="/classes" component={ClassesContainer} />)}

            {(user && user.role && user.role !== 'admin')
              && (<PrivateRoute exact path="/classId=:classId/" component={ContentContainer} />)}

            {(user && user.role && user.role !== 'admin')
              && (<PrivateRoute exact path="/classId=:classId/results" component={ResultsTable} />)}

            {(user && user.role && user.role !== 'admin')
              && (<PrivateRoute exact path="/classId=:classId/leaderboard" component={Leaderboard} />)}

            {(user && user.role && user.role !== 'admin')
              && (<PrivateRoute exact path="/classId=:classId/chapters" component={Chapters} />)}

            {(user && user.role && user.role !== 'admin')
              && (<PrivateRoute exact path="/classId=:classId/chapterId=:chapterId/resources" component={ContentContainer} />)}

            <PrivateRoute exact path="/profile" component={UserProfile} />

            <AdminRoute exact path="/dashboard" component={AdminDashboard} />

            {(user && user.role && user.role !== 'admin')
              && (<Route exact path="" render={() => (<Redirect to="/classes" />)} />)}

            {user && user.role && user.role === 'admin'
              && (<Route exact path="/" render={() => (<Redirect to="/dashboard" />)} />)}

            {(!user || !user.id)
              && (<Route exact path="/" render={() => (<Redirect to="/signin" />)} />)}

            <UnauthorizedRoute path="/signin" component={SignIn} />
            <UnauthorizedRoute path="/signup" component={SignUp} />

            <Redirect to="/" />

          </Switch>

        </div>
      </div>
    </Router>
  );
};

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired
};

export default createStore(App);
