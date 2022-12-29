import styled from 'styled-components';

function Main() {
  return (
    <MainContainer id="Main">
      <MainContents>
        <h1>PORTFOLIO</h1>
        <div className="name">SEONG YU MI . FRONTEND</div>
      </MainContents>
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;
const MainContents = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  h1 {
    padding: 0;
    margin: 27px 0;
    font-weight: 800;
    font-size: 7rem;
  }
  .name {
    font-size: 2.1rem;
  }
`;
