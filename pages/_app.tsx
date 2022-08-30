import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useMemo, useState } from 'react'

import { Badge, createTheme, CssBaseline, Divider, PaletteMode, ThemeProvider, Typography, useTheme } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

import HeaderComponent from '../components/Header.component'
import { getStoredTheme, getThemeOptions, setStoredTheme } from '../utils/theme'
import { Box } from '@mui/system'


function MyApp({ Component, pageProps }: AppProps) {

const [mode, setMode] = useState<PaletteMode>('dark'); // So they don't blind themselves

useEffect(() => {
  const storedTheme = getStoredTheme();

  if (storedTheme) {
    setMode(storedTheme);
  }
}, []);

// Update theme only on changes
const theme = useMemo(() => createTheme(getThemeOptions(mode)), [mode]);

const customTheme = useTheme(); // TODO: Find a better way to get global consts like this


return (
  <ThemeProvider theme={theme}>
    < CssBaseline/>
    <HeaderComponent mode={mode} onChange={()=> {
      const newMode: PaletteMode = mode === 'dark' ? 'light' : 'dark';
      setMode(newMode);
      setStoredTheme(newMode);
    }}
    />
    
    <Component {...pageProps} />
  </ThemeProvider> 
  );
}

export default MyApp
