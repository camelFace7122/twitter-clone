import React from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';

import PublicIcon from '@material-ui/icons/Public';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import EmojiOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import CalendarOutlinedIcon from '@material-ui/icons/EventOutlined';

import HomeTweetFormTextIndicator from './HomeTweetFormTextIndicator';

import { HomeStylesType } from '../../../styles/HomeStyles';
import { createNewTweet } from '../../../store/ducks/tweets/actionCreators';
import { selectNewTweetIsError, selectNewTweetIsLoading } from '../../../store/ducks/tweets/selectors';

type PropsType = {
    classes: HomeStylesType
    maxRows: number
    rows?: number
    isModal?: boolean
}

const MAX_LENGTH = 280

const HomeTweetForm: React.FC<PropsType> = ({classes, maxRows, rows = 0, isModal = false}) => {
    const [touched, setTouched] = React.useState(false)
    const [text, setText] = React.useState('')

    const newTweetIsLoading = useSelector(selectNewTweetIsLoading)
    const newTweetIsError = useSelector(selectNewTweetIsError)

    const dispatch = useDispatch()

    const textPercent = Math.floor((text.length * 100) / MAX_LENGTH)

    const textRemained = MAX_LENGTH - text.length

    const handleClickOnTextarea = () => {
        setTouched(true)
    }

    const handleChangeOnTextarea = (e: React.FormEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
    }

    const handleTweetFormSubmit = (e: React.MouseEvent) => {
        dispatch(createNewTweet(text))
        setText('')
    }

    return (
        <div className={classes.tweetForm}>
            <div className={classes.tweetFormAvatarWrapper}>
                <Avatar alt="John Snow" src="https://www.meme-arsenal.com/memes/8eca56a49dd8618f63f4c2a0dfc07ca4.jpg" className={classes.feedAvatar} />
            </div>
            <div className={classes.tweetFormWriteWrapper}>
                <div className={classes.tweetFormInputWrapper} onClick={handleClickOnTextarea}>
                    <TextareaAutosize placeholder='Что происходит?' className={classes.tweetFormInput} aria-label='Type your tweet text here' 
                                      onChange={handleChangeOnTextarea} value={text} rowsMax={maxRows} rows={rows} />
                </div>
                {
                    (touched || isModal) &&
                    <div className={classes.tweetPublishSettingButtonWrapper}>
                        <div role='button' tabIndex={0} className={classes.tweetPublishSettingButton}>
                            <PublicIcon className={classes.tweetPublicIcon} color='primary' />
                            <span>Отвечать могут все пользователи</span>
                        </div>
                    </div>
                }
                <div className={classes.tweetFormControls}>
                    <div className={classes.tweetFormFooterLeftSide}>
                        <IconButton color='primary' className={cn(classes.commonIconButtonStyle)}>
                            <ImageOutlinedIcon />
                        </IconButton>
                        <IconButton color='primary' className={cn(classes.commonIconButtonStyle)}>
                            <GifOutlinedIcon />
                        </IconButton>
                        <IconButton color='primary' className={cn(classes.commonIconButtonStyle)}>
                            <PollOutlinedIcon />
                        </IconButton>
                        <IconButton color='primary' className={cn(classes.commonIconButtonStyle)}>
                            <EmojiOutlinedIcon />
                        </IconButton>
                        <IconButton color='primary' className={cn(classes.commonIconButtonStyle)}>
                            <CalendarOutlinedIcon />
                        </IconButton>
                    </div>
                    <div className={classes.tweetFormFooterRightSide}>
                        {
                            text.length > 0 && 
                            <HomeTweetFormTextIndicator classes={classes} textRemained={textRemained} textPercent={textPercent} />
                        }
                        <Button variant='contained' color='primary' className={classes.tweetFormSubmitButton}
                                disabled={text.length === 0 || text.length >= MAX_LENGTH} onClick={handleTweetFormSubmit}>
                                {
                                    newTweetIsLoading ? <CircularProgress size={16} /> : 'Твитнуть'
                                }
                        </Button>
                    </div>
                </div>
                {
                    newTweetIsError &&
                    <Alert variant="filled" severity="error" className={classes.tweetFormError} role='alert'>
                        Ошибка при добавлении твита <span aria-labelledby='emoji' role='img'>☹️</span>
                    </Alert>
                }
            </div>
        </div>
    )
}

export default HomeTweetForm;