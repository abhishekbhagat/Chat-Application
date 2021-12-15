import { Button } from "@material-ui/core"
import styled from "styled-components";
import { db } from "../config";
import { addDoc, collection,serverTimestamp,setDoc } from "@firebase/firestore";
import { useContext, useState } from "react";
import { AppContext } from "../App";
const ChatInput = ({channelId ,channelName,chatRef}) =>{
    const [msg, setMsg] =useState("");
    const {state} = useContext(AppContext);
    const {user} =state;
    const sendMessage = (event) =>{
      event.preventDefault();
      if(!channelId)
        return false;
      console.log(msg);
      const collectionRef = addDoc(collection(db,"rooms",channelId,"message"),{
        user: user.displayName,
        message:msg,
        timeStamp: serverTimestamp(),
        userImage:user.photoURL
      });
       chatRef?.current?.scrollIntoView({
        behaviour:"smooth"
      })
      setMsg("")
    }

    return(
        <ChatInputContainer>
            <form>
                <input  value = {msg} onChange={(event)=> setMsg(event.target.value)} placeholder = {`Message ${channelName}`}></input>
                <Button hidden type = "submit" onClick = {sendMessage}> SEND </Button>
            </form>
        </ChatInputContainer>
    )
}
export default ChatInput;
const ChatInputContainer = styled.div`
   border-radius: 20px;
   > form{
       position: relative;
       display:flex;
       justify-content: center; 
   }
   > form > input{
       position:fixed; // to make the input field to last 
       bottom: 30px;
       width: 60%;
       border: 1px solid gray;
       border-radius: 3px;
       padding: 10px;
       outline: none;
       margin-left:200px;
   }
   >form >Button {
       display: none;
   }
`;