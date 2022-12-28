import styled from 'styled-components';
import { IoCall, IoMail } from 'react-icons/io5';
function Footer() {
  return (
    <FooterContainer>
      <FooterContents>
        <div className="contectBox">
          <h2>How to Contact</h2>
          <div className="contectContents">
            <p>
              <IoCall /> 010-3831-6930
            </p>
            <p>
              <IoMail /> dbal6930@gmail.com
            </p>
          </div>
        </div>
        <div className="copyright">
          <h2>SEONG YU MI</h2>
          <p>@Copyright Kim hee su. All rights reserved.</p>
        </div>
      </FooterContents>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  background-color: #d8a19f;
  display: flex;
  justify-content: center;
`;
const FooterContents = styled.header`
  padding: 40px 35px;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  color: #ffffff;
  h2 {
    font-size: 2rem;
    margin: 0;
  }
  .contectBox {
    display: flex;
    flex-direction: column;
    text-align: left;
    .contectContents {
      font-size: 1.2rem;
      margin: 30px 0;
      p {
        display: flex;
        margin: 20px 0;
        gap: 10px;
      }
    }
  }
  .copyright {
    text-align: right;
    margin: 0;
    p {
      margin: 3px 0;
    }
  }
`;
