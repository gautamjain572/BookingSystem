import React from 'react'
import AuthForm from './AuthForm'
import { sendUserAuth } from '../api/apiHelpers';
import { useDispatch } from 'react-redux';
import { userActions } from '../store';

const Auth = () => {
  const dispatach = useDispatch();
  const onResRecived = (data) => {
    console.log(data);
    dispatach(userActions.login())
    localStorage.setItem("userId",data.id)  
  }
  
  const getData = (data) => {
    sendUserAuth(data)
    .then(onResRecived)
    .catch((err) => console.log(err))
  }

  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={false} />
    </div>
  )
}

export default Auth