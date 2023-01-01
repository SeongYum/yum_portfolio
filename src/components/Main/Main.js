import styled from 'styled-components';
import media from './../../styles/media';

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
    ${media.large`
     font-size: 5rem;
     margin: 20px 0;
       `}
    ${media.medium`
     font-size: 3rem;
     margin: 15px 0;
       `}
    ${media.small`
     font-size: 2.3rem;
     margin: 10px 0;
       `}
  }
  .name {
    font-size: 2.1rem;
    ${media.large`
     font-size: 1.6rem;
       `}
    ${media.medium`
     font-size: 1.1rem;
       `}
    ${media.small`
     font-size: 0.8rem;
      `}
  }
`;
