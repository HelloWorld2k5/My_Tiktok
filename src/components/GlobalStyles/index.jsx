import 'normalize.css'; // Dùng normalize css được tải về từ npm
import './GlobalStyles.css';

// Global styles sẽ bọc web của chúng ta ở main.jsx
function GlobalStyles({ children }) {
    return children;
}

export default GlobalStyles;