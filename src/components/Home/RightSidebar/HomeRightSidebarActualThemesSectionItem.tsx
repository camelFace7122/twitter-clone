import React from 'react';
import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';

import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

import { HomeStylesType } from '../../../styles/HomeStyles';
import { Topic } from '../../../store/ducks/topics/contracts';
import { useCountForDisplay } from '../../../hooks/useCountForDisplay';

type PropsType = {
    classes: HomeStylesType,
    topic: Topic
}

const HomeRightSidebarActualThemesSectionItem: React.FC<PropsType> = ({classes, topic}) => {
    
    const tweetsCount = useCountForDisplay(topic.tweetsCount)

    return (
        <div className={classes.rightSidebarSectionItem}>
            <Link to={`/home/search?q=${topic.name}`} className={classes.rightSidebarSectionItemInner}>
            <div className={classes.rightSidebarActualsSectionItemHeader}>
                <span className={classes.rightSidebarSectionSimpleText}>Актуальные темы: Казахстан</span>
                <IconButton className={classes.commonIconButtonStyle} style={{ margin: -9 }}>
                    <MoreIcon />    
                </IconButton>
            </div>
            <div>
                <span style={{ fontWeight: 700 }}>
                    {topic.name}
                </span>
            </div>
            <div className={classes.rightSidebarActualsSectionItemFooter}>
                <span className={classes.rightSidebarSectionSimpleText}>Твитов: {tweetsCount}</span>
            </div>
            </Link>
        </div>
    )
}

export default HomeRightSidebarActualThemesSectionItem;