import classNames from "classnames/bind";

import styles from './Sidebar.module.css';

const cx = classNames.bind(styles);

function Sidebar() {

    return (
        <div className={cx('wrapper')}>
            <h3>Day la side bar</h3>
        </div>
    );
}

export default Sidebar;