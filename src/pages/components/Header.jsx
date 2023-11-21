import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import WishList from '../WishList';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer) //state represents store
  const Cart = useSelector((state)=>state.cartReducer)
  console.log(Cart);
  return (
   <>
   <Navbar expand="lg" className="bg-success">
      <Container>
        <Navbar.Brand href="#home"><i class="fa-sharp fa-solid fa-cart-shopping text-dark fa-flip"></i><span className='text-danger' style={{fontSize:'25px',fontWeight:'bold'}}>E-Kart</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded border-dark ms-4 mt-2'><Link to={'./WishList'} style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-heart text-danger me-2"></i>WishList<Badge bg="secondary">{wishlist.length}</Badge>
</Link> </Nav.Link>
            <Nav.Link className='btn border rounded border-dark ms-4 mt-2'><Link to={'./cart'} style={{textDecoration:'none',color:'white'}}> <i class="fa-thin fa-solid fa-cart-shopping text-warning me-2"></i>Cart<Badge bg="secondary">{Cart.length}</Badge>
</Link> </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Header