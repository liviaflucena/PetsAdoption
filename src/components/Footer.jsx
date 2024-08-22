import {
    MDBCol,
    MDBContainer,
    MDBFooter,
    MDBIcon,
    MDBRow,
  } from 'mdb-react-ui-kit';

  import './Footer.css';
  
  const Footer = () => {
    return (
      <footer className= "mt-5">
        <MDBFooter
          
          className=" text-lg-start text-muted"
        >
          
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span >Acesse as nossas redes sociais:</span>
            </div>
  
            <div>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="light" fab icon="twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="light" fab icon="instagram" />
            </a>
          </div>
            
          </section>
  
          <section className="">
          <img 
              alt="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp55Yf6NqXm6BfZEJvQns_AJ3f-3a2iXUhWw&s"
              width="55"
              height="55"
              className="d-inline-block align-top"
            />
            <MDBContainer className="text-center text-md-start mt-5">
              <MDBRow className="mt-3">
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <MDBIcon color="light" icon="dog" className="me-3" />
                    Desabandone
                  </h6>
                  <p>
                  A Desabandone é uma empresa dedicada ao bem-estar dos animais, oferecendo um lar para aqueles que precisam através de adoção responsável. Além disso, disponibilizamos utensílios para pets e serviços veterinários. Nossa missão é conectar pessoas e animais, proporcionando um futuro melhor para ambos.
                  </p>
                </MDBCol>
  
                <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contato</h6>
                  <p>
                    <MDBIcon color="light" icon="home" className="me-2" />
                    Guarabira, PB 58.200-000, BR
                  </p>
                  <p>
                    <MDBIcon color="light" icon="envelope" className="me-3" />
                    desabandone@gmail.com
                  </p>
                  <p>
                    <MDBIcon color="light" icon="phone" className="me-3" /> 083 3271-5050
                  </p>
                </MDBCol>
              </MDBRow>
              </MDBContainer>
            
          </section>
  
          <div
            className="text-center p-4"
            style={{ backgroundColor: 'rgb(18, 32, 133)', color: 'rgb(252, 252, 252)' }}
          >
            © 2024 Copyright Desabandone.
          </div>
        </MDBFooter>
      </footer>
    );
  };
  
  export default Footer;
  