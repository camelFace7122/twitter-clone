import React from 'react';
import cn from 'classnames';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux'

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import StarOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

import HomeTweetForm from './HomeTweetForm';
import HomeTweet from './HomeTweet';

import BackButton from '../../common/BackButton';
import FullTweet from './FullTweet';

import { HomeStylesType } from '../../../styles/HomeStyles';

import { selectTweetsIsLoading, selectTweetsItems } from '../../../store/ducks/tweets/selectors';

type PropsType = {
    classes: HomeStylesType
}

const HomeFeed: React.FC<PropsType> = ({ classes }) => {
    
    const tweetsItems = useSelector(selectTweetsItems)
    const tweetsIsLoading = useSelector(selectTweetsIsLoading)

    return (
        <div className={classes.feed}>
            <div className={classes.flexInner}>
                <div className={classes.feedHeader}>
                    <Route path={'/home'} exact>
                        <Typography variant='h6' className={classes.feedTitle}>Главная</Typography>
                        <IconButton color='primary' className={cn(classes.commonIconButtonStyle)} style={{ marginRight: -9 }}>
                            <StarOutlinedIcon />
                        </IconButton>
                    </Route>
                    <Route path={'/home/tweet/:id'} exact>
                        <div className={classes.tweetPageTitle}>
                            <BackButton classes={classes} />
                            <Typography variant='h6' className={classes.feedTitle}>Твитнуть</Typography>
                        </div>
                    </Route>
                </div>
                <Route path={'/home'} exact>
                    <HomeTweetForm classes={classes} maxRows={30} />
                    <div className={classes.feedHeaderDivider}></div>
                </Route>
                <div className={classes.feedBlock}>
                    <Route path={'/home'} exact>
                        {   
                            tweetsIsLoading ? <div className={classes.feedBlockLoadingProgress}><CircularProgress size={60} /></div> :
                            tweetsItems.map(tweet => {
                                return tweet && <HomeTweet key={tweet._id} classes={classes} tweet={tweet} />
                            })
                        }
                    </Route>    
                    <Route path={'/home/tweet/:id'}>
                        <FullTweet classes={classes} />
                    </Route>
                </div>
            </div>
        </div>
    )
}

export default HomeFeed