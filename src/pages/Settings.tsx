import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  FormControlLabel,
  Switch,
  Divider,
  Button,
  Alert,
} from '@mui/material';
import { useThemeContext } from '../context/ThemeContext';

export const Settings: React.FC = () => {
  const { mode, toggleTheme } = useThemeContext();
  const [notifications, setNotifications] = React.useState(false);
  const [offlineMode, setOfflineMode] = React.useState(true);

  const handleClearCache = () => {
    if ('caches' in window) {
      caches.keys().then((names) => {
        names.forEach((name) => {
          caches.delete(name);
        });
      });
      alert('Cache cleared successfully!');
    }
  };

  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Settings
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Customize your app preferences
      </Typography>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Appearance
          </Typography>
          <Divider sx={{ mb: 2 }} />
          
          <FormControlLabel
            control={
              <Switch 
                checked={mode === 'dark'} 
                onChange={toggleTheme}
              />
            }
            label={`Dark Mode ${mode === 'dark' ? '(On)' : '(Off)'}`}
          />
          
          <Typography variant="caption" display="block" color="text.secondary" sx={{ mt: 1 }}>
            Toggle between light and dark themes. Your preference is saved automatically.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Notifications
          </Typography>
          <Divider sx={{ mb: 2 }} />
          
          <FormControlLabel
            control={
              <Switch 
                checked={notifications} 
                onChange={(e) => setNotifications(e.target.checked)}
              />
            }
            label="Enable Push Notifications"
          />
          
          <Typography variant="caption" display="block" color="text.secondary" sx={{ mt: 1 }}>
            Receive updates and important information through push notifications.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Offline Mode
          </Typography>
          <Divider sx={{ mb: 2 }} />
          
          <FormControlLabel
            control={
              <Switch 
                checked={offlineMode} 
                onChange={(e) => setOfflineMode(e.target.checked)}
              />
            }
            label="Enable Offline Support"
          />
          
          <Typography variant="caption" display="block" color="text.secondary" sx={{ mt: 1 }}>
            Cache pages and assets for offline access.
          </Typography>

          <Alert severity="info" sx={{ mt: 2 }}>
            Current cache size: ~2.4 MB
          </Alert>

          <Button 
            variant="outlined" 
            color="error"
            onClick={handleClearCache}
            sx={{ mt: 2 }}
          >
            Clear Cache
          </Button>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            About
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2" color="text.secondary">
            Version: 1.0.0
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Build: Production
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Last Updated: {new Date().toLocaleDateString()}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};