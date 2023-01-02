import styled from 'styled-components';
import { projects } from '../../data/data';
import ProjectsBox from './ProjectsBox';
import media from './../../styles/media';

function Projects() {
  return (
    <ProjectsContainer id="PROJECTS">
      <ProjectsContents>
        <div className="title">
          <h2>PROJECTS</h2>
        </div>
        <div className="projectsContents">
          {projects.map((item, idx) => (
            <ProjectsBox
              {...{ item, idx }}
              key={idx.toString()}
              project={item}
            />
          ))}
        </div>
      </ProjectsContents>
    </ProjectsContainer>
  );
}

export default Projects;

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eead96;
`;
const ProjectsContents = styled.div`
  width: 100%;
  max-width: 1140px;
  padding: 70px 35px;
  ${media.medium`
      padding: 58px 30px;
       `}
  ${media.small`
      padding: 40px 20px;
       `}
  .title {
    h2 {
      padding: 50px 40px;
      font-size: 2.5rem;
      color: #b2cae0;
      text-shadow: 4px 4px 0px #9f2b3e;
      ${media.medium`
         text-align:center;
         font-size: 2.2rem;
         padding: 40px 30px;
       `}
      ${media.small`
         font-size: 1.9rem;
         padding: 30px 20px;
       `}
    }
  }
`;
