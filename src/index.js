import React from 'react';
import ReactDOM from 'react-dom';
import Customers from "./Customers";
import Login from "./Login";
import Rentals from "./Rentals";
import App from "./App";
import Navbar from "./Navbar";
import MainPage from './MainPage';
import User from './User';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// ReactDOM.render(
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route path="/customers">
//           <Customers />
//         </Route>

//         <Route path="/login">
//           <Login />
//         </Route>

//         <Route path="/rentals">
//           <Rentals />
//         </Route>

//         <Route path="/">
//           <App />
//         </Route>

//       </Switch>
//     </Router>,
//   document.getElementById('root')
// );


// ReactDOM.render(<MainPage />, document.querySelector("#root"));

ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/user/:id">
          <User />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>,
  
    document.querySelector("#root")
  );