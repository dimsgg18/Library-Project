import React from 'react'
import '../AuthPage/Authpage.css'
export const AuthPage = (props) => {
const {children} = props;
  return (
    <div className='auth-background'>
        {children}
    </div>
  )
}
