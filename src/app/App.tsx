import { BrowserRouter, Routes, Route } from 'react-router';
import MainFeed from './components/MainFeed';
import PostDetail from './components/PostDetail';
import ReplyScreen from './components/ReplyScreen';
import CreateStory from './components/CreateStory';
import CreateStoryPreview from './components/CreateStoryPreview';
import CourseDetailScreen from './components/CourseDetailScreen';
import CourseLessonScreen from './components/CourseLessonScreen';
import CourseTestDetailScreen from './components/CourseTestDetailScreen';
import CourseTestResultScreen from './components/CourseTestResultScreen';
import CourseTestTakingScreen from './components/CourseTestTakingScreen';
import CourseScreen from './components/CourseScreen';
import ScheduleScreen from './components/ScheduleScreen';
import LiveScreen from './components/LiveScreen';
import LiveDetailScreen from './components/LiveDetailScreen';
import { AllCoursesScreen, MyCoursesScreen } from './components/CourseListScreens';
import Profile from './components/Profile';
import { ProfileCoursesScreen, ProfileInfoScreen, ProfilePasswordScreen, ProfileSupportScreen, ProfileTestsScreen } from './components/ProfileSubScreens';
import PersonalFeed from './components/PersonalFeed';
import Groups from './components/Groups';
import GroupDetail from './components/GroupDetail';
import GroupPostShare from './components/GroupPostShare';
import GroupWritingPost from './components/GroupWritingPost';
import GroupShareKnowledge from './components/GroupShareKnowledge';
import GroupShareDocument from './components/GroupShareDocument';
import GroupShareDocumentComplete from './components/GroupShareDocumentComplete';
import Events from './components/Events';
import EventDetail from './components/EventDetail';

export default function App() {
  return (
    <BrowserRouter>
      <div className="size-full flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-[393px] h-full bg-white">
          <Routes>
            <Route path="/" element={<MainFeed />} />
            <Route path="/post/:postId" element={<PostDetail />} />
            <Route path="/post/:postId/reply/:commentId?" element={<ReplyScreen />} />
            <Route path="/create-story" element={<CreateStory />} />
            <Route path="/create-story/preview" element={<CreateStoryPreview />} />
            <Route path="/courses" element={<CourseScreen />} />
            <Route path="/courses/all" element={<AllCoursesScreen />} />
            <Route path="/courses/my" element={<MyCoursesScreen />} />
            <Route path="/courses/vsat" element={<CourseDetailScreen />} />
            <Route path="/courses/vsat/lessons/ngu-van-1" element={<CourseLessonScreen />} />
            <Route path="/courses/vsat/lessons/ngu-van-1/tests/test-1" element={<CourseTestDetailScreen />} />
            <Route path="/courses/vsat/lessons/ngu-van-1/tests/test-1/take" element={<CourseTestTakingScreen />} />
            <Route path="/courses/vsat/lessons/ngu-van-1/tests/test-1/result" element={<CourseTestResultScreen />} />
            <Route path="/schedule" element={<ScheduleScreen />} />
            <Route path="/live" element={<LiveScreen />} />
            <Route path="/live/vsat-ngu-van-1" element={<LiveDetailScreen />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/courses" element={<ProfileCoursesScreen />} />
            <Route path="/profile/tests" element={<ProfileTestsScreen />} />
            <Route path="/profile/info" element={<ProfileInfoScreen />} />
            <Route path="/profile/password" element={<ProfilePasswordScreen />} />
            <Route path="/profile/support" element={<ProfileSupportScreen />} />
            <Route path="/personal-feed" element={<PersonalFeed />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/groups/:groupId" element={<GroupDetail />} />
            <Route path="/groups/:groupId/post" element={<GroupPostShare />} />
            <Route path="/groups/:groupId/writing" element={<GroupWritingPost />} />
            <Route path="/groups/:groupId/share-knowledge" element={<GroupShareKnowledge />} />
            <Route path="/groups/:groupId/share-document" element={<GroupShareDocument />} />
            <Route path="/groups/:groupId/share-document-complete" element={<GroupShareDocumentComplete />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:eventId" element={<EventDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
