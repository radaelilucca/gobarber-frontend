import React from "react";
import { Link } from "react-router-dom";
import { Container, Content, Profile } from "./styles";

import logo from "~/assets/logopurple.svg";

function header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Radaeli Dev</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.pngCopy to Clipboard
"
              alt="Radaeli Dev"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default header;
