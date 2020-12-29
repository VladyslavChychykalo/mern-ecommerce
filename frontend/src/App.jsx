import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Container>
        <main className="py3">main</main>
      </Container>
      <Footer />
    </>
  );
}

export default App;
