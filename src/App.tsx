import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Box,
  Card,
  CardContent,
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeContext } from './context/ThemeContext';

function App() {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React PWA Template
          </Typography>
          <IconButton color="inherit" onClick={toggleTheme}>
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Welcome to Your PWA Template
            </Typography>
            <Typography variant="body1" color="text.secondary">
              This template includes:
            </Typography>
            <Box component="ul" sx={{ mt: 2 }}>
              <li>React with TypeScript</li>
              <li>Material-UI (MUI) components</li>
              <li>Light/Dark mode toggle</li>
              <li>Progressive Web App capabilities</li>
              <li>Offline support</li>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default App;
