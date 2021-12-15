
import { setDoc ,doc ,collection, getDocs} from "@firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { enterRoom, selectRoomId } from "../features/appSlice";
import {db} from '../config';
const SidebarOption =({Icon,title, addChannelOption ,id}) =>{
    const dispatch =useDispatch();
    const [channel ,setChannelName] =useState("")
    useEffect(() =>{
       
    },[setChannelName])
    const addChannel = () =>{
      const channelName =prompt("enter the channel Name");
      if(channelName){
        setChannelName(channel)
        const collectionRef = collection(db,"rooms");
          setDoc(doc(collectionRef),{
           name:channelName, 
       })
      }
   }
    const selectChannel = () =>{
        if(id)
          dispatch(enterRoom({
              roomId:id
          }))
    }
    return(
        <SidebarOptionsContainer onClick ={addChannelOption? addChannel :selectChannel}>
         { Icon && <Icon fontSize = "small" style={{padding:10}}></Icon>}
         { Icon ? (
             <h3>{title}</h3>
         ) : (
        <SidebarOptionsChannel>
           <span> #</span> {title} {console.log({title})}
        </SidebarOptionsChannel>
         )}
        </SidebarOptionsContainer>
    );
}
const SidebarOptionsChannel = styled.h3`
   padding:10px 15px;
   font-size:14px;
`;
const SidebarOptionsContainer = styled.div`
   display:flex;
   color:white;
   font-size:12px;
   padding-left:2px;
   align-items:center;
   cursor:pointer;
   :hover{
       opacity: 0.9;
   }
   >h3 {
       font-weight:500;
   }
`;

export default SidebarOption;