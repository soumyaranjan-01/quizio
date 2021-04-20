import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Signin from './Components/auth/Signin';
import Signup from './Components/auth/Signup';
import Homepage from "./Components/home/Homepage";
import Dashboard from "./Components/layouts/dashboard/Dashboard";
import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './Components/auth/ForgotPassword'
import SetProfile from './Components/layouts/SetProfile';
import NotFound from './Components/layouts/NotFound';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/quizio/' component={Homepage} />
            <Route exact path='/quizio/signin' component={Signin} />
            <Route exact path='/quizio/signup' component={Signup} />
            <PrivateRoute exact path='/quizio/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/quizio/set-profile' component={SetProfile} />
            <Route exact path='/quizio/forgot-pass' component={ForgotPassword} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
