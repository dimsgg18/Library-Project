import React from 'react'
import { InputBoxAuth } from './AuthInputBoxStyle';

const AuthInputBox = (props) => {
const {children} = props;    
  return (
    <InputBoxAuth>
        {children}
    </InputBoxAuth>
  )
}

export default AuthInputBox