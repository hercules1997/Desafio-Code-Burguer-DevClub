import styled from "styled-components";

export const Container = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Label = styled.label`
  color: #aab220;
  margin-bottom: 5px;
  margin-left: 10px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
`;
export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 30px;
  border-radius: 13px;
  background: #0a0a10;
  width: auto;
  height: auto;
  text-align: center;
  box-shadow: 0 1px 12px #535353a3;

  img {
    height: 340px;
    margin-bottom: 20px;
  }
`;

export const H1 = styled.h1`
  color: #aab220;
  margin-bottom: 20px;

`;
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;

  text-align: start;
  height: auto;
  width: auto;
`;

export const InputPedido = styled.input`
  padding: 20px;
  background: black;
  border-radius: 13px;
  font-family: "Roboto", sans-serif;
  outline: none;
  border: none;
  color: white;
  font-size: 1.3rem;
  box-shadow: 0 1px 12px #535353a3;
  margin-bottom: 20px;
  width: 350px;
`;

export const InputName = styled.input`
  padding: 20px;
  background: black;
  border-radius: 13px;
  font-family: "Roboto", sans-serif;
  outline: none;
  border: none;
  color: white;
  font-size: 1.3rem;
  box-shadow: 0 1px 12px #535353a3;
`;

export const Button = styled.button`
  padding: 30px;
  margin-top: 60px;
  background: black;
 
  color: #754481;
  border-radius: 13px;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  box-shadow: 0 1px 12px #535353a3;

  &:hover {
    background: #aab220;
    color: black;
    font-size: 1.6rem
  }
  &:active {
    opacity: 0.7;
  }
`;
