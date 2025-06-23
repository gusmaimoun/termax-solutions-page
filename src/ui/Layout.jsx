import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const StyledMain = styled.main`
  margin: 0 auto;
  background-color: red;
  width: 80vw;
  flex-grow: 1;
`;

function Layout({ children }) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
}

export default Layout;
