import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/caccc0d1d24bfedd188bdfd092e4a697~c5_300x300.webp?x-expires=1659751200x-signature=UCzSS79%2FtUayS%2FoxclKxoCW%2B1VM%3D"
                alt="etoet"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>et o et</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('username')}>et o et</span>
            </div>
        </div>
    );
}

export default AccountItem;
