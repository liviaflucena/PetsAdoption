import { Carousel,  Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './Carrosel.css';

const Carrosel = ({ itens = [] }) => {
  return (
    
      <Carousel controls={false}>
      
        {itens.map((item, i) => {
          return (
            <Carousel.Item key={i}>
              <Image fluid src={item.imagemUrl} />
              <Carousel.Caption>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
   
  );
};

Carrosel.propTypes = {
  itens: PropTypes.array,
};

export default Carrosel;
