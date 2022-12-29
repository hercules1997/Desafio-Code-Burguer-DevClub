import styled from "styled-components";

export const Container = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
  img {
    width: 350px;
    height:300px;
    margin-bottom: 20px;
  }
`;

export const Image = styled.span``;
export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 30px;
  border-radius: 13px;
  background: #0e0e0e;
  width: 350px;
  text-align: center;
  box-shadow: 0 1px 12px #535353a3;
`;

export const InputName = styled.input`
  padding: 20px;
  background: black;
  border-radius: 13px;
  margin-bottom: 20px;
  margin-top: 20px;
  outline: none;
  border: none;
  color: white;
  font-size: 1.3rem;
  box-shadow: 0 1px 12px #535353a3;

`;

export const InputPedido = styled.input`
  padding: 20px;
  background: black;
  border-radius: 13px;
  margin-bottom: 10px;
  outline: none;
  border: none;
  color: white;
  font-size: 1.3rem;
  box-shadow: 0 1px 12px #535353a3;


  
`;

export const Button = styled.button`
  padding: 20px;
  margin-top: 90px;
  background: black;
  color: white;
  border-radius: 13px;
  font-size: 1.3rem;
  cursor: pointer;
  border: none;

`;
