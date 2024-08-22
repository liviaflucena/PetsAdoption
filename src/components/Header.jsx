import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary"  fixed="top">
        <Container>
          <Navbar.Brand href="#home">
          <img 
              alt="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp55Yf6NqXm6BfZEJvQns_AJ3f-3a2iXUhWw&s"
              width="55"
              height="55"
              className="d-inline-block align-top"
            /></Navbar.Brand>
            <Navbar.Brand className='2'> Desabandone </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-navbar-toggle" />

           <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Sobre</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
     
    </header>
  );
};

export default Header;



      
        