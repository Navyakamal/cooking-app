import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div>
       
           <Navbar className="bg-white justify-content-between shadow">
          <Container>
          
<Link to={'/'} style={{textDecoration:'none'}}>
            <Navbar.Brand className='brand' style={{fontSize:'40px',color:'black'}}>Pinch <span>of</span> Yum</Navbar.Brand>
  
</Link>       
       
        <Navbar.Collapse className="justify-content-end">
      <Link to={'/'} style={{textDecoration:'none'}}>
            <Navbar.Text style={{marginRight:'20px'}}>
             <b> HOME</b>
            </Navbar.Text>
      </Link>
          <Navbar.Text  style={{marginRight:'20px'}}>
           <b> ABOUT</b>
          </Navbar.Text>
          <Navbar.Text>
           <b> RECIPES</b>
          </Navbar.Text>
        </Navbar.Collapse>
             
          </Container>
        </Navbar>
      </div>
  )
}

export default Header
