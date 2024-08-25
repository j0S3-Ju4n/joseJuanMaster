import React, { Component, useEffect, useState } from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap'; 
import Categoria from "./Categoria";

function ListarCategorias(){
    
  const [categorias, setCategoria] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  
  useEffect(()=>{
  fetch('http://localhost:8080/backend/categoria/buscador')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    setCategoria(data);
    setLoading(false);
  })
  .catch(error => {
    console.error('Hubo un problema con la solicitud fetch:', error);
    setError(error);
    setLoading(false);
  } 
  ,[])  
},[]);

  return categorias;
}

function ListaCategorias(){
    
    const Categorias = ListarCategorias() ;
   
    return (
      
        <Row>    
        {Categorias.map(item=>(    
            Categoria(item)
        ))}  
     </Row>
     
    );
  }
  
  export default ListaCategorias;

