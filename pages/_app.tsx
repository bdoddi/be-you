import '../styles/globalStyle.ts'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { GlobalStyle } from '../styles/globalStyle'
import Layout from '../shared/layout/Layout'
import ErrorBoundary from '../shared/errorBoundary/ErrorBoundary'

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

export default MyApp
