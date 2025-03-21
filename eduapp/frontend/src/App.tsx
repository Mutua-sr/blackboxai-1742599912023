import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import SwipeHandler from './components/navigation/SwipeHandler';
import Feed from './pages/Feed';
import Communities from './pages/Communities';
import Classrooms from './pages/Classrooms';
import Profile from './pages/Profile';
import ChatRoom from './components/chat/ChatRoom';

// Layout wrapper that conditionally renders the main layout
const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isChatRoute = location.pathname.includes('/communities/') || 
                     location.pathname.includes('/classrooms/');

  if (isChatRoute) {
    return <>{children}</>;
  }

  return <MainLayout>{children}</MainLayout>;
};

const App: React.FC = () => {
  return (
    <Router>
      <LayoutWrapper>
        <SwipeHandler>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/communities/:id" element={<ChatRoom />} />
            <Route path="/classrooms" element={<Classrooms />} />
            <Route path="/classrooms/:id" element={<ChatRoom />} />
            <Route path="/profile" element={<Profile />} />
            {/* Redirect removed routes */}
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/assignments" element={<Navigate to="/" replace />} />
            <Route path="/calendar" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </SwipeHandler>
      </LayoutWrapper>
    </Router>
  );
};

export default App;
