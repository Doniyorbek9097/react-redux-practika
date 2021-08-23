import React,{useState,useEffect} from "react";
import {Link,useParams,useHistory} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
function EditContact(){
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [groupCount ,setGroupCount] = useState(null);
 const  [phone,setPhone] = useState(null);
 const [address, setAddress] = useState("")
const history = useHistory();

  const contacts = useSelector(state => state);
  const {id} = useParams();
const currentContact  = contacts.find(contact => contact.id === parseInt(id));


useEffect(() => {
if(currentContact){
  setName(currentContact.name);
  setLastName(currentContact.lastName);
  setSubject(currentContact.subject);
  setPhone(currentContact.phone);
  setAddress(currentContact.address)
}
},[currentContact]);

const dispatch = useDispatch()


const handleSubmit = (e) => {
  e.preventDefault();
  const checkName = contacts.find((contact) => contact.id !== parseInt(id)  && contact.name === name);
  
    if(!name || !lastName || !subject || !groupCount || !phone || !address){
      return alert("sucsess")
    }
    if(checkName){
      return alert("bunday ism mavjud");
    } 

const data = {
 id:parseInt(id),
 name,
 lastName,
 subject,
 groupCount,
 phone,
 address
}

dispatch({type:"UPDATE_CONTACT", payload:data})
alert(" mofaqilyatli angilandi ");

history.push("/");
}



  return(
    <div className="container">
   {currentContact ? (
     <div className="row">
         <h1 className="display-3 text-center">Add Contact</h1>
         <div className="col-md-6 mx-auto p-5 shadow ">
             <form onSubmit = {handleSubmit}>
                 <div className="from-group">
                     <input 
                     type="text"
                      placeholder="Ism"
                      className="form-control"
                      value = {name}
                      onChange ={e => setName(e.target.value)}
                      />
                 </div>
                 <div className="from-group">
                     <input
                      type="text" 
                      placeholder="Familaya"
                      className="form-control my-3"
                      value={lastName}
                      onChange ={e => setLastName(e.target.value)}
                      />
                 </div>
                 <div className="from-group">
                     <input
                      type="text"
                       placeholder="Fani"
                       className="form-control"
                       value={subject}
                       onChange ={e => setSubject(e.target.value)}
                       />
                      </div> 
                     
                  <div className="from-group">
                     <input
                      type="number"
                       placeholder="guruh soni"
                       className="form-control my-3"
                       value={groupCount}
                       onChange ={e => setGroupCount(e.target.value)}
                       />
                       </div>

                  <div className="from-group">
                     <input
                      type="text"
                       placeholder="tel number"
                       className="form-control"
                       value={phone}
                       onChange ={e => setPhone(e.target.value)}
                       />
                       </div>

                     <div className="from-group">
                     <input
                      type="text"
                       placeholder="Manzil"
                       className="form-control my-3"
                       value={address}
                       onChange ={e => setAddress(e.target.value)}
                       />
                 </div>
                 <div className="d-grid gap-3">
                     <input type="submit" value="add Teacher" className="btn btn-primary mt-4"/>
                 </div>

                  
                 <div className="d-grid gap-3">
                     <Link to="/" className="btn btn-danger mt-4">Channel</Link>
                 </div>
             </form>
         </div>
     </div>
   ):(
     <h1>bunday Id {id} topilmadi  </h1>
   )
   
   }
    
  </div>
  )
  history.push("/")
}
export default EditContact;