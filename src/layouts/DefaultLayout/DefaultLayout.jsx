import classNames from 'classnames/bind';

import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.css';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    // Default layout của tiktok có phần sidebar bên trái và main content bên phải
    // children chính là main content thay đổi với từng trang khác nhau

    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            {children}
        </div>
    );
}

export default DefaultLayout;