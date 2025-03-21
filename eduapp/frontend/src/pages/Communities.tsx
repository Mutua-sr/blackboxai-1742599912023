import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  List,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
  Avatar,
  Typography,
  IconButton,
  Stack,
  TextField,
  InputAdornment,
  Badge,
  Divider,
} from '@mui/material';
import {
  Search as SearchIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import { communitiesStyles as styles } from '../styles/pages/Communities.styles';

interface Community {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  members: number;
}

const CommunityHeader: React.FC = () => (
  <Stack sx={styles.header}>
    <Typography variant="h5">Communities</Typography>
    <IconButton 
      color="primary"
      sx={styles.addButton}
    >
      <AddIcon />
    </IconButton>
  </Stack>
);

const SearchBar: React.FC = () => (
  <TextField
    fullWidth
    placeholder="Search communities..."
    variant="outlined"
    size="small"
    sx={styles.searchField}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon color="action" />
        </InputAdornment>
      ),
    }}
  />
);

const CommunityItem: React.FC<{
  community: Community;
  onClick: (id: number) => void;
}> = ({ community, onClick }) => (
  <ListItemButton 
    onClick={() => onClick(community.id)}
    sx={styles.communityItem}
  >
    <ListItemAvatar>
      <Avatar
        src={community.avatar}
        sx={styles.avatar}
      />
    </ListItemAvatar>
    <ListItemText
      primary={
        <Stack sx={styles.headerContent}>
          <Typography variant="subtitle1" fontWeight={500}>
            {community.name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {community.lastMessageTime}
          </Typography>
        </Stack>
      }
      secondary={
        <Stack sx={styles.messageContent}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={styles.messagePreview}
          >
            {community.lastMessage}
          </Typography>
          {community.unreadCount > 0 && (
            <Badge
              badgeContent={community.unreadCount}
              color="primary"
              sx={styles.badge}
            />
          )}
        </Stack>
      }
    />
  </ListItemButton>
);

const Communities: React.FC = () => {
  const navigate = useNavigate();
  const communities: Community[] = [
    {
      id: 1,
      name: 'Computer Science Hub',
      avatar: 'https://source.unsplash.com/random/200x200/?computer',
      lastMessage: 'Anyone up for a study session on algorithms?',
      lastMessageTime: '10:30 AM',
      unreadCount: 3,
      members: 150,
    },
    {
      id: 2,
      name: 'Math Enthusiasts',
      avatar: 'https://source.unsplash.com/random/200x200/?mathematics',
      lastMessage: 'Check out this interesting proof I found!',
      lastMessageTime: '9:45 AM',
      unreadCount: 1,
      members: 120,
    },
    {
      id: 3,
      name: 'Physics Study Group',
      avatar: 'https://source.unsplash.com/random/200x200/?physics',
      lastMessage: 'Tomorrow\'s quantum mechanics discussion is confirmed',
      lastMessageTime: 'Yesterday',
      unreadCount: 0,
      members: 85,
    },
    {
      id: 4,
      name: 'Web Development',
      avatar: 'https://source.unsplash.com/random/200x200/?coding',
      lastMessage: 'New React hooks tutorial posted!',
      lastMessageTime: 'Yesterday',
      unreadCount: 5,
      members: 200,
    },
    {
      id: 5,
      name: 'AI & Machine Learning',
      avatar: 'https://source.unsplash.com/random/200x200/?robot',
      lastMessage: 'Interesting paper on neural networks',
      lastMessageTime: 'Tuesday',
      unreadCount: 0,
      members: 175,
    },
  ];

  const handleCommunityClick = (communityId: number) => {
    navigate(`/communities/${communityId}`);
  };

  return (
    <Box>
      <CommunityHeader />
      <SearchBar />
      <List sx={styles.communityList}>
        {communities.map((community, index) => (
          <React.Fragment key={community.id}>
            <CommunityItem 
              community={community} 
              onClick={handleCommunityClick}
            />
            {index < communities.length - 1 && <Divider component="li" />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Communities;