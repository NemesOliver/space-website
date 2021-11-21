import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import GlobalStyles from "../components/styles/GlobalStyles";
import { theme } from "../components/styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
