import styled from 'styled-components';
import media from './../../styles/media';

function SkillsBox({ skill, idx }) {
  const isEven = (idx + 1) % 2 === 0;
  return (
    <Container>
      <div className={isEven ? 'right' : 'left'}>
        <SkillsContentsBox>
          <div className="skillstitle">{skill.title}</div>
          <div className="skillsContents">
            {skill.contents.map((content, idx) => (
              <div key={idx.toString()} className="contents">
                {content}
              </div>
            ))}
          </div>
        </SkillsContentsBox>
      </div>
    </Container>
  );
}

export default SkillsBox;

const Container = styled.div`
  margin: 40px 25px;
  display: flex;
  flex-direction: column;
  .right {
    display: flex;
    justify-content: right;
  }
  .left {
    display: flex;
    justify-content: left;
  }
`;

const SkillsContentsBox = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 1.7rem;
  width: 40.5rem;
  padding: 2.2rem;
  font-size: 1.04rem;
  ${media.medium`
     font-size: 1rem;
     padding: 2rem;
       `}
  ${media.small`
     font-size: 0.95rem;
       `}
    .skillstitle {
    font-size: 1.5rem;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-weight: 600;
    color: #eb8e6c;
    border-bottom: 1.5px solid transparent;
    border-image: linear-gradient(to right, #fd7e20, #588fc8);
    border-image-slice: 1;
    ${media.medium`
     font-size: 1.25rem;
       `}
    ${media.small`
     font-size: 1.1rem;
       `}
  }
  .skillsContents {
    .contents {
      line-height: 1.4rem;
    }
  }
`;
