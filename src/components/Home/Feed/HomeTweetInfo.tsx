import React from 'react'
import cn from 'classnames';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import { HomeStylesType } from '../../../styles/HomeStyles'
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon/SvgIcon';

type PropsType = {
    classes: HomeStylesType
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
    infoName?: string
    infoText?: string,
    withoutText? : boolean,
    fullTweet?: boolean 
}

const HomeTweetInfo: React.FC<PropsType> = ({ classes, Icon, infoName, infoText, withoutText, fullTweet }) => {
    return (
        <div className={classes.tweetInfo}>
            <IconButton className={cn(classes.tweetInfoIconButton, {[`${classes.tweetInfoRetweetButton}`]: infoName === 'retweet', [`${classes.tweetInfoLikeButton}`]: infoName === 'like'} )}>
                <Icon className={cn(classes.tweetInfoIcon, { [`${classes.fullTweetInfoIcon}`]: fullTweet })} />
            </IconButton>
            { !withoutText && <Typography className={classes.tweetInfoText}>{infoText || ''}</Typography> }
            
        </div>
    )
}

export default HomeTweetInfo