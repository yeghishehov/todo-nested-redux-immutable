import styled from 'styled-components';

export const Label = styled.label`
  color: #686868;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 440px;
`;

export const Input =  styled.input`
  background: #F1F4FF;
  box-sizing: border-box;
  width: 300px;
  height: 34px;
  border-radius: 10px;
  border: 1px solid #3f50b5;
  padding: 0 30px;
  margin: 15px;
  font-weight: 500;
  font-size: 18px;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #909ad1;
  }
`;

export const Button = styled.button`
  border: 1px solid #3f50b5;
  border-radius: 10px;
  font-size: 18px;
  color: #3f50b5;
  background: none;
  padding: 5px 30px;
  min-width: 195px;
  cursor: pointer;
  display: block;
  :focus {
    outline: none;
  }
  :hover {
    background: #d7dbf5;
  }
  :active {
    background: #bfc6f1;
    color: #283cad;
  }
`;

export const Select = styled.select`
  background: #F1F4FF;
  box-sizing: border-box;
  width: 300px;
  height: 34px;
  border-radius: 10px;
  border: 1px solid #3f50b5;
  padding: 0 30px;
  margin: 15px;
  font-weight: 500;
  font-size: 18px;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #909ad1;
  }
`;

export const Header = styled.div`
  color: #3f50b5;
  font-size: 25px;
`;

export const Modal = styled.div`
  z-index: 100;
  display: flex;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width:100vw;
  background: rgba(0,0,0,0.5);
  transition: all 0.5s;
`;

export const Card = styled.div`
  min-width: 500px;
  min-height: 300px;
  box-sizing: border-box;
  border-radius: 44px;
  background: #fff;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
