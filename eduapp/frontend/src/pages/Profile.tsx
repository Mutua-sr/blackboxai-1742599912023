import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Stack,
  Button,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Settings as SettingsIcon,
  School as EducationIcon,
  Star as AchievementsIcon,
  History as ActivityIcon,
  Bookmark as SavedIcon,
  Help as HelpIcon,
  ExitToApp as LogoutIcon,
} from '@mui/icons-material';
import { profileStyles as styles } from '../styles/pages/Profile.styles';

interface MenuItem {
  icon: JSX.Element;
  text: string;
  badge?: string;
}

const ProfileHeader: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <Paper elevation={0} sx={styles.headerCard}>
    <Stack sx={styles.headerContent(isMobile)}>
      <Avatar sx={styles.avatar}>JS</Avatar>
      <Box sx={styles.userInfo(isMobile)}>
        <Typography variant="h5" gutterBottom>
          John Smith
        </Typography>
        <Typography variant="body1" sx={styles.userDescription}>
          Computer Science Student
        </Typography>
        <Typography variant="body2" sx={styles.userSubInfo}>
          University of Technology
        </Typography>
        <Stack sx={styles.actionButtons(isMobile)}>
          <Button 
            variant="contained" 
            color="inherit" 
            size="small"
            sx={styles.editButton}
          >
            Edit Profile
          </Button>
          <Button 
            variant="outlined" 
            color="inherit" 
            size="small"
            sx={styles.shareButton}
          >
            Share Profile
          </Button>
        </Stack>
      </Box>
    </Stack>
  </Paper>
);

const MenuList: React.FC<{ menuItems: MenuItem[] }> = ({ menuItems }) => (
  <Paper elevation={0} sx={styles.menuList}>
    <List>
      {menuItems.map((item, index) => (
        <React.Fragment key={item.text}>
          <ListItemButton sx={styles.menuItem}>
            <ListItemIcon sx={styles.menuIcon}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text}
              secondary={item.badge}
              primaryTypographyProps={{
                fontWeight: 500,
              }}
            />
          </ListItemButton>
          {index < menuItems.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  </Paper>
);

const Profile: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems: MenuItem[] = [
    { icon: <EducationIcon />, text: 'My Learning', badge: '3 Courses' },
    { icon: <AchievementsIcon />, text: 'Achievements', badge: '12 Badges' },
    { icon: <ActivityIcon />, text: 'Activity History' },
    { icon: <SavedIcon />, text: 'Saved Items' },
    { icon: <SettingsIcon />, text: 'Settings' },
    { icon: <HelpIcon />, text: 'Help & Support' },
  ];

  return (
    <Box>
      <ProfileHeader isMobile={isMobile} />
      <MenuList menuItems={menuItems} />
      <Button
        fullWidth
        color="error"
        startIcon={<LogoutIcon />}
        sx={styles.logoutButton}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Profile;