import React,{useEffect,useContext} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup'
import Login from "./Pages/Login";
import Create from './Pages/Create'
import view from './Pages/ViewPost'
import {AuthContext, FirebaseContext} from './store/Context'
import Post from "./store/PostContext";
import Home from "./Pages/Home";

function App() {
  const {setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
    
  })
  return (
    <div>
      <Post>

      <BrowserRouter>
        <Routes>
          <Route Component={Home} path='/'></Route>
          <Route Component={Signup} path='/signup'></Route>
          <Route Component={Login} path='/login'></Route>
          <Route Component={Create} path='/create'></Route>
          <Route Component={view} path='/view'></Route>

        </Routes>
      </BrowserRouter>
      </Post>
      
    </div>
  );
}

export default App;
