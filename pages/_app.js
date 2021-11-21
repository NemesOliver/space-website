import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/styles/GlobalStyles";
import { theme } from "../components/styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
