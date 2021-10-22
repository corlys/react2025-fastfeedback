import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { Global, css } from "@emotion/react";

import theme from "@/styles/theme";
import { AuthProvider } from "@/lib/auth";

const GlobalStyle = () => {
  return (
    <>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
    </>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
