import React, { useEffect, useState } from "react";
import { Row} from 'react-bootstrap';
import ProductoBasic from "./Producto";
import { useParams } from 'react-router-dom';
 
function ListaProductos(){
    
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  let { id } =useParams();

  let {text} = useParams();

   let url = `http://localhost:8080/backend/producto/buscador`;

   if(id !== undefined && id!==null){
    url = `http://localhost:8080/backend/producto/categoria/buscador?idCategoria=${encodeURIComponent(id)}`;
    console.log(id)
   }
   if(text !== undefined && text!==null){
    url =`http://localhost:8080/backend/productoporText/buscador?text=${encodeURIComponent(text)}`
    console.log(url)
   }
  
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
    setLoading(false);
  })
  .catch(error => {
    console.error('Hubo un problema con la solicitud fetch:', error);
    setError(error);
    setLoading(false);
  } )  


},[id,text]);



return ( 
  <Row>    
  {productos.map(item=>(        
   ProductoBasic(item)
  ))}
</Row>

);
}


 
export default ListaProductos;