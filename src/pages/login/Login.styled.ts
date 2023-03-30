import styled from 'styled-components';

const View = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f6f7f8;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 390px;
  border-radius: 8px;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  box-sizing: border-box;
  padding: 35px 30px 63px 30px;
`;

const Link = styled.a`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-decoration: underline;
  color: #1f2a4b;
`;

const Title = styled.h1`
  color: #1f2a4b;
  font-size: 22px;
  font-weight: bold;
  margin-top: 25px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #a1a4ad;
  margin-top: 6px;
  margin-bottom: 14px;
`;

const LinkContainer = styled.div`
  margin-top: 21px;
  margin-bottom: 52px;
`;

export { Content, Description, Link, LinkContainer, Title, View };
