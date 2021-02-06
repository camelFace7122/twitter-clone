import React from 'react';
import { useHistory } from 'react-router-dom';

import { IconButton } from '@material-ui/core';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { HomeStylesType } from '../../styles/HomeStyles';

type PropsType = {
    classes: HomeStylesType
}

const BackButton: React.FC<PropsType> = ({classes}) => {

    const history = useHistory()

    const onBackButtonClick = () => {
        history.goBack()
    }

    return (
        <IconButton className={classes.commonIconButtonStyle} color='primary' onClick={onBackButtonClick} style={{marginRight: 20}}>
            <ArrowBackIcon />
        </IconButton>
    )
}

export default BackButton