import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { AccessTime } from "@material-ui/icons";
import { Search } from "@material-ui/icons";
import { HelpOutline } from "@material-ui/icons";
import React, { useContext } from "react";
import { AppContext } from "../App";
import { auth } from "../config";
import { signOut } from "firebase/auth";
import { setUseProxies } from "@reduxjs/toolkit/node_modules/immer";
const Header = () =>{
   const {state , dispatch} = useContext(AppContext)
   const {user} =state;
   const logOut = () =>{
     console.log('logout');
      dispatch({
          type:"LOGOUT"
      })
   }
   return(
       <HeaderContainer>
        {/*header left*/}
         <HeaderLeft>
             <HeaderAvatar 
               alt = {user?.displayName}
               src = {user?.photoURL}/>
            <AccessTime>
            </AccessTime>
         </HeaderLeft>
        {/* header search */}
        <HeaderSearch>
          <input type ="text " placeholder =" please enter value"></input>
          <Search>
          </Search>
        </HeaderSearch>
        <HeaderRight>
            <h3 onClick = {logOut}> Logout</h3>
         <HelpOutline>
         </HelpOutline>
        </HeaderRight>
        
       </HeaderContainer>    
   )
}
const HeaderContainer =styled.div`
    display:flex;
    width:100%;
    position:fixed;
    color:red;
    background-color: #3F0F3F;
    align-items:center:
    color:white;
    justify-content:space-between;
`;
const HeaderLeft = styled.div`
   flex: 0.3;
   display: flex;
   align-items:center;
   > .MuiSvgIcon-root{
       margin-left:auto;
       margin-righ:20px;
   }
   color:white;
`; 
const HeaderAvatar = styled(Avatar)`
   cursor:pointer;
   margin-left:20px;
   :hover{
       opacity: 0.7;
   }
`;
const HeaderSearch = styled.div`
  flex:0.4;
  opacity: 1;
  background-color:#421f44;
  border-radius: 6px;
  text-align:center;
  align-items:center;
  display: flex;
  padding: 0 50px;
  margin-left:20px;
  color:gray;
  > input{
      background-color:transparent;
      border: none;
      text-align: center;
      color: white;
      margin-right:10px;
  }
`;
const HeaderRight =styled.div`
   display:flex;
   flex:0.3;
   color:white;
   align-items:center;
   > .MuiSvgIcon-root{
       margin-left:auto;
       margin-right:20px;
   }
   >h3 {
       font-size:13px;
       margin-left:80px;
       cursor:pointer;
       :hover {
           color:gray;
       }
   }
`;
export default Header;