import styled from "styled-components";
import { ENGIWEB_WEBSITE } from "../constants/about";
import { COLORS } from "../styles/constants";

const Footer = styled.footer`
  background: #222831;
  color: white;
  font-size: 18px;
  line-height: 36px;
  padding: 20px;
  text-align: center;
`;

const Green = styled.a`
  color: ${COLORS.primary};
`;

const AppHeader = () => (
  <Footer data-testid="footer">
    Made by{" "}
    <Green
      data-testid="ew-lnk"
      href={ENGIWEB_WEBSITE}
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      Engiweb Ltd
    </Green>
  </Footer>
);

export default AppHeader;
