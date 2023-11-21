import React from 'react'
import { Col,Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addtowishlist } from '../redux/slices/wishlistSlice';
import { addtocart } from '../redux/slices/cartSlice';

function Home() {
    const data =useFetch('https://fakestoreapi.com/products')
    const dispatch = useDispatch()
  return (
    <Row className='m-5'>
      {data?.length>0?
      data.map((item)=>(   <Col className='mb-5 mt-5' sm={12} md={6} lg={4} xl={3}>
      <Card style={{ width: '16rem',height:'27rem',boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
    <Card.Img variant="top" src={item.image} style={{height:'210px'}}/>
    <Card.Body>
      <Card.Title>{item.title.slice(0,20)}..</Card.Title>
      <Card.Text>{item.description.slice(0,40)}..
      <h4>Price:₹{item.price}</h4>
      </Card.Text>
    <div className='d-flex align-items-center justify-content-between'>
          <Button onClick={()=>dispatch(addtowishlist(item))} variant="outline-danger btn rounded"><i class="fa-solid fa-heart text-danger"></i></Button>
          <Button onClick={()=>dispatch(addtocart(item))} variant="outline-danger btn rounded"><i class="fa-thin fa-solid fa-cart-shopping text-success"></i></Button>
    </div>
    </Card.Body>
  </Card>
      </Col>))
     
        :<p>Nothing to Display</p>}
    </Row>
  )
}

export default Home