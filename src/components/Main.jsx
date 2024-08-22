import itens from '../datasets/Carrosel';
import Carrosel from './Carrosel';
import ServicosCard from './ServicosCard';
import AnimaisTable from './AnimaisTable';

import './Main.css';
import animais from '../datasets/Animais';
import servicos from '../datasets/Servicos';
import { Container } from 'react-bootstrap';


const Main = () => {

  return (
    <main>
      <Container>
      <Carrosel itens={itens}></Carrosel>
      <ServicosCard servicos={servicos}></ServicosCard>
      <AnimaisTable animais={animais}></AnimaisTable>
      </Container>
      
    </main>
  );
};

export default Main;