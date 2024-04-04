import '../styles/globalStyle.ts'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { GlobalStyle } from '../styles/globalStyle'
import Layout from '../shared/layout/Layout'
import ErrorBoundary from '../shared/errorBoundary/ErrorBoundary'
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(config);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </Layout>
    </ThemeProvider>
  )
}

export default withAuthenticator(MyApp)
