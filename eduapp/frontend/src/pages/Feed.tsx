import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  Avatar,
  Chip,
  Button,
  Divider,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import {
  ThumbUp as ThumbUpIcon,
  ChatBubbleOutline as CommentIcon,
  Share as ShareIcon,
  Search as SearchIcon,
  FilterList as FilterListIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material';
import { feedStyles as styles } from '../styles/pages/Feed.styles';

interface Post {
  id: number;
  author: string;
  avatar: string;
  title: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  tags: string[];
}

const FeedHeader: React.FC = () => (
  <Stack sx={styles.header}>
    <Typography variant="h5">Feed</Typography>
    <IconButton>
      <MoreVertIcon />
    </IconButton>
  </Stack>
);

const SearchBar: React.FC = () => (
  <Stack sx={styles.searchContainer}>
    <TextField
      fullWidth
      placeholder="Search posts..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      size="small"
      sx={styles.searchField}
    />
    <Button
      variant="outlined"
      startIcon={<FilterListIcon />}
      sx={styles.filterButton}
    >
      Filter
    </Button>
  </Stack>
);

const PostCard: React.FC<{ post: Post }> = ({ post }) => (
  <Card sx={styles.postCard}>
    <CardContent>
      <Stack spacing={2}>
        <Stack sx={styles.postHeader}>
          <Stack sx={styles.authorInfo}>
            <Avatar sx={{ bgcolor: 'primary.main' }}>{post.avatar}</Avatar>
            <Box>
              <Typography variant="subtitle1">{post.author}</Typography>
              <Typography variant="caption" color="text.secondary">
                {post.timestamp}
              </Typography>
            </Box>
          </Stack>
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        </Stack>

        <Box sx={styles.postContent}>
          <Typography variant="h6" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {post.content}
          </Typography>
        </Box>

        <Stack sx={styles.tags}>
          {post.tags.map((tag) => (
            <Chip 
              key={tag} 
              label={tag} 
              size="small"
              sx={styles.tag}
            />
          ))}
        </Stack>

        <Divider />

        <Stack sx={styles.actions}>
          <Button
            startIcon={<ThumbUpIcon />}
            size="small"
            sx={styles.actionButton}
          >
            {post.likes}
          </Button>
          <Button
            startIcon={<CommentIcon />}
            size="small"
            sx={styles.actionButton}
          >
            {post.comments}
          </Button>
          <Button
            startIcon={<ShareIcon />}
            size="small"
            sx={styles.actionButton}
          >
            Share
          </Button>
        </Stack>
      </Stack>
    </CardContent>
  </Card>
);

const Feed: React.FC = () => {
  const posts: Post[] = [
    {
      id: 1,
      author: 'Alex Thompson',
      avatar: 'AT',
      title: 'Understanding React Hooks',
      content: 'Can someone explain how useEffect works? I\'m having trouble understanding the dependency array.',
      timestamp: '2 hours ago',
      likes: 15,
      comments: 8,
      tags: ['React', 'JavaScript', 'Programming'],
    },
    {
      id: 2,
      author: 'Maria Garcia',
      avatar: 'MG',
      title: 'Database Design Best Practices',
      content: 'What are some best practices for designing a scalable database structure? Working on a project and need advice.',
      timestamp: '5 hours ago',
      likes: 23,
      comments: 12,
      tags: ['Database', 'Architecture', 'SQL'],
    },
    {
      id: 3,
      author: 'John Smith',
      avatar: 'JS',
      title: 'Machine Learning Resources',
      content: 'Looking for recommended resources to start learning machine learning. Any suggestions for beginners?',
      timestamp: '1 day ago',
      likes: 45,
      comments: 20,
      tags: ['Machine Learning', 'AI', 'Data Science'],
    },
  ];

  return (
    <Box>
      <FeedHeader />
      <SearchBar />
      <Stack sx={styles.postList}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Stack>
    </Box>
  );
};

export default Feed;