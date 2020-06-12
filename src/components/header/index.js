import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Content, Profile } from "./styles";

import Notifications from "../Notifications";

import logo from "~/assets/logopurple.svg";

function Header() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                "https://api.adorable.io/avatars/285/abott@adorable.png"
              }
              alt={profile.name}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
