import { createGlobalStyle } from "styled-components";
import background from "./dollars.png"

export const GlobalStyled = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

:root {
  background-image: url("${background}");
  background-size: 100% 100%;
  background-attachment: fixed;
}

body {
  font-family: 'Kanit', sans-serif;
}
`