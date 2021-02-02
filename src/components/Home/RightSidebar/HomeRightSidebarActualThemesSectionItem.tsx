import React from 'react';

import IconButton from '@material-ui/core/IconButton';

import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

import { HomeStylesType } from '../../../styles/HomeStyles';

type PropsType = {
    classes: HomeStylesType
}

const HomeRightSidebarActualThemesSectionItem: React.FC<PropsType> = ({classes}) => {
    return (
        <div className={classes.rightSidebarSectionItem}>
            <div className={classes.rightSidebarActualsSectionItemHeader}>
                <span className={classes.rightSidebarSectionSimpleText}>Актуальные темы: Казахстан</span>
                <IconButton className={classes.commonIconButtonStyle} style={{ margin: -9 }}>
                    <MoreIcon />
                </IconButton>
            </div>
            <div>
                <span style={{ fontWeight: 700 }}>
                    Навального
                        </span>
            </div>
            <div className={classes.rightSidebarActualsSectionItemFooter}>
                <span className={classes.rightSidebarSectionSimpleText}>Твитов: 32,8 тыс.</span>
            </div>
        </div>
    )
}

export default HomeRightSidebarActualThemesSectionItem;