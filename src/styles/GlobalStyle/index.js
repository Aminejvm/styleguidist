import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
	}
	html {
		box-sizing: border-box;
	}
	*,
	*:before,
	*:after {
 		box-sizing: inherit;
	}
	p {
		margin: 0;
		padding: 0;
	}
`;

export default GlobalStyle;
