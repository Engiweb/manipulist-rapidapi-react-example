import GlobalStyle from "../styles/GlobalStyles";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import * as React from "react";
import AppForm from "./AppForm";

const App = () => {
  return (
    <>
      <GlobalStyle />

      <AppHeader />

      <AppForm />

      <AppFooter />
    </>
  );
};

export default App;
