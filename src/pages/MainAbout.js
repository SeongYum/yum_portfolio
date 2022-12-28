import styled from 'styled-components';
import About from '../components/About/About';
import Main from '../components/Main/Main';

function MainAbout() {
  return (
    <Container>
      <Main />
      <About />
    </Container>
  );
}

export default MainAbout;
const Container = styled.div`
  width: 100%;
  background-color: hsla(203, 39%, 81%, 1);
  background-image: radial-gradient(
      at 40% 20%,
      hsla(28, 100%, 74%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 80% 0%, hsla(228, 36%, 57%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsla(13, 41%, 70%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(201, 24%, 77%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(15, 72%, 76%, 1) 0px, transparent 50%);
  background-size: 200% 200%;

  animation: Gradient 7s ease infinite;

  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
