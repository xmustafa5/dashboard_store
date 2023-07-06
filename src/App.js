import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
// import {Container} from "react-bootstrap"
const App =() =>{
  return (
     <Container className='d-flex align-item-center justify-content-center ' style={{minHeight:"100vh"}}>
sss
<div className='w-100' style={{maxWidth:"400px"}}>
<Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/update-profile' element={<UpdateProfile />} />
          <Route path='/' element={<Dashboard />} />
        

        </Routes>
</div>
    </Container>
  );
}

export default App;
