import './App.css';
import styled from 'styled-components';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainAbout from './pages/MainAbout';

function App() {
  return (
    <Container>
      <Header />
      <MainAbout />
      <Footer />
    </Container>
  );
}

export default App;
const Container = styled.div`
  width: 100%;
`;
