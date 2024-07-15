import React, { useEffect, useState } from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col,Button } from 'react-bootstrap';
import Carrito from './Carrito';
import { Link, useParams } from 'react-router-dom';
import ListaProductos from "./ListaProductos";
import Miniaturas from "./Miniaturas";
 
function DetalleProducto(){
    
    const [producto, setProductos] = useState([null]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

   
  let { id } =useParams();
 
 
    
    useEffect(()=>{
    fetch('/producto.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const filtrarProducto = data.find(producto=> parseInt(producto.id) === parseInt(id));
      setProductos(filtrarProducto);
      setLoading(false);
    })
    .catch(error => {
      console.error('Hubo un problema con la solicitud fetch:', error);
      setError(error);
      setLoading(false);
    })  
  },[id]);

  const [itemCount, setItemCount] = useState(0);
 
  const addItemToCart = () => {
    setItemCount(itemCount + 1);
  };


  return (
    <Row>
        {producto?(
         <Col key={producto.id} > 
         <div className='row'>
             <hr/>
             <div className="col-md-5">
              <div className="row">
                  <div className="col-md-2">
                   <Miniaturas/>
                  </div> 
                  <div className="col-md-10">
                     <img variant="top" src={`${process.env.PUBLIC_URL}/imagenes/${producto.imagen}`} width="300px" className="img-fluid"></img>
                 </div>
                 </div>
             </div>
             <diV className="col-md-3">
                 <div className="row">
                     <p className='h1'>{producto.nombre}</p>
                 </div>
                 <hr/>
                 <div className="row">
                     <p className='h4'>{producto.descripcionCorta} </p>
                 </div>
                 <hr/>
                 <div className="row">
                     <p className='h4'>{producto.precio}</p>
                 </div>
                 <hr/>
                 <div className="row">
                     <p className='h4'>{producto.empresa} </p>
                 </div>
                 
                 <hr/>
                 <div className="row">
                 <Link to={`/agregar/${producto.id}`}>
                 <Button  variant="primary">Agregar al carrito </Button>
                </Link> 
                 </div>
             </diV>
             <div className='col-md-4 '>
            
             <Carrito/>
            
                
             </div>
             <hr/>
         </div>
         <div className="row">
           <p className='h4'> {producto.descripcionLarga}</p>
         </div>
         <div className="row">
            <hr/>
            <ListaProductos/> 
         </div>
 
         </Col>
        ):""} 
    </Row> 
);
  }


 
export default DetalleProducto;