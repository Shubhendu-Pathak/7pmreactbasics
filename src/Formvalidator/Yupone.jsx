import * as Yup from 'yup'


export const FormSchema = Yup.object({
  name:Yup.string().min(3,'Too SHORT').max(6,'TOO LONG').required('Name is empty'),
  email:Yup.string().email().required('Email is Blank'),
  age:Yup.number().min(18,'Minimum Age must BE 18 ').max(59).required('AGE IS MUST'),
  pass:Yup.string()
  .required('Pass is Required')
  .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/,'Enter STRONG PASSWORD'),
  cpass:Yup
  .string()
  .required('Confirm Password is Required')
  .oneOf([Yup.ref('pass'),null],"Password Do not Match")
})