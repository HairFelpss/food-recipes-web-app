import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 10%;
`;

export const Product = styled.div`
  border-radius: 30px !important;
  width: 40%;
  min-width: 250px;
  background: #fff;
  margin: 0 10px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  header {
    border-top-left-radius: 29px;
    border-top-right-radius: 29px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffe140;
    color: #3b3b3b;
  }

  strong {
    font-size: 18px;
    margin-top: 10px;
  }

  small {
    font-size: 14px;
    color: #666;
  }

  ul {
    list-style: none;
  }

  li {
    font-weight: bold;
    padding: 12px 20px;

    small {
      font-weight: normal;
      font-size: 12px;
      color: #999;
      font-style: italic;
    }

    &:nth-child(2n-1) {
      background: #f5f5f5;
    }
  }
`;

export const CreateDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;

  div {
    margin-left: 4%;
  }
  input {
    height: 55px;
    background: #fff;
    border: 0;
    font-size: 18px;
    color: #444;
    border-radius: 5px;
  }
  button {
    height: 55px;
    padding: 0 20px;
    background: #ffe140;
    color: #3b3b3b;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    align-items: center;
    margin-bottom: 2%;

    &:hover {
      background: #ccac00;
    }
  }
`;
