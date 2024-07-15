import React, { useEffect, useState } from "react";
import { Row} from 'react-bootstrap';
import ProductoBasic from "./Producto";
import { useParams } from 'react-router-dom';
 
function ListaProductos(){
    
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  let { id } =useParams();

  console.log(id)

  let { text } =useParams();
 
   console.log(text)
  
  useEffect(()=>{
  fetch('/producto.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    if(id>0){
      const filtrarProducto = data.filter(producto=> parseInt(producto.categoria) === parseInt(id));
      setProductos(filtrarProducto);
    }   
    else{ 
        setProductos(data);    
    }
    setLoading(false);
  })
  .catch(error => {
    console.error('Hubo un problema con la solicitud fetch:', error);
    setError(error);
    setLoading(false);
  } )  
},[id]);

return (
    
  <Row>    
  {productos.map(item=>(    
       ProductoBasic(item)
  ))}

</Row>

);
}


 
export default ListaProductos;