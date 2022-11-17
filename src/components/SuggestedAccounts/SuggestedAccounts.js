import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function SuggestedAccounts({
    label,
    data = [],
    onViewChange,
    isSeeAll = false,
}) {
    // console.log(data);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}
            <p
                className={cx('more-btn')}
                onClick={() => onViewChange(!isSeeAll)}
            >
                {isSeeAll ? 'See less' : 'See all'}
            </p>
        </div>
    );
}
SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default SuggestedAccounts;
