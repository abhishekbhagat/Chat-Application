import { contains } from "@firebase/util";
import { Button } from "@material-ui/core";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { auth, provider } from "../config";
import { useContext } from "react";
import { AppContext } from "../App";
const Login = ({user}) =>{
    const {state , dispatch} = useContext(AppContext);
    const signIn = (event) =>{
        event.preventDefault();
        signInWithPopup(auth,provider)
        .then((result) =>{
            console.log(result)
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user =result.user;
             dispatch({
                type:"NEW_USER",
                payload:result.user
            })
        }).catch(error => {
           console.log(error);
        })
        
    } 
    return(
      <LoginContainer>
          <LoginInnerContainer>
             <img src = "https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg"></img>
             <h1>Sign in to my Slack application </h1>
            <Button onClick ={signIn}>Sign in with Google</Button>
          </LoginInnerContainer>
      </LoginContainer>
    )
}
export default Login;
const LoginContainer = styled.div`
 background-color: #f8f8f8;
 height: 100vh;
 display:grid;
 place-items: center;

`;
const LoginInnerContainer = styled.div`
  padding: 100px;
 
  text-align:center;  // diff between text-align and align-item
  background-color: white;
  border-radius:10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12) , 0 1px 2px rgba(0,0,0,0.24);
  >img {
    object-fit:contain;
    height: 100px;
    margin-bottom: 40px;
  }
  >button {
      margin-top:50px;
      text-transform: inherit; // use
      background-color:#008000 ;
      color:white;
  }
  
`;