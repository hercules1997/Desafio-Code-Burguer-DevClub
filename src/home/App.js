import React from 'react';

import Burguer from "../assets/burguer.png";


import {Container, Image, InputName, InputPedido, ContainerItens, Button} from "./style";

function App() {
  return (
    <Container>
      <Image>
        <img alt='burguer' src={Burguer} />
      </Image>
    <ContainerItens>
      <InputName placeholder='Digite seu nome' ></InputName>

      <InputPedido placeholder='Faça seu pedido'></InputPedido>

      <Button>Realizar pedido</Button>
    </ContainerItens>

      
    </Container>
  );
}

export default App;
