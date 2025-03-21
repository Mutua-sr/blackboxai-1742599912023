import { SxProps, Theme } from '@mui/material';

export const profileStyles = {
  headerCard: {
    p: 3,
    mb: 2,
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
    color: 'white',
  } as SxProps<Theme>,

  headerContent: (isMobile: boolean) => ({
    direction: isMobile ? 'column' : 'row',
    spacing: 3,
    alignItems: isMobile ? 'center' : 'flex-start',
  }) as SxProps<Theme>,

  avatar: {
    width: { xs: 80, sm: 100 },
    height: { xs: 80, sm: 100 },
    border: '4px solid white',
  } as SxProps<Theme>,

  userInfo: (isMobile: boolean) => ({
    textAlign: isMobile ? 'center' : 'left',
    flex: 1,
  }) as SxProps<Theme>,

  userDescription: {
    opacity: 0.9,
  } as SxProps<Theme>,

  userSubInfo: {
    opacity: 0.8,
    mt: 1,
  } as SxProps<Theme>,

  actionButtons: (isMobile: boolean) => ({
    direction: 'row',
    spacing: 2,
    mt: 2,
    justifyContent: isMobile ? 'center' : 'flex-start',
  }) as SxProps<Theme>,

  editButton: {
    color: 'primary.main',
    borderRadius: '8px',
  } as SxProps<Theme>,

  shareButton: {
    borderColor: 'white',
    borderRadius: '8px',
  } as SxProps<Theme>,

  menuList: {
    borderRadius: '16px',
    overflow: 'hidden',
    p: 0,
  } as SxProps<Theme>,

  menuItem: {
    py: 2,
  } as SxProps<Theme>,

  menuIcon: {
    color: 'primary.main',
  } as SxProps<Theme>,

  logoutButton: {
    mt: 2,
    py: 1.5,
    borderRadius: '12px',
  } as SxProps<Theme>,
};