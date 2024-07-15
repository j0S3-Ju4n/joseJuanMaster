import React, { useState } from 'react';
import { Row, Col,Button,Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 



function BuscarProducto(){
  
      const [inputText, setInputText] = useState('');
      const navigate = useNavigate();
    
      const handleInputChange = (e) => {
        setInputText(e.target.value);
      };
    
      const handleClick = () => {
        // Redirigir a la nueva ruta con el texto como parámetro
        navigate.push(`/result/${encodeURIComponent(inputText)}`);
      };

    return (
        <Form inline>
        <Row>
          <Col xs="auto">
           
              <input type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Ingresa texto..."
        className='form-control' ></input>
             
          </Col>
          <Col xs="auto">
          <Link to={`/result/${inputText}`}>
            <button type="button"  class="btn btn-primary" >Detalles</button>
          </Link>
             
          </Col>
        </Row>
      </Form>
    )
}

export default BuscarProducto;