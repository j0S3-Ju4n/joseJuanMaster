import React, { Component, useEffect, useState } from "react";
 
import { Table, Image,Row,Button } from 'react-bootstrap'; // Importa componentes de Bootstrap necesarios

import { Link, useParams } from 'react-router-dom';

import axios from 'axios';

function Carrito(){
    
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  let { id } =useParams();
 
  //let url="";

  //if (id === undefined) {
   let url = "http://localhost:8080/backend/carrito/buscador";
  //}
  //if(id>0 ){
    //console.log("agrega producto "+id)
    //url = "http://localhost:8080/backend/add/producto?id="+id;
  //}
 
  useEffect(()=>{
    fetch(url)
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
  },[]);



  const BtnRestarProducto = ({ id }) => {

    // Estado para manejar el error
    const [error, setError] = useState(null);
  
     // Función para manejar el clic en el botón
  const handleClick = async () => {
    try {
      // Construye la URL usando el id
      const url = `http://localhost:8080/backend/carrito/delete/producto?id=`+id;
      // Llamada al microservicio
      const response = await axios.get(url);
      // Actualiza el estado con la respuesta
      setProductos(response.data);
      // Limpia cualquier error previo
      setError(null);
    } catch (err) {
      // Manejo de errores
      setError('Hubo un error al realizar la llamada al microservicio');
      console.error(err);
    }
  };


      return (
        <div>
          <Button onClick={handleClick} variant="primary">-</Button>
          
        </div>
      );
    };
       

    const BtnAgregarProducto = ({ id }) => {

      // Estado para manejar el error
      const [error, setError] = useState(null);
    
       // Función para manejar el clic en el botón
    const handleClick = async () => {
      try {
        // Construye la URL usando el id
        const url = `http://localhost:8080/backend/add/producto?id=`+id;
        // Llamada al microservicio
        const response = await axios.get(url);
        // Actualiza el estado con la respuesta
        setProductos(response.data);
        // Limpia cualquier error previo
        setError(null);
      } catch (err) {
        // Manejo de errores
        setError('Hubo un error al realizar la llamada al microservicio');
        console.error(err);
      }
    };
  
  
        return (
          <div>
            <Button onClick={handleClick} variant="primary">+</Button>
            
          </div>
        );
      };   

return (
  <div className="container mt-4">
      
    <h6>Carrito de Compras</h6>
    <Table striped bordered hover>

      <tbody>
        {productos.map(item => (
          <tr key={item.id}>
            
            <td><div className="circle-container"> <Link to={`/producto/${item.idProducto}`}><img src={`${process.env.PUBLIC_URL}/imagenes/${item.imagen}`} 
            width="20px" className="circle-img" alt={item.name} thumbnail="true" /></Link></div></td>
            <td><Link to={`/producto/${item.idProducto}`}>{item.nombre}</Link></td>
            <td>${item.precio.toFixed(2)}  </td>
            <td>{item.cantidad}</td>
            <td>
            <BtnAgregarProducto key={id} id={item.idProducto} />
              </td>
              <td>
                <BtnRestarProducto key={id} id={item.idProducto} />
              </td>    
          </tr>
        ))}
      </tbody>
    </Table>
    <Button variant="warning">Finalizar compra</Button>
  </div>
);
  

}

export default Carrito;