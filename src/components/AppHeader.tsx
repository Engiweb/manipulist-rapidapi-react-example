import styled from "styled-components";
import { COLORS } from "../styles/constants";

const Header = styled.header`
  background: #222831;
  color: white;
  font-size: 24px;
  line-height: 48px;
  padding: 20px;
`;

const Green = styled.span`
  color: ${COLORS.primary};
`;

const AppFooter = () => (
  <Header data-testid="header">
    MANIPU<Green>LIST</Green> RapidAPI example
  </Header>
);

export default AppFooter;
