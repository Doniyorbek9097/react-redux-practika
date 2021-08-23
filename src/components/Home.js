import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
function Home(){
const contacts = useSelector(state => state);
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 ">
          <Link to="/add" className="btn btn-outline-dark ">Add contact</Link>
        </div>
         <div className="col-md-10 mx-auto">
           <table className="table table-hover">
              <thead className="text-white bg-dark text-center">
                 <tr>
                   <td scope="col">#</td>
                   <td scope="col">Ismi</td>
                   <td scope="col">Familya</td>
                   <td scope="col">Fani</td>
                   <td scope="col">Tel raqami</td>
                   <td scope="col">Manzil</td>
                   <td scope="col">Action</td>
                 </tr>
              </thead>
                   <tbody className="text-center shadow">
                        {contacts.map((contact, id)=> {
                          return(
                            <tr key="id">
                              <td>{++id}</td>
                              <td>{contact.name}</td>
                              <td>{contact.lastName}</td>
                              <td>{contact.subject}</td>
                              <td>{contact.phone}</td>
                              <td>{contact.address}</td>
                              <td>
                                <Link 
                                to={`/edit/${contact.id}`}
                                className="btn btn-primary btn-sm"
                                >Edit</Link>
                                <button
                                 type="button"
                                 className="btn btn-danger btn-sm mx-3 "
                                 >Dalete</button>
                              </td>
                            </tr>
                          )
                        })}
                 </tbody>
           </table>
         </div>
      </div>
    </div>
  )
}

export default Home;