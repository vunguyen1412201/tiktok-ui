import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Image from '~/components/Image';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    src={data.avatar}
                    alt={data.nickname}
                    className={cx('avatar')}
                />

                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{data.nickname}</strong>
                    {data.tick && (
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className={cx('check')}
                        />
                    )}
                </p>
                <p
                    className={cx('name')}
                >{`${data.first_name} ${data.last_name}`}</p>
                <p className={cx('analaytics')}>
                    <strong className={cx('value')}>
                        {data.followers_count}
                    </strong>
                    <span className={cx('label')}>Followers </span>
                    <strong className={cx('value')}>{data.likes_count} </strong>
                    <span className={cx('label')}>Followers </span>
                </p>
            </div>
        </div>
    );
}
AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountPreview;
