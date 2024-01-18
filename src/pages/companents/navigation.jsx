import React from 'react'
import Books from '../books.show'
import {Routes,Route,Link} from 'react-router-dom';
import BookEdit from '../books.edit';
import Authors from '../authors.show';
import AuthorEdit from '../authors.edit';

export default function Navigation() {
  return (
<div>
<div className=' nave'>
<div className='container'>
        <div className='row'>
        <div className='col-4'>
        <h3 className='text-start m-3'>Book Admin</h3>
        </div>
        <div className='col-5 text-end mt-4 d-flex justify-content-evenly'>
        <Link id="links" className="links" to="/" ><h6 className='nav-item'>Book's</h6></Link>
        <Link id="links" className="links" to="/edit" ><h6 className='nav-item'>Edit Book</h6></Link>
        <Link id="links" className="links" to="/authors" ><h6 className='nav-item'>Author's</h6></Link>
        <Link id="links" className="links" to="/authoredit" ><h6 className='nav-item'>Edit Author's</h6></Link>
        </div>
        <div className='col-3'></div>
        </div>
    </div>
</div>
<Routes>
        <Route path='/' Component={Books} />
        <Route path='/edit' Component={BookEdit} />
        <Route path='/authors' Component={Authors} />
        <Route path='/authoredit' Component={AuthorEdit} />
</Routes>
</div>
  )
}


/**<div className='logo-head col-6'>
                 <span className='title '>Book Admin</span>
        </div>
        <div className='nav-head col-6'>
        </div> */