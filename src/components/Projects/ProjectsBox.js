import styled from 'styled-components';
import { IoLogoGithub, IoLink } from 'react-icons/io5';
import media from './../../styles/media';

function ProjectsBox({ project }) {
  return (
    <Container>
      <ProjectsContentsBox>
        <div className="titleBox">
          <div className="projecttitle">{project.title}</div>
          <div className="date">{project.date}</div>
        </div>
        <div className="projectContents">
          <div className="imageBox">
            <img src={project.img} alt={project.title} />
          </div>
          <div className="content">
            <div className="aboutBox">
              {project.about.map((about, idx) => (
                <div key={idx.toString()} className="about">
                  {about}
                </div>
              ))}
            </div>
            <div className="skillsBox">
              {project.skills.map((skills, idx) => (
                <div key={idx.toString()} className="skills">
                  {skills}
                </div>
              ))}
            </div>
            <div className="todoBox">
              <div className="title">✨ 작업 부분</div>
              {project.todo.map((todo, idx) => (
                <div key={idx.toString()} className="todo">
                  {todo}
                </div>
              ))}
            </div>
            <div className="learnedBox">
              <div className="title">느낀점</div>
              {project.learned.map((learned, idx) => (
                <div key={idx.toString()} className="learned">
                  {learned}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="iconBox">
          {project?.github && (
            <button
              className="gitBox"
              onClick={() => window.open(project.github)}
            >
              <div className="git">
                <IoLogoGithub />
                GITHUB
              </div>
            </button>
          )}
          {project?.website && (
            <button
              className="linkBox"
              onClick={() => window.open(project.website)}
            >
              <div className="link">
                <IoLink />
                URL
              </div>
            </button>
          )}
        </div>
      </ProjectsContentsBox>
    </Container>
  );
}

export default ProjectsBox;

const Container = styled.div`
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${media.medium`
   padding: 2rem 0;
     `}
  ${media.small`
   padding: 1.5rem 0;
      `}
`;

const ProjectsContentsBox = styled.div`
  width: 100%;
  border-radius: 2rem;
  padding: 3.5rem 1.8rem;
  background-color: #ffffff;
  .titleBox {
    padding-bottom: 2rem;
    text-align: center;
    .projecttitle {
      font-size: 1.7rem;
      font-weight: 600;
      padding-bottom: 10px;
      ${media.medium`
       font-size: 1.55rem;
     `}
      ${media.small`
      font-size: 1.27rem;
      `}
    }
    .date {
      color: #767676;
      ${media.medium`
       font-size: 0.95rem;
     `}
      ${media.small`
       font-size: 0.9rem;
      `}
    }
  }
  .projectContents {
    display: flex;
    justify-content: center;
    align-items: center;
    ${media.medium`
    flex-direction: column;
   `}
    .imageBox {
      width: 48%;
      ${media.medium`
        width: 100%;
        padding: 0 0 1rem 0;
        border-bottom: 1.5px solid transparent;
        border-image: linear-gradient(to right, #fd7e20, #588fc8);
        border-image-slice: 1;
      `}
      img {
        width: 100%;
      }
    }
    .content {
      line-height: 1.45rem;
      width: 50%;
      margin-left: 1rem;
      font-size: 1.07rem;
      ${media.large`
        font-size: 1rem;
      `}
      ${media.medium`
         width: 100%;
         padding: 1rem 0 0 0;
       `}
      ${media.small`
         font-size: 0.9rem;
       `}
      .title {
        font-weight: 600;
        font-size: 1.1rem;
        padding-bottom: 3px;
        ${media.small`
         font-size: 1rem;
       `}
      }
      .skillsBox {
        margin-top: 3px;
        display: flex;
        flex-wrap: wrap;
        .skills {
          margin: 3px;
          background-color: #dae2e9;
          padding: 2px 8px;
          border-radius: 9px;
        }
      }
      .todoBox {
        margin: 10px 0;
        padding: 10px;
        border-radius: 10px;
        background-color: #f3f3f3;
      }
    }
  }
  .iconBox {
    margin-top: 1.7rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    button {
      width: 12rem;
      border: 0.15rem solid transparent;
      border-radius: 30px;
      background-image: linear-gradient(#ffffff, #ffffff),
        linear-gradient(
          to right,
          hsla(228, 36%, 57%, 1),
          hsla(355, 100%, 93%, 1)
        );
      background-origin: border-box;
      background-clip: content-box, border-box;
      ${media.small`
         width: 8rem;
       `}
      :hover {
        border: 0.15rem solid transparent;
        border-radius: 30px;
        background-image: radial-gradient(
            at 40% 20%,
            hsla(28, 100%, 74%, 1) 0px,
            transparent 50%
          ),
          radial-gradient(
            at 80% 0%,
            hsla(228, 36%, 57%, 1) 0px,
            transparent 50%
          ),
          radial-gradient(
            at 0% 50%,
            hsla(355, 100%, 93%, 1) 0px,
            transparent 50%
          ),
          radial-gradient(
            at 80% 50%,
            hsla(13, 41%, 70%, 1) 0px,
            transparent 50%
          ),
          radial-gradient(
            at 0% 100%,
            hsla(22, 100%, 77%, 1) 0px,
            transparent 50%
          ),
          radial-gradient(
            at 80% 100%,
            hsla(201, 24%, 77%, 1) 0px,
            transparent 50%
          ),
          radial-gradient(at 0% 0%, hsla(15, 72%, 76%, 1) 0px, transparent 50%);
        background-origin: border-box;
        background-clip: content-box, border-box;
        cursor: pointer;
        color: #ffffff;
        background-size: 200% 200%;

        animation: Gradient 3s ease infinite;

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
      }
      .git,
      .link {
        justify-content: center;
        display: flex;
        padding: 0.5rem 0px;
        align-items: center;
        gap: 0.3rem;
        font-size: 1rem;
        ${media.small`
         font-size: 0.87rem;
       `}
        svg {
          width: 1.7rem;
          height: 1.7rem;
          ${media.small`
           width: 1.4rem;
           height: 1.4rem;
       `}
        }
      }
    }
  }
  @keyframes scroll {
    to {
      transform: translateX(-50%);
    }
  }
`;
