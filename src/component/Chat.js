import styled from "styled-components";
import  StarBorderOutlinedIcon  from "@material-ui/icons/StarBorderOutlined";
import { InfoOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import ChatInput from './ChatInput'
import { collection, doc, getDoc, getDocs, QuerySnapshot,query, orderBy, Timestamp ,onSnapshot} from "@firebase/firestore";
import { db } from "../config";
import { useEffect, useRef, useState } from "react";
import Message from "./Message";
const Chat = () =>{
  const chatRef = useRef(null);
  const roomId= useSelector(selectRoomId);
  const [roomName , setRoomName] = useState("")
  const [roomMessage,setRoomMessage] =useState([])
  useEffect(()=>{
    if(roomId){
      getDoc(doc(db,"rooms",roomId)).then( document =>{
         setRoomName(document.data().name);
     }) 
   const q = query(collection(db,"rooms",roomId,"message"),orderBy("timeStamp","asc"));
     onSnapshot(q, documents=>{
        setRoomMessage(
          documents.docs.map( document => document.data())
      )
   })
   chatRef?.current?.scrollIntoView({
        behavior:"smooth"
      })
  }
  },[roomId])
  useEffect(()=>{
    chatRef?.current?.scrollIntoView({
      behaviour:"smooth"
    })
  },[roomMessage])
    return(
       <ChatComponent>
         {  
            roomId && (
            <>
              <ChatHeader>
             <ChatHeaderLeft>
               <h4> #{roomName}
               <StarBorderOutlinedIcon></StarBorderOutlinedIcon>
               </h4>
             </ChatHeaderLeft>
             <ChatHeaderRight>
               <p>
                   <InfoOutlined></InfoOutlined>
                   Details
               </p>
             </ChatHeaderRight>
              </ChatHeader>
              <ChatMessage>
              {
                roomMessage && roomMessage.map(document =>{
                const {message,id,timeStamp,user, userImage} =document;
                return(
                  <Message
                    message={message}
                    timeStamp={timeStamp}
                    user = {user}
                    userImage ={userImage}
                  />
                   
                )
              })
              }
              <chatButton ref= {chatRef}>
              </chatButton>
            </ChatMessage>
              <ChatInput chatRef={chatRef} channelId = {roomId} channelName = {roomName}></ChatInput>
             </>
             )
         }
       </ChatComponent>
    )
}
export default Chat;
const ChatButton = styled.div`

`;
const ChatMessage = styled.div`

`;
const ChatHeaderLeft = styled.div`
    display:flex;
    align-items:center;
   >h4 {
       display: flex;
       text-transform: lowercase;    
   }
   >h4 > .MuiSvgIcon-root{
       margin-left:15px;
   }
`;
const ChatHeaderRight = styled.div`
   >p {
       align-items:center;
       font-size:14px;
       display:flex;
   }
   >p > .MuiSvgIcon-root{
       margin-right:5px;
       font-size:16px;
   }
`;
const ChatComponent = styled.div`
  flex: 0.7;
  flex-grow:1;
  overflow-y:scroll;
  margin-top:90px;
  
`;
const ChatHeader = styled.div`
   display:flex;
   justify-content:space-between;
   padding:10px;
   border-bottom: 1px solid lightGray;
 

`;