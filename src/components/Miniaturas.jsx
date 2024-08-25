import React, { useEffect, useState } from "react"; 
import { useParams } from 'react-router-dom';
import { Col} from 'react-bootstrap';

function Miniaturas()
{
    const [producto, setProductos] = useState([null]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

   
  let { id } =useParams();
   
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

    const minuatura = producto.miniaturas;
 
    
    return(
        <div className="Row">
            {
                minuatura?.map(item=>(
                    <Col key={item.idMiniatura} >
                        <div className='row'>
                        <img variant="top" src={`${process.env.PUBLIC_URL}/imagenes/${item.imagen}`} width="50px" className="img-fluid"></img>
                        </div>
                    </Col>
                ))
            }           
        </div>
    )    
}
export default  Miniaturas;