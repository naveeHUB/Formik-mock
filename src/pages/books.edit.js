import React from 'react'
import Input from './companents/input'
import {useCart} from './contextApi/contextApi'
import { Formik } from 'formik';

export default function BooksEdit() {

  const {infos,setInfos,setFirst,first} = useCart()

  const Empties = {
    ID: "",
    Title: "",
    Author: "",
    ISBN: "",
    PublicationDate: ""
  }

  return (
    <div>
      <div className='form pt-4'>
      <h3> Books Editing Area </h3>
      <div className='container p-0'>
          <Formik
          initialValues={infos}
          validate={values => {
            const errors = {};
             // Validate ID
             if (!values.ID) {
              errors.ID = 'ID is required';
            } else if (!Number.isInteger(values.ID) || values.ID <= 0) {
              errors.ID = 'ID must be a positive integer';
            }
            // Validate Title
            else if (!values.Title) {
              errors.Title = 'Title is required';
            } else if (values.Title.length > 50) {
              errors.Title = 'Title must be 100 characters or less';
            } else if (values.Title.length < 3) {
              errors.Title = 'Title must be at least 3 characters';
            }
            // Validate Author
            else if (!values.Author) {
              errors.Author = 'Author is required';
            } else if (values.Author.length > 35) {
              errors.Author = 'Author must be 50 characters or less';
            } else if (values.Author.length < 3) {
              errors.Author = 'Author must be at least 3 characters';
            }
            // Validate ISBN
            else if (!values.ISBN) {
              errors.ISBN = 'ISBN is required';
            } else if (!Number.isInteger(values.ISBN) || values.ISBN <= 0) {
              errors.ISBN = 'ISBN must be a positive integer';
            }
            // Validate PublicationDate
            else if (!values.PublicationDate) {
              errors.PublicationDate = 'Publication Date is required';
            }
            return errors;
          }} 
          onSubmit={(values,{setSubmitting}) => {
            let firstcopy=[...first]
              firstcopy.push(values)
             setFirst(firstcopy)
             alert("Book Data Modified")
             Formik.resetForm();
             setInfos( Empties)
             setSubmitting(false);
          }}
          >
            {({
              values,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
            }) =>(
              <form className='form-body p-5' onSubmit={handleSubmit}>
                <label>{errors.ID}</label>
              <Input name="ID" type='number' placeholder='Enter Id'
               onChange={handleChange} onBlur={handleBlur} value={values.ID}/>
                <label>{errors.Title}</label>
              <Input name="Title"type='text' placeholder='Enter Book Name' 
              onChange={handleChange} onBlur={handleBlur} value={values.Title}/>
                <label>{errors.Author}</label>
              <Input name="Author" type='text' placeholder='Enter Author Name'
               onChange={handleChange} onBlur={handleBlur} value={values.Author}/>
                <label>{errors.ISBN}</label>  
              <Input name="ISBN" type='number' placeholder='Enter ISBN Number' 
              onChange={handleChange} onBlur={handleBlur} value={values.ISBN}/>
                <label>{errors.PublicationDate}</label>
              <Input name="PublicationDate" type='date' placeholder='Enter Publication Date'
               onChange={handleChange} onBlur={handleBlur} value={values.PublicationDate}/>
              <button type='submit' className='btn btn-info'> Submit </button>
              </form>
            )}
          </Formik>
         
      </div>
    </div>
    </div>
  )
}