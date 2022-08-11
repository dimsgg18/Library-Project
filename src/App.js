import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InputEmailPage from './Page/AuthPage/ForgotPass/InputEmail/InputEmailPage';
import { LoginPage } from './Page/AuthPage/Login/LoginPage';
import SignUpPage from './Page/AuthPage/SignUp/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/forgotpass" element={<InputEmailPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
