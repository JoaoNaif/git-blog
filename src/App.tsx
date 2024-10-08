import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Router } from './router'
import { BrowserRouter } from 'react-router-dom'
import { RepositoryProvider } from './context/RepositoryContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <RepositoryProvider>
          <Router />
        </RepositoryProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
