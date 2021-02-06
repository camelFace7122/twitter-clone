import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import MoreIcon from '@material-ui/icons/MoreHorizOutlined';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import CommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import LikeOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

import { useCountForDisplay } from '../../../hooks/useCountForDisplay';

import { HomeStylesType } from '../../../styles/HomeStyles';
import HomeTweetInfo from './HomeTweetInfo';
import { Tweet } from '../../../store/ducks/tweets/contracts';

type PropsType = {
    classes: HomeStylesType
    tweet: Tweet
}

const HomeTweet: React.FC<PropsType> = ({ classes, tweet }) => {
    const commentsCount = useCountForDisplay(tweet.commentsCount)
    const retweetsCount = useCountForDisplay(tweet.retweetsCount)
    const likeCount = useCountForDisplay(tweet.likeCount)
    
    return (
        <article tabIndex={0} className={classes.feedTweet}>
            <Link to={`/home/tweet/${tweet._id}`} className={classes.feedTweetInner}>
                <div className={classes.tweetAvatarWrapper}>
                    <Avatar alt="John Wick" src={tweet.user.avatarUrl} className={classes.feedAvatar} />
                </div>
                <div className={classes.tweetPost}>
                    <div className={classes.tweetHeader}>
                        <div className={classes.tweetHeaderAbout}>
                            <span className={classes.tweetHeaderAuthorName}>{tweet.user.fullname}</span>
                            {tweet.user.verified && <VerifiedUserIcon color='primary' className={classes.tweetHeaderOfficialStatus} />}
                            <span className={classes.tweetHeaderUsername}>@{tweet.user.username}</span>
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
                                {tweet.text}
                            </span>
                            <div className={classes.tweetMediaContent}>
                                <div className={classes.tweetMediaImgWrapper}>
                                    <span className={classes.tweetMediaImgLink}>
                                        <img src={tweet.mediaImg} alt="Tweet" />
                                    </span>
                                </div>
                                <div className={classes.tweetMediaTags}>
                                    <span className={classes.tweetMediaTagLink}>
                                        {tweet.mediaTag}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.tweetStatistics}>
                        <HomeTweetInfo classes={classes} Icon={CommentOutlinedIcon} infoText={commentsCount} />
                        <HomeTweetInfo classes={classes} Icon={RepeatOutlinedIcon} infoName={'retweet'} infoText={retweetsCount} />
                        <HomeTweetInfo classes={classes} Icon={LikeOutlinedIcon} infoName={'like'} infoText={likeCount} />
                        <HomeTweetInfo classes={classes} Icon={ShareOutlinedIcon} withoutText />
                    </div>
                </div>
            </Link>
        </article>
    )
}

export default HomeTweet