import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useNavigate } from 'react-router-dom'; 

function CategoriaBase(item) {
    return (
      <Card style={{ width: '18rem' }}>
         <Link to={`/categoria/${item.idcategoria}`}>
       <div className='mx-auto'> 
            <img  variant="top" src={`${process.env.PUBLIC_URL}/imagenes/${item.imagen}`} width="150px" className="img-fluid" />
        </div>
        <Card.Body>
 
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{item.nombre}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
       

        </Card.Body>
        </Link>
      </Card>
    );
  }
  
  export default CategoriaBase;