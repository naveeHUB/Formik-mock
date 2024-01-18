import React from 'react'
import {Link} from 'react-router-dom'
import {useCart} from './contextApi/contextApi'

export default function BooksShow() {
  
  const {first,setInfos,setFirst} = useCart()

  function handlDelete (data){
    const unMatched = first.filter((result) => result.ID !== data.ID)
    setFirst(unMatched)
 }
 
 function handleeditBook(data){
  setInfos(data)
  const unMatched = first.filter((result) => result.ID !== data.ID)
  setFirst(unMatched)
 }

  return (
    <div className='container mt-5'>
      <div className='app-container'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>PublicationDate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {first?.map((data,index) => 
             <tr key={index}>
            <td>{data.ID}</td>
            <td>{data.Title}</td>
            <td>{data.Author}</td>
            <td>{data.ISBN}</td>
            <td>{data.PublicationDate}</td>
            <td>
            <Link id="links" to="/edit" ><button className='btn btn-primary editbtn' 
            onClick={() => handleeditBook(data)}>Edit</button></Link>
              <button className='btn btn-danger deletebtn' 
            onClick={() =>handlDelete(data)}>Delete</button>
            </td>
            </tr>
            )}
        </tbody>
      </table>
      </div>
    </div>
  )
}
