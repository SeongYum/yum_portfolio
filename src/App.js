import './App.css';
import styled from 'styled-components';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainAbout from './pages/MainAbout';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <Container>
      <Header />
      <MainAbout />
      <Skills />
      <Projects />
      <Footer />
    </Container>
  );
}

export default App;
const Container = styled.div`
  width: 100%;
`;
