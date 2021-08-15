import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'

import Home from './pages/home'

import theme from './theme'

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Reset />
            <Home />
        </ThemeProvider>
    )
}
