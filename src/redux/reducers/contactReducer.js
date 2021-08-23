const TeacherState = [
  {
    id:1,
    name:"Dilishod",
    lastName:"Dadajanov",
    subject:"front end",
    groupCount:12,
    phone:+998934073322,
    address:"Namangan"
  },
  {
    id:2,
    name:"Dilishod",
    lastName:"Dadajanov",
    subject:"front end",
    groupCount:12,
    phone:+998934073322,
    address:"Toshkent"
  },
  {
    id:3,
    name:"Dilishod",
    lastName:"Dadajanov",
    subject:"front end",
    groupCount:12,
    phone:+998934073322,
    address:"andijon"
  }

]

const contactReducer = (state = TeacherState,action) => {
   switch(action.type){
     case "ADD_CONTACT":
       state =[...state, action.payload];
       return state;
       case "UPDATE_CONTACT":
         const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact)
         state = updateState;
         return state;
     default:
       return state;
   }
}

export default contactReducer; 