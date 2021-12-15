import styled from "styled-components";
import { FiberManualRecord } from "@material-ui/icons";
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from "./SidebarOption";
import CommentIcon from '@material-ui/icons/Comment';
import DraftsIcon  from "@material-ui/icons/Drafts";
import BookmarkBorderIcon  from "@material-ui/icons/BookmarkBorder";
import FileCopyICon  from "@material-ui/icons/FileCopy";
import PeopleAltIcon  from "@material-ui/icons/PeopleAlt";
import AppsIcon  from "@material-ui/icons/Apps";
import ExpandLessIcon  from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon  from "@material-ui/icons/ExpandMore";
import InboxIcon  from "@material-ui/icons/Inbox";
import AddIcon from "@material-ui/icons/Add";
import { useContext, useEffect, useState } from "react";
import { getDocs,collection,onSnapshot,doc } from "@firebase/firestore";
import { db } from "../config";
import { AppContext } from "../App";
const Sidebar = () =>{
    const [channels,setChannels] = useState([]);
    const {state} =useContext(AppContext)
    const {user} =state;
    useEffect(()=>{
        const abc = onSnapshot(collection(db,"rooms"),documents=>{
          setChannels( 
            documents.docs.map(element =>({
                id: element.id,
                name:element.data().name
            }
           ))
        )
        });
    
    },[])

    
    return(
          <SidebarComponent>
            <SidebarHeader>
              <SidebarInfo>
              <h2>Slack App</h2>
              <h3>
                <FiberManualRecord></FiberManualRecord>
                 {user?.displayName}
              </h3>
              </SidebarInfo>
            <CreateIcon/>
            </SidebarHeader>
          <SidebarOption Icon={CommentIcon} title ="Threads"/>
          <SidebarOption Icon={InboxIcon} title ="Mentions & reactions"/>
          <SidebarOption Icon={DraftsIcon} title ="Saved items"/>
          <SidebarOption Icon={BookmarkBorderIcon} title ="Channel browser"/>
          <SidebarOption Icon={PeopleAltIcon} title ="People & user groups"/>
          <SidebarOption Icon={AppsIcon} title ="Apps"/>
          <SidebarOption Icon={FileCopyICon} title ="FileBrowser"/>
          <SidebarOption Icon={ExpandLessIcon} title ="showLess"/>
          <hr/>
          <SidebarOption Icon={ExpandMoreIcon} title ="channels"/>
          <hr/>
          <SidebarOption Icon={AddIcon} addChannelOption title ="Add Channel"/>
          {

              channels && channels.map(channel =>(
                  <SidebarOption key ={channel.id}  id ={channel.id } title= {channel.name}></SidebarOption>
              ))
          }
          </SidebarComponent>
    )
}
const SidebarComponent = styled.div`
  flex:0.3;
  background-color:#3F0F3F;
  margin-top:40px;
  color:white;
  min-width:100px;
  min-height:900px;
  >hr {
      margin-top:5px;
      margin-bottom:5px;
      border: 1px solid #49274b;
  }
`;
const SidebarHeader =styled.div`
   display:flex;
   padding:13px;
   > .MuiSvgIcon-root{
       padding:10px;
       align-items:center;
       font-size:18px;

   }
`;
const SidebarInfo = styled.div`
  flex:1;
  >h2{
      font-size:15px;
      font-weight:400px;
      margin-top:15px;
      margin-bottom:5px;
  }
  >h3{
      display:flex;
      font-size:13px;
      font-weight:400;
      align-items:center;
  }
  >h3 > .MuiSvgIcon-root{
      font-size:14px;
      margin-top:1px;
      margin-right:3px;
      margin-left:5px;
      color:green;
      align-items:center;
  }
`;
export default Sidebar;