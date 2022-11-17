import classNames from 'classnames/bind';
import config from '~/config';
import { useState, useEffect, useCallback } from 'react';
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
import * as userService from '~/services/userService';
const cx = classNames.bind(styles);
const INIT_PAGE = 1;
const PER_PAGE = 5;
function Sidebar() {
    const [page, setPage] = useState(INIT_PAGE);
    const [isSeeAll, setIsSeeAll] = useState(false);
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    useEffect(() => {
        userService
            .getSuggested({ page, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUsers((prevUsers) => [...prevUsers, ...data]);
            })
            .catch((error) => console.log(error));
    }, [page]);
    const handleViewChange = (isSeeAll) => {
        setIsSeeAll((prevState) => !prevState);
        if (isSeeAll) {
            setPage(page + 1);
        } else {
        }
    };

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
            <SuggestedAccounts
                label="Suggested accounts"
                data={suggestedUsers}
                onViewChange={handleViewChange}
                isSeeAll={isSeeAll}
            />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}
export default Sidebar;
