import React from 'react';
import { useSelector } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';

import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import HomeRightSidebarActualThemesSectionItem from './HomeRightSidebarActualThemesSectionItem';
import HomeRightSidebarSectionShowMore from './HomeRightSidebarSectionShowMore';

import { HomeStylesType } from '../../../styles/HomeStyles';

import { selectTopicsItems, selectTopicsIsLoading } from '../../../store/ducks/topics/selectors';

type PropsType = {
    classes: HomeStylesType
}

const HomeRightSidebarActualThemesSection: React.FC<PropsType> = ({classes}) => {

    const topics = useSelector(selectTopicsItems)
    const topicsIsLoading = useSelector(selectTopicsIsLoading)

    return (
        <div className={classes.rightSidebarSection} aria-label='Лента: Актуальные темы'>
            <div className={classes.rightSidebarSectionHeader}>
                <Typography className={classes.rightSidebarSectionTitle}>
                    Актуальные темы для вас
                </Typography>
                <IconButton className={classes.commonIconButtonStyle} style={{ margin: -9 }} color='primary'>
                    <SettingsOutlinedIcon />
                </IconButton>
            </div>
            <div className={classes.rightSidebarSectionBody}>
                {   
                    topicsIsLoading ? <div className={classes.feedBlockLoadingProgress}><CircularProgress size={60} /></div> : 
                    topics.map(topic => {
                        return <HomeRightSidebarActualThemesSectionItem key={topic._id} classes={classes} topic={topic} />
                    }) 
                }
            </div>
            <HomeRightSidebarSectionShowMore classes={classes} />
        </div>
    )
}

export default HomeRightSidebarActualThemesSection;