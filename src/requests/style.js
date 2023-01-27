import styled from "styled-components";

export const Container = styled.div`
  background: #241f17;
  display: flex;
  position: fixed;

  width: 100vw;
  height: 100vh;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const ImagePackage = styled.div`
  margin-top: 30px;
  padding-top: 10px;
  border-top-right-radius: 13px;
  border-top-left-radius: 13px;
  border-bottom-right-radius: none;
  border-bottom-left-radius: none;
  border-bottom: none;
  background: #202020;
  box-shadow: 0 1px 12px black;
  width: 380px;

  img {
    width: 20%;
    text-align: center;
  }
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border-bottom-right-radius: 13px;
  border-bottom-left-radius: 13px;
  border-top-right-radius: none;
  border-top-left-radius: none;
  background: #202020;
  width: 380px;
  height: 480px;
  text-align: center;
  box-shadow: 0 11px 12px black;
`;

export const ContainerSroll = styled.span`
  background: transparent;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: scroll;
  width: auto;
  position: sticky;
  top: 0;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const H1 = styled.h1`
  color: #aab220;
  margin-bottom: 20px;
`;

export const ContainerRequest = styled.div`
  display: flex;
  box-shadow: 0 1px 12px black;

  justify-content: space-between;
  height: auto;
  width: auto;
  background: #241f17;
  padding: 10px;
  border-radius: 13px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const ContainerText = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: start;
  width: 100%;
`;

export const Pedido = styled.p`
  padding: 5px;
  background: transparent;
  display: flex;
  font-family: "Roboto", sans-serif;

  color: white;
  font-size: 1.3rem;
`;
export const Status = styled.p`
  padding: 5px;
  background: transparent;
  display: flex;
  font-family: "Roboto", sans-serif;

  color: white;
  font-size: 1rem;
`;

export const Name = styled.p`
  padding: 15px;
  background: transparent;
  display: flex;

  display: flex;
  justify-content: center;

  color: white;
  font-size: 1.5rem;
`;

export const ButtonTrash = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 43px;
  width: 35px;
  border-radius: 13px;

  border: none;

  cursor: pointer;
  background: transparent;
  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.4;
  }
  img {
    width: 100%;
  }
`;

export const ButtonBack = styled.button`
  padding: 30px;
  margin-top: 60px;
  background: #241f17;

  color: #754481;
  border-radius: 13px;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  box-shadow: 0 1px 12px black;

  &:hover {
    background: #a5ad1eb5;
    color: black;
  }
  &:active {
    opacity: 0.4;
  }
`;
