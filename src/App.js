import React from 'react';
import './App.css';
import Counter from "./components/counter";
import {Route,Switch,Link,BrowserRouter as Router} from 'react-router-dom';
import Gallery from "./components/Gallery";
import About from "./components/About";
import HitDetails from "./components/HitDetails";
//import About from "./components/About";
function App() {
  return (
   <Router>
       <nav className="navbar navbar-expand navbar-brand m-2">
           <ul className="navbar-nav">
               <li>
                   <Link className="nav-link" to="/home">Home</Link>
               </li>
               <li>
                   <Link className="nav-link" to="/counter">Counter</Link>
               </li>
               <li>
                   <Link className="nav-link" to="/about">About</Link>
               </li>
               <li>
                   <Link className="nav-link" to="/gallery">Gallery</Link>
               </li>
           </ul>
       </nav>
       <div className="m-4">
           <Switch>
               <Route path="/home" ></Route>
               <Route path="/counter" component={Counter}></Route>
               <Route path="/about" component={About}></Route>
               <Route path="/gallery" component={Gallery}></Route>
               <Route path="/hitDetails/:id" component={HitDetails}></Route>
           </Switch>
       </div>
   </Router>
  );
}

export default App;
