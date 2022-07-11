import classNames from 'classnames/bind';
import styles from './Header.module.scss';

//bind casi object styles vao. tra ra 1 function cx
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;
