import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Badge,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  AccountCircle,
} from '@mui/icons-material';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        backgroundColor: 'background.paper',
      }}
    >
      <Toolbar 
        sx={{ 
          minHeight: { xs: '56px', sm: '64px' },
          px: { xs: 1.5, sm: 3 },
        }}
      >
        <Typography 
          variant={isMobile ? "h6" : "h5"} 
          noWrap 
          component="div" 
          sx={{ 
            flexGrow: 1,
            fontSize: {
              xs: '1.25rem',
              sm: '1.5rem'
            },
            fontWeight: 500,
          }}
        >
          EduApp
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: { xs: 1, sm: 2 }
        }}>
          <IconButton 
            color="primary" 
            sx={{ 
              width: { xs: 40, sm: 44 },
              height: { xs: 40, sm: 44 },
            }}
          >
            <Badge 
              badgeContent={4} 
              color="error"
              sx={{
                '& .MuiBadge-badge': {
                  fontSize: '0.75rem',
                  height: '18px',
                  minWidth: '18px',
                }
              }}
            >
              <NotificationsIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />
            </Badge>
          </IconButton>

          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="primary"
            sx={{ 
              width: { xs: 40, sm: 44 },
              height: { xs: 40, sm: 44 },
            }}
          >
            <Avatar 
              sx={{ 
                width: { xs: 32, sm: 36 }, 
                height: { xs: 32, sm: 36 },
                bgcolor: 'primary.main'
              }}
            >
              <AccountCircle />
            </Avatar>
          </IconButton>
          
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              sx: {
                mt: 1.5,
                '& .MuiMenuItem-root': {
                  px: 2,
                  py: 1.5,
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                }
              }
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My Account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;