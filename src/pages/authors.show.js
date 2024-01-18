import React from 'react'
import {Link} from 'react-router-dom'
import {useCart} from './contextApi/contextApi'

export default function AuthorsShow() {

  const {auth,setAuthVal,setAuth} = useCart()

  function deleteAuthor (data){
    const unmatched = auth.filter((result)=>(result.ID !== data))
    setAuth(unmatched)
  }
  function editAthor(data){
    setAuthVal(data)
    const unmatched = auth.filter((result)=>(result.ID !== data.ID))
    setAuth(unmatched)
  }

  return (
    <div className='container mt-5'>
      <div className='app-container'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>BirtDate</th>
            <th>Biography</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {auth?.map((data,index) => 
             <tr key={index}>
            <td>{data.ID}</td>
            <td>{data.Name}</td>
            <td>{data.BirthDate}</td>
            <td>{data.Biography}</td>
            <td>
            <Link id="links" to="/authoredit"><button className='btn btn-primary editbtn' onClick={()=> editAthor(data)}>Edit</button></Link>
              <button className='btn btn-danger deletebtn' onClick={() => deleteAuthor(data.ID)}>Delete</button>
            </td>
            </tr>
            )}
        </tbody>
      </table>
      </div>
    </div>
  )
}