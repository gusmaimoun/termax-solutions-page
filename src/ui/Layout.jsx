import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const StyledMain = styled.main`
  margin: 0 auto;
  width: 90vw;
  height: 90vh;
`;

function Layout() {
  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </>
  );
}

export default Layout;
