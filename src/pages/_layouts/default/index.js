import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./styles";

import Header from "~/components/header";

function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

export default DefaultLayout;

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
