import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateStudent() {
    const [firstName, setFirstName] =useState('')
    const [lastName, setLastName] =useState('')
    const [dob, setDateOfBirth] =useState('')
    const [phoneNumber, setPhoneNumber] =useState('')
    const [email, setEmail] = useState('')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function handleSubmit(event) {
        console.log("A");
        event.preventDefault();
        axios.post('http://localhost:3001/createaccount', {firstName, lastName, dob, phoneNumber, email, username, password})
        .then(res => {
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err));
    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>        
            <div className='w-50 bg-white rounded p-3'>           
                <form onSubmit={handleSubmit}>                
                    <h2>Add Student</h2>                
                    <div className='mb-2'>                    
                        <label htmlFor="">First Name</label>                    
                        <input type="text" placeholder='Enter First Name' className='form-control' onChange={e => setFirstName(e.target.value)} />                
                    </div>    

                    <div className='mb-2'>                    
                        <label htmlFor="">Last Name</label>                    
                        <input type="text" placeholder='Enter Last Name' className='form-control' onChange={e => setLastName(e.target.value)} />                
                    </div>   

                    <div className="mb-2">
                        <label htmlFor="">Date of Birth</label>
                        <input type = "text" placeholder="Enter Date of Birth" className="form control" onChange={e => setDateOfBirth(e.target.value)} /> 
                    </div> 

                    <div className="mb-2">
                        <label htmlFor="">Phone Number</label>
                        <input type = "text" placeholder="Enter Phone number" className="form control" onChange={e => setPhoneNumber(e.target.value)} /> 
                    </div>    

                    <div className='mb-2'>                    
                        <label htmlFor="">Email</label>                    
                        <input type="email" placeholder='Enter Email' className='form-control' onChange={e => setEmail(e.target.value)}/>                
                    </div>

                    <div className='mb-2'>                    
                        <label htmlFor="">Username</label>                    
                        <input type="username" placeholder='Enter username' className='form-control' onChange={e => setUserName(e.target.value)}/>                
                    </div>

                    <div className='mb-2'>                    
                        <label htmlFor="">Password</label>                    
                        <input type="password" placeholder='Enter Password' className='form-control' onChange={e => setPassword(e.target.value)}/>                
                    </div>

                    <button className='btn btn-success'>Submit</button>            
                </form>        
            </div>    
        </div> 
    )
}
export default CreateStudent