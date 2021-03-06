import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import Login from './Login';
import Home from './Home';

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';
import ChangePassword from "./ChangePassword";
import Register from "./Register";
import Menu from "./Menu";
import Profile from './profile';
import NoGuestRoute from "./Utils/NoGuestRoute";
import Play from "./Play";
import Game from "./Game";
import CrearSala from "./CrearSala";
import UnirseSala from "./UnirseSala";
import Sala from "./Sala";
import Tienda from "./tienda/Tienda"

function App(props) {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    /*axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      //removeUserSession();
      setAuthLoading(false);
    });*/
    setAuthLoading(false);
  }, []);

  if (authLoading && getToken()) {
    return <div className="content" >Checking Authentication...</div>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route exact path="/ChangePassword" component={ChangePassword} />
              <Route path="/register" component={Register}/>
              <PrivateRoute path="/Menu" component={Menu}/>
              <PrivateRoute path="/Play" component={Play}/>
              <PrivateRoute path="/Game" component={Game}/>
              <PrivateRoute path="/CrearSala" component={CrearSala}/>
              <PrivateRoute path="/UnirseSala" component={UnirseSala}/>
              <PrivateRoute path="/Sala" component={Sala}/>
              <NoGuestRoute path="/Profile" component={Profile}/>
              <NoGuestRoute path="/Tienda" component={Tienda}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
/*

*/
export default App;
