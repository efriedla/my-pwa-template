import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import Grid from '@mui/material/GridLegacy';
// or
import { Home as HomeIcon, Explore, Settings, Info } from '@mui/icons-material';

export const Home: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Welcome Home
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Your React PWA Template with React Router is ready to use!
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <HomeIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Progressive Web App</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                This template includes full PWA support with offline capabilities,
                service workers, and installable features.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Explore color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">React Router</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Navigate between pages seamlessly with React Router DOM.
                All routes work offline once cached.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Settings color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Material-UI Theming</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Toggle between light and dark modes with persistent preferences
                using localStorage.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Info color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">TypeScript Support</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Full TypeScript support for type-safe development and
                better developer experience.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};