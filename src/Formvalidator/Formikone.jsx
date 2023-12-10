import React, { useState } from 'react'
import { useFormik } from 'formik'
import { FormSchema } from './Yupone'

function Formikone() {

let [data,setdata]= useState({})

let  formikValues = { name:'',email:'',age:'',pass:'',cpass:'' }

let {values,handleBlur,touched,handleChange,handleSubmit,errors} = useFormik({
    initialValues:formikValues,
    validationSchema:FormSchema,
    onSubmit:(values)=>{
        setdata(values)
        console.log(values);
    }
})
// console.log(formik);

  return (
    <div>
        <form onSubmit={handleSubmit} >

<div>
    <label htmlFor="">UserName</label>

    <input 
    type="text" 
    name="name" 
    id="" 
    value={values.name}
    onBlur={handleBlur}
    onChange={handleChange}
    /><br />
       
      {
        errors.name && touched.name ?  <p style={{color:'red'}}>{errors.name}</p> : ''
      }

</div>
<br /><br />
<div>
    <label htmlFor="">UserEmailID</label>
    <input 
    type="text" 
    name="email" 
    id="" 
    value={values.email}
    onBlur={handleBlur}
    onChange={handleChange}
   
    /> <br/>
    {
        errors.email && touched.email ?  <p style={{color:'red'}}>{errors.email}</p> : ''
      }

</div>
<br /><br />
<div>
    <label htmlFor="">User AGE</label>
    <input 
    type="number" 
    name="age" 
    id="" 
    value={values.age}
    onBlur={handleBlur}
    onChange={handleChange}
   
    /> <br/>
    {
        errors.age && touched.age ?  <p style={{color:'red'}}>{errors.age}</p> : ''
      }

</div>
<br /><br />
<div>
    <label htmlFor="">Password</label>
    <input 
    type="text" 
    name="pass" 
    id="" 
    value={values.pass}
    onBlur={handleBlur}
    onChange={handleChange}
   
    /> <br/>
    {
        errors.pass && touched.pass ?  <p style={{color:'red'}}>{errors.pass}</p> : ''
      }

</div>
<br /><br />
<div>
    <label htmlFor="">Confirm passowrd</label>
    <input 
    type="text" 
    name="cpass" 
    id="" 
    value={values.cpass}
    onBlur={handleBlur}
    onChange={handleChange}
   
    /> <br/>
    {
        errors.cpass && touched.cpass ?  <p style={{color:'red'}}>{errors.cpass}</p> : ''
      }

</div>
<br /><br />
<input type="submit" value="Login" />

        </form>
    </div>
  )
}

export default Formikone