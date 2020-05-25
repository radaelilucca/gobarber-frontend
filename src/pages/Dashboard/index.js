import React from "react";

import api from "~/services/api";

import { Container } from "./styles";

function Dashboard() {
  api.get("/appointments");
  return (
    <Container>
      <h1> DASHBOARD</h1>
    </Container>
  );
}

export default Dashboard;
