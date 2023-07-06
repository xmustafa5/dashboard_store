import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Singup from './components/Singup';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import Dashboard from './components/Dashboard';
import AuthProvider from './context/AuthContext';
// import {Container} from "react-bootstrap"
const App =() =>{
  return (
     <Container className='d-flex align-items-center justify-content-center ' style={{minHeight:"100vh"}}>
sss
<div className='w-100' style={{maxWidth:"400px"}}>
<AuthProvider>
  <Routes>
          <Route path='/Singup' element={<Singup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/update-profile' element={<UpdateProfile />} />
          <Route path='/' element={<Dashboard />} />
        </Routes> 
        </AuthProvider>
</div>
    </Container>
  );
}

export default App;
