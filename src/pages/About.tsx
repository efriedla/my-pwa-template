import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

export const About: React.FC = () => {
  const features = [
    'React 18 with TypeScript',
    'Material-UI (MUI) Components',
    'Light/Dark Mode Toggle',
    'Progressive Web App Support',
    'Offline Functionality',
    'React Router DOM',
    'Expandable Navigation',
    'Service Worker with Workbox',
  ];

  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        About This Template
      </Typography>
      
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Features
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <List>
            {features.map((feature, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircle color="primary" />
                </ListItemIcon>
                <ListItemText primary={feature} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Getting Started
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2" color="text.secondary" paragraph>
            This template is designed to help you quickly start building
            production-ready Progressive Web Apps with React and TypeScript.
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            The navigation drawer on the right side expands when you click
            the menu button, providing easy access to all pages.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            All routes are cached by the service worker, so they work
            seamlessly even when you're offline.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};