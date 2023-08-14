import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
function Student () {
    const headers = ["Name", "Date of birth", "Phone Number", "Email", "Action"]

    const data = {Name: "Tho", Date_of_Birth:"2001-07-10", Phone_Number:"409530530", Email: "a@gmail.com"}
    const [student, setStudent] = useState([data])
    
    useEffect(() => {
        axios.get('http://localhost:3001/')
        .then(res => setStudent(res.data))
        .catch(err => console.log(err))
    }, [])
    
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to="/createaccount" className='btn btn-success'>Add +</Link>            
                <table className='table'>
                    <thead>
                        <tr>
                            {
                                headers.map((data, i) => (
                                    <td key = {i}>
                                        {data}
                                    </td>
                                ))
                            }
                           
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            student.map((data, i) => (
                                <tr key = {i}>
                                    <td>{data.Name}</td>
                                    <td>{data.Date_of_Birth}</td>
                                    <td>{data.Phone_Number}</td>
                                    <td>{data.Email}</td>
                                    <td>
                                        <button className='btn btn-primary'>Update</button>
                                        <button className='btn btn-danger ms-2'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table> 
                
            </div>
        </div>
    )
}
export default Student  