import PropTypes from 'prop-types';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import Tippy from '@tippyjs/react/headless';
const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data}></AccountPreview>
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
                    <Image
                        src={data.avatar}
                        alt={data.nickname}
                        className={cx('avatar')}
                    />
                    <div className={cx('item-info')}>
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
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItem;
