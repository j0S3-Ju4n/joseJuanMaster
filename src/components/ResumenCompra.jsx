import { Row, Col,Form } from 'react-bootstrap';
import useTotalCalculator from './useTotalCalculator';
import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';

function ResumenCompra(){

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
 
  let { id } =useParams();

  useEffect(()=>{
    fetch("http://localhost:8080/backend/carrito/buscador")
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
  
          setProductos(data);    
     
    })
    .catch(error => {
      console.error('Hubo un problema con la solicitud fetch:', error);
      setError(error);
      setLoading(false);
    } )  
  },[id]);
  
// Calcular el total por producto
const calcularTotalPorProducto = (productos) => {
  return productos.map(producto => ({
      ...producto,
      total: producto.precio * producto.cantidad
  }));
};

// Calcular el total de la venta
const calcularTotalVenta = (productos) => {
  return productos.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
};

const productosConTotales = calcularTotalPorProducto(productos);
const totalVenta = calcularTotalVenta(productos);
  
    const totalProducto = productos.length;
 

    return (   
        <Form inline>
        <Row  xs="auto">
            <div >
          <Col xs="auto">
            <row><Link to={'carrito'}>{totalProducto} / ${totalVenta}</Link></row>
          </Col>
          </div>
        </Row>
        </Form>
    )
}

export default ResumenCompra;