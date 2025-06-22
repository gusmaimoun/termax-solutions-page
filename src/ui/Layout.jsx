import styled from "styled-components";

import Header from "../components/Header";

const StyledMain = styled.main``;

function Layout({ children }) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
    </>
  );
}

export default Layout;
