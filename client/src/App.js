import React, {useReducer, createContext} from 'react'
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import OfficialLogin from "./components/OfficialLogin"
import Signup from "./components/Signup";
import ErrorPage from "./components/Errorpage";
import AddDept from "./components/AddDepartment";
import Dept from "./components/Department";
import Logout from "./components/Logout";
import AboutUs from "./components/AboutUs";
import Complaint from "./components/Complaint";
import Student from './components/Student';
import ViewStatus from "./components/ViewStatus";
import Admin from "./components/Admin";
import { initialState, reducer } from "./reducer/UseReducer";


// we create a contextAPI 
export const UserContext = createContext();

  

const Routing = () => {
  
  return (
    <>
       <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/AboutUs">
        <AboutUs />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/officialLogin">
        <OfficialLogin />
      </Route>

      <Route path="/Admin">
        <Admin />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/Complaint">
        <Complaint />
      </Route>

      <Route path="/Student">
        <Student />
      </Route>
      
      <Route path="/ViewStatus">
        <ViewStatus />
      </Route>
       
      <Route path="/addDepartment">
        <AddDept />
      </Route>

      <Route path="/Department">
        <Dept />
      </Route>
      
      <Route path="/logout">
        <Logout />
      </Route>
      
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
    </>
  )
}

const App = () => {

  //* we use useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
   
      <UserContext.Provider value={{state, dispatch}}>
        
        <Navbar />
        <Routing />

      </UserContext.Provider>
  )
}

export default App

