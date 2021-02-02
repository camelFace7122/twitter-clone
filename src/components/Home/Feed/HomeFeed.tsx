import React from 'react';
import cn from 'classnames';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import StarOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

import HomeTweetForm from './HomeTweetForm';
import HomeTweet from './HomeTweet';

import { HomeStylesType } from '../../../styles/HomeStyles';

type PropsType = {
    classes: HomeStylesType
}

const HomeFeed: React.FC<PropsType> = ({ classes }) => {
    return (
        <div className={classes.feed}>
            <div className={classes.flexInner}>
                <div className={classes.feedHeader}>
                    <Typography variant='h6' className={classes.feedTitle}>Главная</Typography>
                    <IconButton color='primary' className={cn(classes.commonIconButtonStyle)} style={{ marginRight: -9 }}>
                        <StarOutlinedIcon />
                    </IconButton>
                </div>
                <HomeTweetForm classes={classes} maxRows={30} />
                <div className={classes.feedHeaderDivider}></div>
                <div className={classes.feedBlock}>
                    <HomeTweet classes={classes} />
                    <HomeTweet classes={classes} />
                </div>
            </div>
        </div>
    )
}

export default HomeFeed