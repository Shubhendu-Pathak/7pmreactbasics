import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'

function Formiktwo() {
    let [data,setdata] = useState({})

    const formikCompoValidation= yup.object({
        name:yup.string().required('Name is BLANK'),
        age:yup.number().min(18,'Minimum Age must BE 18 ').max(59).required('AGE IS MUST'),
        pass:yup.string()
        .required('Pass is Required')
        .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/,'Enter STRONG PASSWORD'),
        gender:yup.string().required('Select GEnder'),
        hobby:yup.array().min(1,'Selct One Hobby At-LEAST'),
        country:yup.string().required('Country is BLANK'),
        comment:yup.string().max(200)
    })

  return (
    <div>
        <Formik 
        validationSchema={formikCompoValidation}
        initialValues={{name:'',age:'',pass:'grass',gender:'',hobby:[],country:'',comment:''}}
        onSubmit={(values)=>{
            console.log(values)
            setdata(values)
 axios.post('http://localhost:4000/mydata',data).then(response=>console.log(response))
        }}
        >
            <Form>
                
              <div>
              <label htmlFor="">Full Name : </label>
                <Field type='text' name='name'/>
              </div><br /><br />
             <div style={{color:'red'}}>
             <ErrorMessage name='name' />
             </div>
              <br /><br/>

              <div>
              <label htmlFor="">Age : </label>
                <Field type='number' name='age'/>
              </div><br /><br />
              <ErrorMessage name='age' />
              <br /><br />

              <div>
              <label htmlFor="">Password : </label>
                <Field type='text' name='pass'/>
              </div><br />
              <ErrorMessage name='pass' />
              <br /><br />

              <div>
              <label htmlFor="">Gender : </label>

              <label htmlFor="">Male : </label>
                <Field type='radio' name='gender' value='Male'/> &nbsp; &nbsp; &nbsp;
                <label htmlFor="">FeMale : </label>
                <Field type='radio' name='gender' value='Female'/>
              </div><br />
              <div style={{color:'red'}}>
             <ErrorMessage name='gender' />
             </div>
              <br /><br />

              <div>
              <label htmlFor="">Hobbies : </label>
              <label htmlFor="">Writing</label>
              <Field type='checkbox' name='hobby' value='Writing'/>&nbsp; &nbsp; &nbsp;
              <label htmlFor="">Cooking</label>
              <Field type='checkbox' name='hobby' value='Cooking'/>&nbsp; &nbsp; &nbsp;
              <label htmlFor="">Swimming</label>
              <Field type='checkbox' name='hobby' value='Swimming'/>&nbsp; &nbsp; &nbsp;

              <div style={{color:'red'}}>
             <ErrorMessage name='hobby' />
             </div>
              </div><br /><br />
          
              <br /><br />

              <div>
           <label htmlFor="">Country : </label>
           <Field name='country' as='select'>
           <option value="">PLease Select Your Country</option>
            <option value="Italy1">ITALY1</option>
            <option value="Italy2">ITALY2</option>
            <option value="Italy3">ITALY3</option>
            <option value="Italy4">ITALY4</option>
            <option value="Italy5">ITALY5</option>
           </Field>
              </div><br />
              <div style={{color:'red'}}>
             <ErrorMessage name='country' />
             </div>
              <br /><br />

              <div>
                <label htmlFor="">Comments : </label><br />
               <Field name='comment' as='textarea'/>
              </div>

              <button type='submit'>Submit</button>
            </Form>
        </Formik>

<h1>{JSON.stringify(data)}</h1>



    </div>
  )
}

export default Formiktwo