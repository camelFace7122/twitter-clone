import React from 'react';
import cn from 'classnames';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import MoreIcon from '@material-ui/icons/MoreHorizOutlined';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import CommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import LikeOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

import { HomeStylesType } from '../../../styles/HomeStyles';
import HomeTweetInfo from './HomeTweetInfo';

type PropsType = {
    classes: HomeStylesType
}

const HomeTweet: React.FC<PropsType> = ({ classes }) => {
    return (
        <article tabIndex={0} className={classes.feedTweet}>
            <div className={classes.tweetAvatarWrapper}>
                <Avatar alt="John Wick" src="https://d2t8nixuow17vt.cloudfront.net/movie/shot/703219/w1500_793805.jpg" className={classes.feedAvatar} />
            </div>
            <div className={classes.tweetPost}>
                <div className={classes.tweetHeader}>
                    <div className={classes.tweetHeaderAbout}>
                        <span className={classes.tweetHeaderAuthorName}>Keanu Reeves</span>
                        <VerifiedUserIcon color='primary' className={classes.tweetHeaderOfficialStatus} />
                        <span className={classes.tweetHeaderUsername}>@meduzaproject</span>
                        <span style={{ padding: '0 5px' }}>·</span>
                        <span className={classes.tweetHeaderTimeFromPublish}>28 мин</span>
                    </div>
                    <div className={classes.tweetHeaderMoreButtonWrapper}>
                        <IconButton className={cn(classes.commonIconButtonStyle)} style={{ margin: '-9px -9px -9px 0' }}>
                            <MoreIcon />
                        </IconButton>
                    </div>
                </div>
                <div className={classes.tweetContent}>
                    <div className={classes.tweetTextContent}>
                        <span>
                            New episode of Ariel & The Bad Guy is up!
                            <br />
                            <br />
                            Kamaru Usman isn't going to let former teammate Gilbert Burns take his spot.
                        </span>
                        <div className={classes.tweetMediaContent}>
                            <div className={classes.tweetMediaImgWrapper}>
                                <a href="/" className={classes.tweetMediaImgLink}>
                                    <img src="https://pbs.twimg.com/media/Es3LK5uXABIQdBN?format=jpg&name=large" alt="Tweet" />
                                </a>
                            </div>
                            <div className={classes.tweetMediaTags}>
                                <a href="/" className={classes.tweetMediaTagLink}>
                                    KAMARU USMAN
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.tweetStatistics}>
                    <HomeTweetInfo classes={classes} Icon={CommentOutlinedIcon} infoText={'37'} />
                    <HomeTweetInfo classes={classes} Icon={RepeatOutlinedIcon} infoName={'retweet'} infoText={'1.2 тыс.'} />
                    <HomeTweetInfo classes={classes} Icon={LikeOutlinedIcon} infoName={'like'} infoText={'5.3 тыс.'} />
                    <HomeTweetInfo classes={classes} Icon={ShareOutlinedIcon} />
                </div>
            </div>
        </article>
    )
}

export default HomeTweet