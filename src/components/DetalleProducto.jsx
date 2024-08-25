import React, { useEffect, useState } from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col,Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import ListaProductos from "./ListaProductos";
import Carrito from './Carrito'; 
import Miniaturas from "./Miniaturas";
import axios from 'axios';

function DetalleProducto(){
 
  const [producto, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  let { id } =useParams();

  console.log("id: "+id)

  //let { text } =useParams();
 
   //console.log(text)
  
  useEffect(()=>{
  fetch(`http://localhost:8080/backend/productoporid/buscador?id=${encodeURIComponent(id)}`)
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
    
  //const [itemCount, setItemCount] = useState(0);
 
  //const addItemToCart = () => {
    //setItemCount(itemCount + 1);
  //};
  const handleClick = (event) => {
     
    event.preventDefault();
     
};



const BtnAgregarProducto = () => {
  const [error, setError] = useState(null);
const handleClick = async () => {
  try {

    const url = "http://localhost:8080/backend/add/producto2?id="+id;

    const response = await axios.get(url);

    setProductos(response.data);

    setError(null);

    window.location.reload();
  } catch (err) {
    
    setError('Hubo un error al realizar la llamada al microservicio');
    console.error(err);
  }
};

   
    return (
      <div>
        <Button onClick={handleClick} variant="primary">Agregar al carrito</Button>
        
      </div>
    );
  };  


  return (
    
    <Row>    
  {  
        <Row>
          {producto?(
         <Col key={producto.idproducto} > 
         <Row>
             <hr/>
             <div className="col-md-4">
              <div className="row">
                  <div className="col-md-2">
                    <Miniaturas/>
                  </div> 
                  <div className="col-md-10">
                     <img variant="top" src={`${process.env.PUBLIC_URL}/imagenes/${producto.imagen}`} alt={producto.descripcionCorta} width="300px" className="img-fluid"></img>
                 </div>
                 </div>
             </div>
             <div className="col-md-3">
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
                 <BtnAgregarProducto key={id} />
                 </div>
             </div>
             <div className='col-md-5'>
            <Carrito/> 
             

             </div>
             <hr/>
         </Row>
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

  }

</Row>
);
  }


 
export default DetalleProducto;