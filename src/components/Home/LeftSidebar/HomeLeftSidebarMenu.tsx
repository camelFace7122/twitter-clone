import React from 'react';
import { NavLink } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import HomeIcon from '@material-ui/icons/Home';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import EmailIcon from '@material-ui/icons/Email';
import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ListOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import ListIcon from '@material-ui/icons/ListAlt';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import PersonIcon from '@material-ui/icons/Person';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

import HomeLeftSidebarMenuItem from './HomeLeftSidebarMenuItem';

import { HomeStylesType } from '../../../styles/HomeStyles';

type PropsType = {
    classes: HomeStylesType
}

const HomeLeftSidebarMenu: React.FC<PropsType> = ({ classes }) => {
    return (
        <ul className={classes.leftSidebarMenu}>
            <li className={classes.leftSidebarMenuItem}>
                <NavLink exact to='/' style={{outline: 'none'}}>
                    <IconButton className={classes.commonIconButtonStyle} color='primary'>
                        <TwitterIcon className={classes.leftSidebarMenuItemIcon} />
                    </IconButton>
                </NavLink>
            </li>
            <HomeLeftSidebarMenuItem classes={classes} UnactiveIcon={HomeOutlinedIcon} ActiveIcon={HomeIcon} text={'Главная'} pathTo='/home' />
            <HomeLeftSidebarMenuItem classes={classes} UnactiveIcon={SearchOutlinedIcon} ActiveIcon={SearchIcon} text={'Поиск'} pathTo='/explore' />
            <HomeLeftSidebarMenuItem classes={classes} UnactiveIcon={NotificationsOutlinedIcon} ActiveIcon={NotificationsIcon} text={'Уведомления'} pathTo='/notifications' />
            <HomeLeftSidebarMenuItem classes={classes} UnactiveIcon={EmailOutlinedIcon} ActiveIcon={EmailIcon} text={'Сообщения'} pathTo='/messages' />
            <HomeLeftSidebarMenuItem classes={classes} UnactiveIcon={BookmarkOutlinedIcon} ActiveIcon={BookmarkIcon} text={'Закладки'} pathTo='/i/bookmarks' />
            <HomeLeftSidebarMenuItem classes={classes} UnactiveIcon={ListOutlinedIcon} ActiveIcon={ListIcon} text={'Списки'} pathTo='/lists' />
            <HomeLeftSidebarMenuItem classes={classes} UnactiveIcon={PersonOutlinedIcon} ActiveIcon={PersonIcon} text={'Профиль'} pathTo='/user' />
            <HomeLeftSidebarMenuItem classes={classes} UnactiveIcon={MoreIcon} text={'Еще'} pathTo='/more' />
        </ul>
    )
}

export default HomeLeftSidebarMenu;