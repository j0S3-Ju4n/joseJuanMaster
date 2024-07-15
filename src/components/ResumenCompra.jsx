import { Row, Col,Form } from 'react-bootstrap';
import useTotalCalculator from './useTotalCalculator';

function ResumenCompra(){

    const initialProducts = [
      { id: 1, name: 'Producto 1', price: 5000.00, quantity: 1 },
      { id: 2, name: 'Producto 2', price: 80.00, quantity: 1 }
    ];
   
  
    const totalProducto = initialProducts.length;

      // Fook personalizado para sacar la suma total de los productos
    const { products, total, updateQuantity } = useTotalCalculator(initialProducts);

    return (   
        <Form inline>
        <Row  xs="auto">
            <div >
          <Col xs="auto">
            <row>{totalProducto} / ${total}</row>
          </Col>
          </div>
        </Row>
        </Form>
    )
}

export default ResumenCompra;