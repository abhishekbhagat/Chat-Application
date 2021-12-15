export const initialState ={
    user:null
}
export const reducer =(state, action) =>{
    switch(action.type){
        case 'NEW_USER' :{
           return {
           ...state,
           user: action.payload
           }
        }
        case 'LOGOUT':{
           return {
               user:""
           };
        }
        default: 
         return null;
    }
}