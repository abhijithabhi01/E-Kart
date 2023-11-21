import React from 'react'
import { Col,Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removefromwishlist } from '../redux/slices/wishlistSlice';
import { addtocart } from '../redux/slices/cartSlice';

function WishList() {

  const wishlistarray = useSelector((state)=>state.wishlistReducer)
  const dispatch =useDispatch()

  const handlewishlist = (item)=>{
    dispatch(addtocart(item))
    dispatch(removefromwishlist(item.id))
  }






  return (
    <div style={{marginTop:'150px'}}><Row className='m-5'>
    
    {wishlistarray?.length>0?
    wishlistarray.map((item)=>(<Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
    <Card style={{ width: '16rem',boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
  <Card.Img variant="top" src={item.image} style={{height:'210px'}}/>
  <Card.Body>
      <Card.Title>{item.title.slice(0,20)}..</Card.Title>
      <Card.Text>{item.description.slice(0,40)}..
      <p>Price:₹{item.price}</p>
      </Card.Text>
  <div className='d-flex align-items-center justify-content-between'>
        <Button onClick={()=>dispatch(removefromwishlist(item.id))} variant="outline-danger btn rounded"><i class="fa-solid fa-trash text-danger"></i></Button>
        <Button onClick={()=>handlewishlist(item)} variant="outline-danger btn rounded"><i class="fa-thin fa-solid fa-cart-shopping text-success"></i></Button>
  </div>
  </Card.Body>
</Card>
    </Col>)) 
    : <div style={{height:"100vh"}} className='d-flex flex-column justify-content-center align-items-center'>
    <img height={"300px"} src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="ERROR 404" />
    <h4 className='text-dark fw-bolder'>Your Wish List is empty</h4>
    <button className='btn btn-success border rounded mt-3'><Link to={"/"} style={{textDecoration:"none" , color:"white"}}>Back to home</Link></button>
   </div>
     } 

  </Row>
  </div>
  )
}

export default WishList