import Following from "@/pages/Following";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import Upload from "@/pages/Upload";
// import ExplorePage from "@/pages/Explore";
// import FriendsPage from "@/pages/Friends";

// Những trang không cần đăng nhập cũng có thể vào
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: null }, // Layout của trang upload không dùng default layout
];

// Những trang bắt buộc đăng nhập mới có thể vào
const privateRoutes = [
    
];

export { publicRoutes, privateRoutes };