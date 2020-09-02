import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import theme from "../../constants/theme";

/**
 * We should wrap the top-level app with this componentt.
 * <br />
 * It abstracts Global Styles (normalizer...).
 * <br />
 * ThemeProvider for styled-component.
 */
const StyleWrapper = function({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
};

export default StyleWrapper;
