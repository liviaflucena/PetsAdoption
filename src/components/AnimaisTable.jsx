import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';


const AnimaisTable = ({ animais = [] }) => {
  return (
    <Table striped bordered hover className="animais-table">
      <thead>
        <tr>
          <th>Id:</th>
          <th>Espécie:</th>
          <th>Animal:</th>
          <th>Idade:</th>
        </tr>
      </thead>
      <tbody>
        {animais.map((animal, i) => {
          return (
            <tr key={animal.id}>
              <td>{animal.id}</td>
              <td>{animal.especie}</td>
              <td>{animal.anima}</td>
              <td>{animal.idade}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

AnimaisTable.propTypes = {
  animais: PropTypes.array,
};

export default AnimaisTable;
