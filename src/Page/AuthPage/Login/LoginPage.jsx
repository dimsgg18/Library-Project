import React from 'react'
import AuthInputBox from '../../../Components/AuthBox/AuthInputBox'
import { AuthPage } from '../../../Layout/AuthPage/AuthPage'
import { InLoginBox, LoginBox } from './LoginStyle'


export const LoginPage = () => {
  return (
    <AuthPage>
      <LoginBox>
        <InLoginBox>
            <AuthInputBox>
              <input className='input username' type="text" placeholder='Username' />
              <br />
              <input className='input password' type="password" placeholder='Password' />
              <a href="/forgotpass">Forgot Password?</a>
              <button>Login</button>
            </AuthInputBox>
            <p>Dont have an account?<a href="/signup">Sign up</a> here</p>
        </InLoginBox>
      </LoginBox>
    </AuthPage>
  )
}
