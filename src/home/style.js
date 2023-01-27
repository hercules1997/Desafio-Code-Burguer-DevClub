import styled from "styled-components";

export const Container = styled.div`
  background: #241f17;
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vh;

  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  color: #aab220;
  margin-bottom: 5px;
  font-size: 1.2rem;
  margin-left: 10px;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border-radius: 13px;
  background: #202020;
  width: auto;
  height: auto;
  text-align: center;
  align-items: center;
  box-shadow: 0 1px 12px black;

  img {
    height: 200px;
    width: 200px;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const H1 = styled.h1`
  color: #aab220;
  font-size: 2.4rem;
  font-weight: 100;
  margin-bottom: 20px;
`;
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;

  text-align: start;
  height: 200px;
  width: auto;
`;

export const InputName = styled.input`
  padding: 15px;
  background: #241f17;
  border-radius: 13px;

  outline: none;
  border: none;
  color: white;
  font-size: 1.1rem;
  box-shadow: 0 1px 12px black;
  margin-bottom: 20px;
  width: 350px;
`;

export const InputPedido = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  padding: 15px;
  background: #241f17;
  border-radius: 13px;

  outline: none;
  border: none;
  color: white;
  font-size: 1.1rem;
  box-shadow: 0 1px 12px black;
`;

export const Button = styled.button`
  padding: 10px;
  margin-top: 30px;
  background: #241f17;
  width: 100%;
  color: #754481;
  border-radius: 13px;
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  box-shadow: 0 1px 12px black;

  &:hover {
    background: #a5ad1eb5;
    color: black;
  }
  &:active {
    opacity: 0.7;
  }
`;

export const Request = styled.span``;
