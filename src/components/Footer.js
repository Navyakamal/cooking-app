import React from 'react'

function Footer() {
  return (
    <div>
    <footer className='bg-black' style={{padding:'20px',textAlign:'center'}}>
  <div class="container">
    <p style={{color:'white'}}>© 2024 Pinch of Yum. All rights reserved.</p>
    <p>Follow Us:</p>
    <div>
      <a href="#"  style={{textDecoration:'none',color:'lightblue'}}><i class="fa-brands fa-facebook"></i></a>
      <a href="#"  style={{textDecoration:'none',color:'pink',marginLeft:'10px'}}><i class="fa-brands fa-instagram"></i></a>
      <a href="#"  style={{textDecoration:'none',color:'white',marginLeft:'10px'}}><i class="fa-brands fa-twitter"></i></a>
      <a href="#"  style={{textDecoration:'none',color:'red',marginLeft:'10px'}}><i class="fa-brands fa-pinterest"></i></a>

    </div>
  </div>
</footer>

        </div>
  )
}

export default Footer
