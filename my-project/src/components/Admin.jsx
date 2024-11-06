import React from 'react'
import AuthForm from './AuthForm'
import { adminLogin } from '../api/apiHelpers';

const Admin = () => {

  const getData = (data) => {
      console.log("Admin" , data);
      adminLogin(data).then((res) => console.log(res)).catch((err) => console.log(err))
  }

  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={true}/>
    </div>
  )
}

export default Admin