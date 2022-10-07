import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
    LiveActiveIcon,
    LiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                    to={config.routes.home}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                    to={config.routes.following}
                ></MenuItem>
                <MenuItem
                    title="Live"
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                    to={config.routes.live}
                ></MenuItem>
            </Menu>
            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}
export default Sidebar;
