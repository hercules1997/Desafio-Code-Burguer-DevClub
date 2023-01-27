import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

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
  const [request, setRequest] = useState([]);
  const navigate = useNavigate();
  const inputName = useRef();
  const inputOrder = useRef();

  async function addNewRequest() {
    const { data: newRequest } = await axios.post(
      "https://code-burguer-backend.vercel.app/requests",
      { name: inputName.current.value, order: inputOrder.current.value }
    );

    if (inputName.current.value === "" || inputOrder.current.value === "") {
      navigate();
    } else {
      navigate("/requests");
    }

    setRequest([...request, newRequest]);
  }

  return (
    <Container>
      <ContainerItens>
        <img alt="burguer" src={Burguer} />

        <H1>Faça seu pedido!</H1>

        <ContainerInput>
          <Label>Seu nome</Label>
          <InputName ref={inputName} placeholder="Ex: 'Carlos'"></InputName>

          <Label>Pedido</Label>
          <InputPedido
            ref={inputOrder}
            placeholder="Ex: '2 X-Burguer, 1 Coca-Cola'"
          >
            <option className="opt">Selecione as opções</option>
            <option>Monster Burguer</option>
            <option>Light Burguer</option>
            <option>Mini Burguer</option>
            <option>Extreme Burguer</option>
            <option>Vegan Burguer</option>
          </InputPedido>
        </ContainerInput>

        <Button onClick={addNewRequest}>Realizar pedido</Button>

        <br />
      </ContainerItens>
    </Container>
  );
}

export default App;
