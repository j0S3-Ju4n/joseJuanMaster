import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BuscarProducto from '../components/Buscar';
import { Outlet, Link } from 'react-router-dom';
import ResumenCompra from '../components/ResumenCompra';
 
function NavbarExample(){
    return(
        <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/ListaProductos" >Productos</Nav.Link>
            <Nav.Link as={Link} to="/ListaCategorias" >Categorias</Nav.Link>
            <Nav.Link as={Link} to="/MisCompras" >Mis compras</Nav.Link>
          </Nav>
          <BuscarProducto/>
          <Navbar.Brand as={Link}><ResumenCompra /></Navbar.Brand> 
        </Navbar.Collapse>
       
      </Container>
    </Navbar>

    <section>
            <Outlet></Outlet>
    </section>    
   
    </>
  );
}

export default NavbarExample;