import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useMemo, useState } from 'react'

import { Badge, createTheme, CssBaseline, Divider, PaletteMode, ThemeProvider, Typography, useTheme } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

import HeaderComponent from '../Header.component'
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
    <Box display = 'flex' justifyContent='center' alignItems='center' minHeight='100vh'>
      <div>
        <Badge badgeContent={1} color="primary">
          <MailIcon/>
        </Badge>
        <Badge badgeContent={2} color="secondary">
          <MailIcon/>
        </Badge>
        <Badge badgeContent={3} color="info">
          <MailIcon/>
        </Badge>
        <Badge badgeContent={4} color="warning">
          <MailIcon/>
        </Badge>
        <Badge badgeContent={5} color="error">
          <MailIcon/>
        </Badge>
        <Badge badgeContent={5} color="success">
          <MailIcon/>
        </Badge>
        <div style={{ height: '400px', color: customTheme.palette.warning.dark }}>
          <Typography color='primary' variant='h1'>Avatar Legends</Typography>
          <Typography color='secondary' variant='h3'>Content Management System</Typography>
          <Divider/>
          <Typography variant='h4'>Hello!</Typography>
        </div>
        <p>This is the first page and a draft go away.</p>
      </div>
    </Box>

    <Component {...pageProps} />
  </ThemeProvider> 
  );
}

export default MyApp
