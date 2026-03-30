// import ExplorePage from "@/pages/Explore";
import FollowingPage from "@/pages/Following";
// import FriendsPage from "@/pages/Friends";
import HomePage from "@/pages/Home";
import ProfilePage from "@/pages/Profile";
import UploadPage from "@/pages/Upload";

// Những trang không cần đăng nhập cũng có thể vào
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: FollowingPage },
    { path: '/profile', component: ProfilePage },
    { path: '/upload', component: UploadPage, layout: null }, // Layout của trang upload không dùng default layout
];

// Những trang bắt buộc đăng nhập mới có thể vào
const privateRoutes = [
    
];

export { publicRoutes, privateRoutes };