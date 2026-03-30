import Header from './Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.modulde.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    // Default layout sẽ có Header trên đầu và phần container ở dưới
    // Phần container sẽ chứa Sidebar bên trái và phần content bên phải

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;