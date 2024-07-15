import React, { Component, useEffect, useState } from "react";
 
import { Table, Image } from 'react-bootstrap'; // Importa componentes de Bootstrap necesarios

function Carrito(){
    
  const [productos, setProductos] = useState([]);
 
 useEffect(()=>{
  fetch('/productosComprados.json',{
    method:'GET',
    cache:'no-cache',
    headers:{
      'Content-Type':'application/json'
    }
  })
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
 
  } 
,[])  
 },[]);
       


return (
  <div className="container mt-4">
      
    <h6>Carrito de Compras</h6>
    <Table striped bordered hover>

      <tbody>
        {productos.map(item => (
          <tr key={item.id}>
            <td><div className="circle-container"><img src={`${process.env.PUBLIC_URL}/imagenes/${item.imagen}`} 
            width="20px" className="circle-img" alt={item.name} thumbnail="true" /></div></td>
            <td>{item.nombre}</td>
            <td>${item.precio.toFixed(2)} +</td>
            <td>{item.cantidad}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    
  </div>
);
  }



export default Carrito;