import React, { createContext, useContext, useReducer, useState } from 'react';
import './App.css';
import {apiKey} from './config'
import {BrowserRouter as Router,Route,Link, BrowserRouter} from 'react-router-dom'
import {Routes} from "react-router-dom";
import Header from './component/Header'
import Sidebar from './component/Sidebar';
import styled from 'styled-components';
import Chat from './component/Chat';
import Login from './component/Login';
import { initialState, reducer } from './reducer/reducer';
export const AppContext = createContext();
const Routing = () =>{
  const {state,dispatch} = useContext(AppContext);
  const {user} = state
  return(
     <>
     {
      !user ? (
        <Login></Login>
      )
     :(
       <>
       <Header/>
       <AppBody>
       <Sidebar/>
         <Routes>
           <Route path="/" element ={<Chat/>}>
           </Route>
         </Routes>
      </AppBody>
       </> 
      )
     }
     </>
  )
  
}
function App() {
  const [state, dispatch ]= useReducer(reducer,initialState);
  return (
  <AppContext.Provider value = {{state,dispatch}}>
  <BrowserRouter>
   <Routing>
   </Routing>
   </BrowserRouter>
  </AppContext.Provider>
  );
}
const AppBody =styled.div`
   display:flex;
   height: 100vh;
`;

export default App;
