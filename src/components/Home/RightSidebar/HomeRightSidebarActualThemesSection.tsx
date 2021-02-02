import React from 'react';

import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import HomeRightSidebarActualThemesSectionItem from './HomeRightSidebarActualThemesSectionItem';
import HomeRightSidebarSectionShowMore from './HomeRightSidebarSectionShowMore';

import { HomeStylesType } from '../../../styles/HomeStyles';

type PropsType = {
    classes: HomeStylesType
}


const HomeRightSidebarActualThemesSection: React.FC<PropsType> = ({classes}) => {
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
                <HomeRightSidebarActualThemesSectionItem classes={classes} />
            </div>
            <HomeRightSidebarSectionShowMore classes={classes} />
        </div>
    )
}

export default HomeRightSidebarActualThemesSection;