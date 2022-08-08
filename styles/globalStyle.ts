import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle<any>`html,
body {
  padding: 0;
  margin: 0;
  word-break:break-word;
  line-height: 1.5;
  letter-spacing: 1px;
  font-family: sans-serif;
  caret-color: transparent;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color: ${theme.strongCream};
    background: black;
    text-align: center;
  }
}
`;
