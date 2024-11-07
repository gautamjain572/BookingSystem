import React from 'react'
import AuthForm from './AuthForm'
import { adminLogin } from '../api/apiHelpers';
import { useDispatch } from 'react-redux';
import { adminActions } from '../store';

const Admin = () => {
  const dispatach = useDispatch();
  const onResRecived = (data) => {
    console.log(data);
    dispatach(adminActions.login())
    localStorage.setItem("adminId",data.id)
    localStorage.setItem("token",data.token)
  }

  const getData = (data) => {
      adminLogin(data)
      .then(onResRecived)
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={true}/>
    </div>
  )
}

export default Admin