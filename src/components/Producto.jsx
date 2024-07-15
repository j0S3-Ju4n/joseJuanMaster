import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
 

function ProductoBasic(item) {


  return (
    <Col key={item.id} md={3} className="mb-3"> 
    <Card style={{ width: '18rem' }}>
      <div className='mx-auto'> 
    <img  variant="top" src={`${process.env.PUBLIC_URL}/imagenes/${item.imagen}`} width="100px" className="img-fluid" />
    </div>
    <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
        {item.descripcionCorta}
        </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">    
        <ListGroup.Item> {item.precio}</ListGroup.Item>
        <ListGroup.Item>{item.empresa}</ListGroup.Item>
    </ListGroup>
    <Card.Body>   
      <Link to={`/producto/${item.id}`}>
    <button type="button"  class="btn btn-primary" >Detalles</button>
    </Link>
    </Card.Body>
    </Card>
    </Col>
  )
 
}

export default ProductoBasic;