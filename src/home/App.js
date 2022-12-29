import React from "react";

import Burguer from "../assets/burguer.png";

import {
  Container,
  Label,
  InputName,
  InputPedido,
  H1,
  ContainerItens,
  ContainerInput,
  Button,
} from "./style";

function App() {
  return (
    <Container>
      
      <ContainerItens>
        <img alt="burguer" src={Burguer} />

        <H1>Faça seu pedido!</H1>

        <ContainerInput>
        <Label>Seu nome</Label>
        <InputPedido placeholder="Ex: 'Carlos'"></InputPedido>

        <Label>Pedido</Label>
        <InputName placeholder="Ex: '2 X-Burguer, 1 Coca-Cola'"></InputName>


        </ContainerInput>


        <Button>Realizar pedido</Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
