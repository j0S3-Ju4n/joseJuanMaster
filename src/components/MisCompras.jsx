import React, { useEffect, useState } from "react"; 
import { Card, Row, Col, Container } from 'react-bootstrap'; 
import { Link, useNavigate } from 'react-router-dom'; 
import ListGroup from 'react-bootstrap/ListGroup';

function MisCompras(){
    
  const [compras, setCompras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

 useEffect(()=>{
  fetch('http://localhost:8080/backend/miscompras/buscador')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => { 
    setCompras(data);
    setLoading(false);
  })
  .catch(error => {
    console.error('Hubo un problema con la solicitud fetch:', error);
    setError(error);
    setLoading(false);
  } )  
},[]);

 
 return (
  <div class="container">
  <Row>
 
        {compras?.map(item=>( 
            <Col key={item.idHistorialCompra} md={3} className="mb-3"> 
    <Card border="primary" style={{ width: '23rem' }}>
    <Card.Header>{item.fecha} / <b>Total: ${item.total}</b></Card.Header>
    <Card.Body>    
      <Card.Text>
      <Row>
 
      {item.productos?.map(producto=>( 
      <Row key={producto.idProducto} md={3} className="mb-3">    
        <Card border="primary" style={{ width: '20rem' }}> 
        
          <Card.Body> 
          <Link to={`/producto/${producto.idProducto}`}>
          <Card.Text>
          
            <row>
           
              <div className="col-md-12">
              <img variant="top" src={`${process.env.PUBLIC_URL}/imagenes/${producto.imagen}`} width="40px" className="img-fluid"></img>
              </div>
              </row>
              
          </Card.Text>
          </Link>
          </Card.Body>
          <ListGroup className="list-group-flush">    
        <ListGroup.Item> {producto.nombre}</ListGroup.Item>
        <ListGroup.Item>Precio: ${producto.precio}</ListGroup.Item>
        <ListGroup.Item>Cantidad: {producto.cantidad}</ListGroup.Item>
    </ListGroup>
        </Card>      
      </Row>
     ))}
  </Row>
      </Card.Text>
    </Card.Body>
    </Card>
    </Col>
     ))}
  </Row>
  </div>
 ) 

  }

  

export default MisCompras;
