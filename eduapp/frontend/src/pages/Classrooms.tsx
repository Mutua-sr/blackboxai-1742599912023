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
  Chip,
} from '@mui/material';
import {
  Search as SearchIcon,
  Add as AddIcon,
  Circle as CircleIcon,
} from '@mui/icons-material';
import { classroomsStyles as styles } from '../styles/pages/Classrooms.styles';

interface Classroom {
  id: number;
  name: string;
  instructor: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isLive: boolean;
  nextClass: string;
}

const ClassroomHeader: React.FC = () => (
  <Stack sx={styles.header}>
    <Typography variant="h5">Classes</Typography>
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
    placeholder="Search classes..."
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

const ClassroomItem: React.FC<{
  classroom: Classroom;
  onClick: (id: number) => void;
}> = ({ classroom, onClick }) => (
  <ListItemButton 
    onClick={() => onClick(classroom.id)}
    sx={styles.classItem}
  >
    <ListItemAvatar>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        color="success"
        invisible={!classroom.isLive}
      >
        <Avatar
          src={classroom.avatar}
          sx={styles.avatar(classroom.isLive)}
        />
      </Badge>
    </ListItemAvatar>
    <ListItemText
      primary={
        <Stack sx={styles.headerContent}>
          <Box>
            <Typography variant="subtitle1" fontWeight={500}>
              {classroom.name}
            </Typography>
            <Typography sx={styles.instructorText}>
              {classroom.instructor}
            </Typography>
          </Box>
          <Stack alignItems="flex-end">
            <Typography variant="caption" color="text.secondary">
              {classroom.lastMessageTime}
            </Typography>
            {classroom.isLive && (
              <Chip
                size="small"
                label="Live"
                color="error"
                icon={<CircleIcon sx={styles.liveIcon} />}
                sx={styles.liveChip}
              />
            )}
          </Stack>
        </Stack>
      }
      secondary={
        <Stack sx={styles.messageContent}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={styles.messagePreview}
          >
            {classroom.lastMessage}
          </Typography>
          {classroom.unreadCount > 0 && (
            <Badge
              badgeContent={classroom.unreadCount}
              color="primary"
              sx={styles.badge}
            />
          )}
        </Stack>
      }
    />
  </ListItemButton>
);

const Classrooms: React.FC = () => {
  const navigate = useNavigate();
  const classrooms: Classroom[] = [
    {
      id: 1,
      name: 'Data Structures & Algorithms',
      instructor: 'Dr. Sarah Johnson',
      avatar: 'https://source.unsplash.com/random/200x200/?algorithm',
      lastMessage: 'Next class: Binary Trees and Graph Traversal',
      lastMessageTime: '11:30 AM',
      unreadCount: 2,
      isLive: true,
      nextClass: 'Today, 2:00 PM',
    },
    {
      id: 2,
      name: 'Web Development',
      instructor: 'Prof. Michael Chen',
      avatar: 'https://source.unsplash.com/random/200x200/?coding',
      lastMessage: 'Assignment submission deadline extended',
      lastMessageTime: '10:15 AM',
      unreadCount: 5,
      isLive: false,
      nextClass: 'Tomorrow, 10:00 AM',
    },
    {
      id: 3,
      name: 'Machine Learning',
      instructor: 'Dr. Emily Brown',
      avatar: 'https://source.unsplash.com/random/200x200/?ai',
      lastMessage: 'Project presentations scheduled for next week',
      lastMessageTime: 'Yesterday',
      unreadCount: 0,
      isLive: false,
      nextClass: 'Thursday, 1:00 PM',
    },
    {
      id: 4,
      name: 'Database Systems',
      instructor: 'Prof. David Wilson',
      avatar: 'https://source.unsplash.com/random/200x200/?database',
      lastMessage: 'Review materials for SQL optimization posted',
      lastMessageTime: 'Yesterday',
      unreadCount: 1,
      isLive: false,
      nextClass: 'Friday, 11:00 AM',
    },
  ];

  const handleClassroomClick = (classroomId: number) => {
    navigate(`/classrooms/${classroomId}`);
  };

  return (
    <Box>
      <ClassroomHeader />
      <SearchBar />
      <List sx={styles.classList}>
        {classrooms.map((classroom, index) => (
          <React.Fragment key={classroom.id}>
            <ClassroomItem 
              classroom={classroom} 
              onClick={handleClassroomClick}
            />
            {index < classrooms.length - 1 && <Divider component="li" />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Classrooms;