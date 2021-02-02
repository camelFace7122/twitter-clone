import React from 'react';
import cn from 'classnames';

import CircularProgress from '@material-ui/core/CircularProgress';

import { HomeStylesType } from '../../../styles/HomeStyles';

type PropsType = {
    classes: HomeStylesType
    textPercent: number
    textRemained: number
}

const HomeTweetFormTextIndicator: React.FC<PropsType> = ({ classes, textPercent, textRemained }) => {
    return (
        <div className={cn(classes.tweetFormTextIndicator, { [`${classes.tweetFormTextIndicatorIncreased}`]: textRemained <= 20 })}>
            <CircularProgress variant='static' value={100} size={20}
                className={cn(classes.tweetFormGreyProgress, { [`${classes.tweetFormTransparentProgress}`]: textRemained <= -10 })} />
            <CircularProgress variant='static' value={textPercent >= 100 ? 100 : textPercent} size={20}
                className={cn(classes.tweetFormMainProgress, { [`${classes.tweetFormMainProgressIsFull}`]: textPercent >= 100 },
                    { [`${classes.tweetFromMainProgressWarning}`]: textRemained <= 20 && textRemained > 0 },
                    { [`${classes.tweetFormTransparentProgress}`]: textRemained <= -10 })} />
            {
                textRemained <= 20 &&
                <span className={cn(classes.tweetFormTextIndicatorLabel, { [`${classes.tweetFormTextIndicatorLabelRed}`]: textRemained <= 0 })}>
                    {textRemained}
                </span>
            }
        </div>
    )
}

export default HomeTweetFormTextIndicator;