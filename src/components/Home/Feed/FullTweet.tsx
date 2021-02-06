import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import HomeTweet from './HomeTweet';

import { HomeStylesType } from '../../../styles/HomeStyles';

import {selectFullTweetData, selectFullTweetIsLoading} from './../../../store/ducks/tweet/selectors'
import { fetchFullTweet, setFullTweet } from '../../../store/ducks/tweet/actionCreators';

type PropsType = {
    classes: HomeStylesType
}  

const FullTweet: React.FC<PropsType> = ({classes}) => {
    const params: {id?: string} = useParams()
    const dispatch = useDispatch()
    const id = params.id
    const tweet = useSelector(selectFullTweetData)
    const tweetIsLoading = useSelector(selectFullTweetIsLoading)

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
        return <HomeTweet classes={classes} tweet={tweet} />
    }
    
    return null
}

export default FullTweet