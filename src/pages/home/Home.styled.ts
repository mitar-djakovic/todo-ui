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
  width: 440px;
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
  margin-bottom: 6px;
`;

const LinkContainer = styled.div`
  margin-top: 21px;
  margin-bottom: 52px;
`;

const Message = styled.p<{ error: boolean }>`
  text-align: center;
  font-size: 14px;
  margin-top: 8px;
  color: ${(props) => (props.error ? '#e00022' : '#0BC163')};
`;

const TodoContainer = styled.div`
  width: 100%;
  margin-top: 26px;
`;

const Filters = styled.div`
  display: flex;

  p {
    font-size: 14px;
    font-weight: 500;
    color: rgba(31, 42, 75, 0.59);
    margin-right: 17px;
  }
`;

const Filter = styled.a<{ active: boolean }>`
  text-decoration: ${(props) => (props.active ? 'none' : 'underline')};
  color: ${(props) => (props.active ? '#4a77e5' : '#4a77e5')};
  font-size: 14px;
  margin-right: 10px;
`;

export {
  Content,
  Filter,
  Filters,
  Link,
  LinkContainer,
  Message,
  Title,
  TodoContainer,
  View,
};
