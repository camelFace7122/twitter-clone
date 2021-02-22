import React from 'react';
import cn from 'classnames';

import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';

import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

import { HomeStylesType } from '../../../styles/HomeStyles';

type PropsType = {
    classes: HomeStylesType
}

const TweetSettingsMenu: React.FC<PropsType> = ({ classes }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleTweetSettingsClick = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        e.preventDefault();

        if (anchorEl) {
            setAnchorEl(null)
        } else {
            setAnchorEl(e.currentTarget);
        }
    }

    const handleTweetSettingsClose = (e: React.MouseEvent<HTMLElement | EventTarget>) => {
        e.stopPropagation();
        e.preventDefault();

        setAnchorEl(null);
    };


    return (
        <div>
            <IconButton className={cn(classes.commonIconButtonStyle)} style={{ margin: '-9px -9px -9px 0' }}
                onClick={handleTweetSettingsClick}
                aria-label="tweet-settings"
                aria-controls="tweet-settings-menu"
                aria-haspopup="true"
            >
                <MoreIcon />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleTweetSettingsClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 30,
                }}
                transformOrigin={{
                    vertical: 5,
                    horizontal: 'right',
                }}
                className={classes.tweetSettingsMenu}
                PaperProps={{
                    elevation: undefined
                }}
                getContentAnchorEl={null}
            >
                <MenuItem onClick={handleTweetSettingsClose} className={classes.tweetSettingsMenuListItem}>Редактировать</MenuItem>
                <MenuItem onClick={handleTweetSettingsClose} className={classes.tweetSettingsMenuListItem}>Удалить</MenuItem>
            </Menu>
        </div>
    );
}

export default TweetSettingsMenu