import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Courses from './Components/Courses'
import Aboutus from './Components/Aboutus'
import Home from './Components/Home'
import Products from './Components/Products'
import Login from './Components/Login'
import Register from './Components/Register'
import Details from "./Components/Details";
import Coursesdata from "./Components/Coursesdata";
import Enquiry from "./Components/Enquiry";
import Query from "./Components/Query";

function App() {
  return (
    <div className="App">
    <Router>
    <div className="ml-4 mr-4">
        <nav >
          <ul className="d-flex flex-row bg-primary " >
            <li style={{padding:"20px",listStyle:"none"}}>
              <Link to="/"  style={{textDecoration:"none",color:"white",fontSize:"20px"}} >Home</Link>
            </li>
            <li style={{padding:"20px",listStyle:"none"}}>
              <Link to="/courses" style={{textDecoration:"none" ,color:"white",fontSize:"20px"}}>Courses</Link>
            </li>
            <li style={{padding:"20px",listStyle:"none"}}>
              <Link to="/products" style={{textDecoration:"none" ,color:"white",fontSize:"20px"}}>Products</Link>
            </li>
            <li style={{padding:"20px",listStyle:"none"}}>
              <Link to="/login" style={{textDecoration:"none" ,color:"white",fontSize:"20px"}}>Login</Link>
            </li>
            <li style={{padding:"20px",listStyle:"none"}}>
              <Link to="/register" style={{textDecoration:"none" ,color:"white",fontSize:"20px"}}>Register</Link>
            </li>
            <li style={{padding:"20px",listStyle:"none"}}>
              <Link to="/coursesadd" style={{textDecoration:"none" ,color:"white",fontSize:"20px"}}>CoursesAdd</Link>
            </li>
            <li style={{padding:"20px",listStyle:"none"}}>
              <Link to="/query" style={{textDecoration:"none" ,color:"white",fontSize:"20px"}}>Query</Link>
            </li>
           
            <li style={{padding:"20px",listStyle:"none"}}>
              <Link to="/aboutus" style={{textDecoration:"none" ,color:"white",fontSize:"20px"}}>About</Link>
            </li>
          </ul>
        </nav>
       <Switch>
          <Route path="/aboutus" exact>
            <Aboutus />
          </Route>
          <Route path="/courses" exact>
            <Courses />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Details />
          </Route>
          <Route path="/coursesadd" exact>
            <Coursesdata />
          </Route>
          <Route path="/enquiry/:id" exact >
            <Enquiry />
          </Route>
          <Route path="/query" exact >
            <Query />
          </Route>  
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
