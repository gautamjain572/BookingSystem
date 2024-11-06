import React from 'react'
import AuthForm from './AuthForm'
import { sendUserAuth } from '../api/apiHelpers';

const Auth = () => {

  const getData = (data) => {
    console.log("Auth", data);
    sendUserAuth(data).then((res) => console.log(res)).catch((err) => console.log(err))
  }

  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={false} />
    </div>
  )
}

export default Auth