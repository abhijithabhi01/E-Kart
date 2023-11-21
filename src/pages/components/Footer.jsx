import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{ width: "100%", height: "300px" }} className='d-flex bg-success justify-content-center align-items-center flex-column w-100 mt-5'>
      <div className="footer d-flex justify-content-evenly align-items-center w-100">
        <div className="website" style={{ width: "400px"}}>
          <h4  class="text-danger">
          <i class="fa-sharp fa-solid fa-cart-shopping text-dark fa-flip"></i>{' '}
            E-Kart
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquam autem tenetur dolorum voluptas ipsam doloribus a exercitationem maxime, id dicta suscipit veniam perferendis est, eius ab, minima sint amet?</p>
         
        </div>
        <div className="links d-flex flex-column">
          <h3>Links</h3>
        
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          <Link to={'/WishList'} style={{ textDecoration: 'none', color: 'white' }}>WishList</Link>
          <Link to={'/Cart'} style={{ textDecoration: 'none', color: 'white' }}>Cart</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h3>Guides</h3>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>React</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</Link>
          <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}>Bootswatch</Link>
        </div>
        <div className="contacts">
          <h4>Contact Us</h4>
          <div className="d-flex mb-4">
            <input type="text" className='form-control' placeholder='Enter your email' />
            <button className='btn btn-dark text-white ms-2'>subscribe</button>
          </div>
          <div className="icons d-flex justify-content-evenly">
            <Link to={''} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-twitter fa-2x"></i></Link>
            <Link to={''} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-instagram fa-2x"></i></Link>
            <Link to={''} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-facebook fa-2x"></i></Link>
          </div>
        </div>

      </div>
      <p>Copyright @ 2023 E-Kart. Built with React.</p>

    </div>

  )
}

export default Footer