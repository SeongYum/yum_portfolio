import styled from 'styled-components';
import { IoCall, IoMail } from 'react-icons/io5';
import media from './../../styles/media';

function Footer() {
  return (
    <FooterContainer>
      <FooterContents>
        <div className="contectBox">
          <h3>How to Contact</h3>
          <div className="contectContents">
            <div>
              <IoCall /> 010-3831-6930
            </div>
            <div
              className="mail"
              onClick={() => window.open('mailto: dbal6930@gmail.com')}
              aria-hidden="true"
            >
              <IoMail />
              dbal6930@gmail.com
            </div>
          </div>
        </div>
        <div className="copyRight">
          <h3>Seong Yu mi</h3>
          <p>© 2023. Seong Yu mi. All rights reserved.</p>
        </div>
      </FooterContents>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  background-color: #d8a19f;
`;
const FooterContents = styled.header`
  padding: 40px 35px;
  margin: 0 auto;
  width: 100%;
  max-width: 1140px;
  color: #ffffff;
  h3 {
    font-size: 2rem;
    margin: 0;
    ${media.medium`
       font-size: 1.7rem;
       text-align:center;
       `}
    ${media.small`
       font-size: 1.4rem;
       `}
  }
  .contectBox {
    display: flex;
    flex-direction: column;
    justify-content: last baseline;
    ${media.medium`
      justify-content: center;
      align-items: center;
       `}
    ${media.small`
      justify-content: center;
       `}
    .contectContents {
      margin-top: 10px;
      font-size: 1.2rem;
      ${media.medium`
       font-size: 1rem;
       margin-top: 0;
       `}
      ${media.small`
       font-size: 0.95rem;
       margin-top: 0;
       `}
      div {
        display: flex;
        margin: 15px 0;
        gap: 10px;
        ${media.medium`
          justify-content: center;
          align-items: center;
       `}
      }
      .mail {
        width: 250px;
        cursor: pointer;
        white-space: nowrap;
        :hover {
          transform: scale(1.07);
          transition: 0.5s;
        }
      }
    }
  }
  .copyRight {
    text-align: right;
    p {
      margin-top: 10px;
      ${media.medium`
       font-size: 0.9rem;
       text-align:center;
       `}
    }
  }
`;
