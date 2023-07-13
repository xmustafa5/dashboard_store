import React from 'react'
import Footer from './Footer'
import { Navbar } from 'react-bootstrap'
const Layout = ({children}) => {
  return (<>
    <Footer/>
    {children}
    <Navbar/>
 </> )
}

export default Layout