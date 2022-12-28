import styled from 'styled-components';

function Main() {
  return (
    <MainContainer>
      <MainContents>
        <h1>PORTFOLIO</h1>
        <div className="name">SEONG YU MI / FRONTEND</div>
      </MainContents>
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
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
const MainContents = styled.header`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 900px;
  margin: 0 auto;
  border-radius: 50%;

  /* background-color: #bcd3e2;
  background-image: radial-gradient(
      at 40% 20%,
      hsla(28, 100%, 74%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsla(13, 41%, 70%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(201, 24%, 77%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(15, 72%, 76%, 1) 0px, transparent 50%);

  background-size: 250% 250%;

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
  } */

  h1 {
    padding: 0;
    margin: 10px 0;
    font-weight: 800;
    font-size: 8rem;
  }
  .name {
    font-size: 2.7rem;
  }
`;
