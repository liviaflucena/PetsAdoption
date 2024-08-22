import { Button, Card, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './ServicosCard.css';


const ServicosCard = ({ servicos = [] }) => {
  return (
    <Row className="p-2 justify-content-center d-flex">
      {servicos.map((servico, i) => {
        return (
          <Col key={i} xs={12} sm={12} md={4} lg={4} className="mb-4 d-flex align-items-stretch">
            <Card>
              <Card.Img variant="top" src={servico.imagemUrl} />
              <Card.Body>
                <Card.Title>{servico.titulo}</Card.Title>
                <Card.Text>{servico.descricao}</Card.Text>
                <Button variant="primary">Adquirir</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

  
ServicosCard.propTypes = {
  servicos: PropTypes.array,
};

export default ServicosCard;