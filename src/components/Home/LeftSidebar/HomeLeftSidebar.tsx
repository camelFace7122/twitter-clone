import React from 'react';
import cn from 'classnames';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import EditIcon from '@material-ui/icons/Edit';

import HomeLeftSidebarMenu from './HomeLeftSidebarMenu';
import TweetFormModal from '../Modals/TweetFormModal';

import { HomeStylesType } from '../../../styles/HomeStyles';

type PropsType = {
    classes: HomeStylesType
}

const HomeLeftSidebar: React.FC<PropsType> = ({ classes }) => {
    let [open, setOpen] = React.useState(false)

    const handleTweetFormButtonClick = () => {
        setOpen(true)
    }
    
    const handleTweetFormModalClose = () => {
        setOpen(false)
    }

    return (
        <aside className={classes.leftSidebar}>
            <div className={classes.leftSidebarInner}>
                <div className={cn(classes.leftSidebarContentWrapper, classes.flexInner)}>
                    <div className={classes.leftSidebarContent}>
                        <HomeLeftSidebarMenu classes={classes} />
                        <Button variant='contained' color={'primary'} aria-label={'Твитнуть'} className={classes.tweetButton} onClick={handleTweetFormButtonClick}>
                            Твитнуть
                        </Button>
                        <IconButton className={classes.tweetIconButton} onClick={handleTweetFormButtonClick}>
                            <EditIcon />
                        </IconButton>
                        <TweetFormModal classes={classes} open={open} handleClose={handleTweetFormModalClose} />
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default HomeLeftSidebar;