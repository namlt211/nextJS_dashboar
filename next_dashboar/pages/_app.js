import { ThemeProvider } from "styled-components";
import Layout from "../layout";
import "../styles/globals.css";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
