import React, { useEffect, useState } from "react"; 
import { Card, Row, Col } from 'react-bootstrap'; 
import { Link, useNavigate } from 'react-router-dom'; 

function MisCompras(){
    
  const [compras, setCompras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

 useEffect(()=>{
  fetch('/compras.json')
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
  <Row>
 
        {compras?.map(item=>( 
            <Col key={item.id} md={3} className="mb-3"> 
    <Card border="primary" style={{ width: '23rem' }}>
    <Card.Header>{item.fecha}</Card.Header>
    <Card.Body>    
      <Card.Text>
      <Row>
 
      {item.productos?.map(producto=>( 
      <Row key={producto.id} md={3} className="mb-3">    
        <Card border="primary" style={{ width: '20rem' }}> 
          <Card.Body> 
          <Card.Text>
          <Link to={`/producto/${producto.id}`}>
            <row>
           
              <div className="col-md-12">
              <img variant="top" src={`${process.env.PUBLIC_URL}/imagenes/${producto.imagen}`} width="40px" className="img-fluid"></img>
              </div>
             
              </row>
              <row>
              <div className="col-md-12">
                {producto.nombre} {producto.estatus}
              </div>
              </row>
              </Link>
          </Card.Text>
          </Card.Body>
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
 ) 

  }

  

export default MisCompras;
