import styled from "styled-components";
const Message = ({message,timeStamp,user,userImage}) =>{
    return(
        <MessageContainer>
          <img src ={userImage}></img>
          <MessageInfo>
              <h4>
                  {user}
                   {
                       <span>{new Date(timeStamp?.toDate()).toUTCString()}</span>
                   }
              </h4>
              <p>{message}</p>
          </MessageInfo>
        </MessageContainer>
    )
}
export default Message;
const MessageContainer = styled.div`
   display:flex;
   align-items:center;
   padding: 20px;
   > img {
       height: 50px;
       border-radius: 8px;
   }
`;
const MessageInfo = styled.div`
   padding-left:10px;
   >h4 >span{
       color:gray;
       margin-left:4px;
       font-size:10px;
       font-weight:300px;
   }
`;