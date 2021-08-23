import React,{useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {useHistory} from "react-router-dom";
function AddContact(){
  const contacts = useSelector((state) => state);
     const [name, setName] = useState("");
     const [lastName, setLastName] = useState("");
     const [subject, setSubject] = useState("");
     const [groupCount ,setGroupCount] = useState(null);
    const  [phone,setPhone] = useState(null);
    const [address, setAddress] = useState("")
   const dispatch = useDispatch();
   const history = useHistory();

 const handleSubmit = (e) => {
   e.preventDefault();
   const checkName = contacts.find((contact) => contact.name === name && contact);
     if(!name || !lastName || !subject || !groupCount || !phone || !address){
       toast.warning("salom");
     }
     if(checkName){
       return alert("bunday ism mavjud");
     }

const data = {
  id:contacts[contacts.length - 1].id +1,
  name,
  lastName,
  subject,
  groupCount,
  phone,
  address
}

dispatch({type:"ADD_CONTACT", payload:data})
alert("Qo'shish mofaqilyatli qo'shildi ");

history.push("/");
 }


  return(
    <div className="container">
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
                      <input type="submit" value="add Teacher" className="btn btn-danger mt-4"/>
                  </div>
              </form>
          </div>
      </div>
    </div>
  )
}

export default AddContact;