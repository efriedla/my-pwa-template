import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  LinearProgress,
  Chip,
} from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import { TrendingUp, Speed, Storage, CloudDone } from '@mui/icons-material';

export const Dashboard: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Monitor your PWA metrics and performance
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Speed color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Performance</Typography>
              </Box>
              <Typography variant="h4" color="primary">
                95
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Lighthouse Score
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={95} 
                sx={{ mt: 2 }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUp color="success" sx={{ mr: 1 }} />
                <Typography variant="h6">Accessibility</Typography>
              </Box>
              <Typography variant="h4" color="success.main">
                98
              </Typography>
              <Typography variant="caption" color="text.secondary">
                WCAG AA Compliant
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={98} 
                color="success"
                sx={{ mt: 2 }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Storage color="warning" sx={{ mr: 1 }} />
                <Typography variant="h6">Cache</Typography>
              </Box>
              <Typography variant="h4" color="warning.main">
                2.4 MB
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Cached Assets
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={60} 
                color="warning"
                sx={{ mt: 2 }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CloudDone color="info" sx={{ mr: 1 }} />
                <Typography variant="h6">PWA Status</Typography>
              </Box>
              <Chip 
                label="Installable" 
                color="success" 
                size="small"
                sx={{ mt: 1 }}
              />
              <Chip 
                label="Offline Ready" 
                color="info" 
                size="small"
                sx={{ mt: 1, ml: 1 }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Recent Activity
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Your PWA is running smoothly. All features are working as expected.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};