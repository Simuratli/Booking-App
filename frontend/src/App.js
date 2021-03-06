import React,{Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'
//components
import MainNavigation from './components/Navigation/MainNavigation'
//pages
import Auth from './pages/Auth.jsx'
// import Home from './pages/Home.jsx'
import BookingPage from './pages/Bookings'
import EventPage from './pages/Events'
//context
import AuthContext from './context/auth-context';

class App extends Component {
  
  state = {
    token: null,
    userId: null
  };

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
  };

  logout = () => {
    this.setState({ token: null, userId: null });
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout
            }}
          >
            <MainNavigation />
            <main className="main-content">
              <Switch>
                {this.state.token && <Redirect from="/" to="/events" exact />}
                {this.state.token && <Redirect from="/auth" to="/events" exact />}
                {!this.state.token && (
                  <Route path="/auth" component={Auth} />
                )}
                <Route path="/events" component={EventPage} />
                {this.state.token && (
                  <Route path="/bookings" component={BookingPage} />
                )}
                {!this.state.token && <Redirect  to="/auth" exact />}
              </Switch>
            </main>
          </AuthContext.Provider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;