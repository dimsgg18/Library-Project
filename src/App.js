import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './Page/AuthPage/Login/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
