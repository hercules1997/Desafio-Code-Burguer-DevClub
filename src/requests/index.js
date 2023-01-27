import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Package from "../assets/package.png";
import Trash from "../assets/trash-close.png";
import {
  Container,
  ImagePackage,
  H1,
  ContainerItens,
  ButtonBack,
  ButtonTrash,
  Name,
  Pedido,
  ContainerRequest,
  ContainerSroll,
  ContainerText,
  Status,
} from "./style";

function App() {
  const [request, setRequest] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetcRequest() {
      const { data: allRequests } = await axios.get(
        "https://code-burguer-backend.vercel.app/requests"
      );

      setRequest(allRequests);
    }

    fetcRequest();
  }, []);

  async function deleteRequest(requestId) {
    axios.delete(
      `https://code-burguer-backend.vercel.app/requests/${requestId}`
    );
    const newRequests = request.filter((request) => request.id !== requestId);
    setRequest(newRequests);
  }

  function backHome() {
    navigate("/");
  }

  return (
    <Container>
      <ImagePackage>
        <img alt="burguer" src={Package} />
        <H1>Seu Pedido</H1>
      </ImagePackage>

      <ContainerItens>
        <ContainerSroll>
          {request.map((request) => (
            <ContainerRequest>
              <ContainerText key={request.id}>
                <Name>{request.name}</Name>
                <Pedido>{request.order}</Pedido>
                <Status>{request.status}</Status>
              </ContainerText>
              <ButtonTrash onClick={() => deleteRequest(request.id)}>
                <img alt="trash" src={Trash} />
              </ButtonTrash>
            </ContainerRequest>
          ))}
        </ContainerSroll>

        <ButtonBack onClick={backHome}>Voltar</ButtonBack>
      </ContainerItens>
    </Container>
  );
}

export default App;
