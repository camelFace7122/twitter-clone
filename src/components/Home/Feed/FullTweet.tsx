import React from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';
import CommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import LikeOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

import { HomeStylesType } from '../../../styles/HomeStyles';

import { selectFullTweetData, selectFullTweetIsLoading } from './../../../store/ducks/tweet/selectors';
import { fetchFullTweet, setFullTweet } from '../../../store/ducks/tweet/actionCreators';
import HomeTweetInfo from './HomeTweetInfo';
import { useCountForDisplay } from '../../../hooks/useCountForDisplay';
import { formatDate } from '../../../utils/dateHelpers';

type PropsType = {
    classes: HomeStylesType
}

const FullTweet: React.FC<PropsType> = ({ classes }) => {
    const params: { id?: string } = useParams()
    const dispatch = useDispatch()
    const id = params.id
    const tweet = useSelector(selectFullTweetData)
    const tweetIsLoading = useSelector(selectFullTweetIsLoading)

    const commentsCount = useCountForDisplay(tweet && tweet.commentsCount)
    const retweetsCount = useCountForDisplay(tweet && tweet.retweetsCount)
    const likeCount = useCountForDisplay(tweet && tweet.likeCount)

    React.useEffect(() => {
        if (id) {
            dispatch(fetchFullTweet(id))
            window.scrollTo(0, 0)
        }

        return () => {
            dispatch(setFullTweet(undefined))
        }
    }, [dispatch, id])

    if (tweetIsLoading) {
        return <div className={classes.feedBlockLoadingProgress}><CircularProgress size={60} /></div>
    }

    if (tweet) {
        return (
            <article className={classes.fullTweet}>
                <div className={classes.fullTweetAbout}>
                    <div className={classes.tweetAvatarWrapper}>
                        <Avatar alt="John Wick" src={tweet.user.avatarUrl} className={classes.feedAvatar} />
                    </div>
                    <div className={classes.tweetPost}>
                        <div className={cn(classes.tweetHeader, classes.fullTweetHeader)}>
                            <div className={classes.tweetHeaderAbout}>
                                <span className={classes.tweetHeaderAuthorName}>{tweet.user.fullname}</span>
                                {tweet.user.verified && <VerifiedUserIcon color='primary' className={classes.tweetHeaderOfficialStatus} />}
                            </div>
                            <div className={classes.tweetHeaderMoreButtonWrapper}>
                                <IconButton className={cn(classes.commonIconButtonStyle)} style={{ margin: '-9px -9px -9px 0' }}>
                                    <MoreIcon />
                                </IconButton>
                            </div>
                        </div>
                        <div className={classes.tweetHeaderUsername}>@{tweet.user.username}</div>
                    </div>
                </div>
                <div className={classes.tweetContent}>
                    <div className={classes.fullTweetTextContent}>
                        <span>
                            {tweet.text}
                        </span>
                        <div className={classes.tweetMediaContent}>
                                {
                                    tweet.mediaImg &&
                                    <div className={classes.tweetMediaImgWrapper}>
                                        <span className={classes.tweetMediaImgLink}>
                                            <img src={tweet.mediaImg} alt="Tweet" />
                                        </span>
                                    </div>
                                }
                            <div className={classes.tweetMediaTags}>
                                <span className={classes.tweetMediaTagLink}>
                                    {tweet.mediaTag}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.fullTweetMetaData}>
                    <span>{formatDate(tweet.createdAt, 'H:mm')}</span>
                    <span style={{ padding: '0 5px' }}>·</span>
                    <span>{formatDate(tweet.createdAt, 'd MMM y г.')}</span>
                    <span style={{ padding: '0 5px' }}>·</span>
                    <span>{tweet.userPlatform}</span>
                </div>
                <div className={classes.fullTweetActuality}>
                    <a href="/" className={classes.fullTweetActualityLink}>
                        <span>{retweetsCount}</span> ретвитов  
                    </a>
                    <a href="/" className={classes.fullTweetActualityLink}>
                        <span>{commentsCount}</span> комментариев  
                    </a>
                    <a href="/" className={classes.fullTweetActualityLink}>
                        <span>{likeCount}</span> отметок "Нравится"  
                    </a>
                </div>
                <div className={classes.fullTweetStatistics}>
                    <HomeTweetInfo classes={classes} Icon={CommentOutlinedIcon} withoutText fullTweet />
                    <HomeTweetInfo classes={classes} Icon={RepeatOutlinedIcon} infoName={'retweet'} withoutText fullTweet />
                    <HomeTweetInfo classes={classes} Icon={LikeOutlinedIcon} infoName={'like'} withoutText fullTweet />
                    <HomeTweetInfo classes={classes} Icon={ShareOutlinedIcon} withoutText fullTweet />
                </div>
            </article>
        )
    }

    return null
}

export default FullTweet