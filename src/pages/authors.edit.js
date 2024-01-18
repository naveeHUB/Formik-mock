import React from 'react'
import Input from './companents/input';
import { useCart } from './contextApi/contextApi';
import { Formik } from 'formik';

export default function AuthorsEdit() {

  const iniAuth = {
    ID: 0,
    Name: "",
    BirthDate:"",
    Biography: ""
  }

  const {auth,setAuth,authVal,setAuthVal} = useCart()

  return (
    <div className='form p-4'>
      <h3> Author Editing</h3>
      <div className='container'>
          <Formik
          initialValues={iniAuth}
          validate={values => {
            const errors = {};
             // Validate ID
             if (!values.ID) {
              errors.ID = 'ID is required';
            } else if (!Number.isInteger(values.ID) || values.ID <= 0) {
              errors.ID = 'ID must be a positive integer';
            }
            // Validate Name
            else if (!values.Name) {
              errors.Name = 'Name is required';
            } else if (values.Name.length > 50) {
              errors.Name = 'Name must be 50 characters or less';
            } else if (values.Name.length < 3) {
              errors.Name = 'Name must be at least 3 characters';
            }
            // Validate BirthDate
            else if (!values.BirthDate) {
              errors.BirthDate = 'Birth Date is required';
            }
            // Validate Biography
            else if (!values.Biography) {
              errors.Biography = 'Biography is required';
            } else if (values.Biography.length > 500) {
              errors.Biography = 'Biography must be 500 characters or less';
            } else if (values.Biography.length < 10) {
              errors.Biography = 'Biography must be at least 10 characters';
            }
            return errors;
          }}

          onSubmit={(values,{setSubmitting}) => {
              let authcopy =[...auth]
              authcopy.push(values)
              setAuth(authcopy)
              alert("Author Data Modified")
              Formik.resetForm();
              setAuthVal(iniAuth)
              setSubmitting(false);
            
          }}
          >
            {({
              values,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
             
            })=>(
               <form className='form-body p-5' onSubmit={handleSubmit}>
                  <label>{errors.ID}</label>
               <Input name="ID" type='number' placeholder='Enter Id' onBlur={handleBlur}
               onChange={handleChange} value={values.ID}/>
                  <label>{errors.Name}</label>
               <Input name="Name" type='text' placeholder='Enter Author Name' onBlur={handleBlur}
               onChange={handleChange}  value={values.Name}/>
                  <label>{errors.BirthDate}</label>
               <Input name="BirthDate" type='date' placeholder='DoB' onBlur={handleBlur}
               onChange={handleChange}  value={values.BirthDate}/>
                  <label>{errors.Biography}</label>
               <Input name="Biography" type='text' placeholder='Biography' onBlur={handleBlur}
                onChange={handleChange}  value={values.Biography}/>

                <button type='submit' className='btn btn-info'
                disabled={isSubmitting} > Submit </button>
               </form>
            )}
          </Formik>
          
      </div>
    </div>
  )
}