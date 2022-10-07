import PropTypes from 'prop-types';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview></AccountPreview>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy
                offset={[-20, 0]}
                interactive
                delay={[800, 0]}
                placement="bottom"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7ed24eae83ade506fd0f42bb175c37e1~c5_100x100.jpeg?x-expires=1663261200&x-signature=%2BvYpTogWENnMNJ0JillXu08YXyo%3D"
                        alt=""
                        className={cx('avatar')}
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>Nguyenhoangvu</strong>
                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                className={cx('check')}
                            />
                        </p>
                        <p className={cx('name')}>Nguyễn Hoàng Vũ</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {};
export default AccountItem;
