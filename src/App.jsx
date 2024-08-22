import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header></Header>
      <Container>
      <Main></Main>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
