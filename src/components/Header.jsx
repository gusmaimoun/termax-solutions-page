import styled from "styled-components";
import termaxLogo from "../assets/images/termaxLogo.png";

const StyledHeader = styled.header`
  width: 100%;
  height: 6rem;
  box-shadow: 0 2px 4px rgba(6, 17, 118, 0.08),
    0 4px 12px rgba(6, 17, 118, 0.08);
`;

const StyledNav = styled.nav`
  width: 100%;
  height: 100%;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  height: 100%;
`;

const StyledLi = styled.li`
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #6527be;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledUl>
          <StyledLi>
            <img src={termaxLogo} alt="Termax Logo" height={"50rem"} />
          </StyledLi>
          <StyledLi>Inicio</StyledLi>
          <StyledLi>Productos</StyledLi>
          <StyledLi>eLearning</StyledLi>
          <StyledLi>Quienes somos</StyledLi>
          <StyledLi>Trabaja con nosotros</StyledLi>
          <StyledLi>Servicio tecnico</StyledLi>
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
