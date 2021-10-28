import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from './Components/Home/Home/Home';
import Book from './Components/Book/Book/Book';
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';

import PrivateRoute from './Components/Login/PrivateRoute';
import LogIn from './Components/Login/LogIn.jsx'

export const UserContext = createContext();

function App() {
  const [ loggedInUser, setLoggedInUser] = useState({
   
  })
  console.log(loggedInUser);
  return (
    <UserContext .Provider  value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/home">
          <Home />
        </Route>
        <PrivateRoute  path="/book/:id">
          <Book />
        </PrivateRoute>
        <PrivateRoute  path="/dashboard">
         <DashBoard />
        </PrivateRoute>
        <Route  path="/login">
        <LogIn />
        </Route>
      
          </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
