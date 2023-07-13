import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Singup from './components/Singup';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import Dashboard from './components/Dashboard';
import AuthProvider from './context/AuthContext';
import RequireAuth from './context/RequirAuth';
// import {Container} from "react-bootstrap"
import Items from './components/Items'; // Add this line
import Layout from './layout/Index';
  
const App =() =>{
  return (
     <Container className='d-flex align-items-center justify-content-center ' style={{minHeight:"100vh"}}>

<div className='w-100' style={{maxWidth:"400px"}}>
<Layout>

<AuthProvider>
  <Routes>
          <Route path='/Singup' element={<Singup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/update-profile' element={<UpdateProfile />} />
          <Route path='/' element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path="/items" element={<RequireAuth><Items /></RequireAuth>} /> {/* Add this line */}
        </Routes> 
        </AuthProvider>
</div>
 </Layout>   
    </Container>
  );
}

export default App;
