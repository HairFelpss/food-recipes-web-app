import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Product = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  margin: 0 10px;

  display: flex;
  flex-direction: column;

  header {
    height: 140;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 35%;
    margin-top: 10px;
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
  .edit,
  .delete {
    font-weight: bold;
    color: #fff;
    border: 0;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
  }
  .edit {
    background: #596eff;

    &:hover {
      background: #2752ff;
    }
  }
  .delete {
    background: #ff6747;
    float: right !important;

    &:hover {
      background: #ff3a19;
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 8%;
  }
`;
