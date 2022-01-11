import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --clr-primary: #5c21aa;
  --clr-secondary: #f2f2f2;
  --clr-lightGray: #E2E2E2;
  --clr-text: #6a6a6a;
  --clr-black: #000;
  --clr-white: #fff;
}
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body {
  height: 100%;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Roboto', sans-serif;
  color: var(--clr-text);
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
  color: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root {
  isolation: isolate;
}
`;

export const MainContainer = styled.div`
  padding-inline: 2em;
  margin-inline: auto;
  max-width: 80rem;
`

export const WrapperFilters = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
`

export const WrapperInputs = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

 > div:first-child {
    flex: 1;
  }
`
 
export default GlobalStyle;
