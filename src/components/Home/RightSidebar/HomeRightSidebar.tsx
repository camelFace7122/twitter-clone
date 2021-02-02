import React from 'react';
import cn from 'classnames';

import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

import HomeRightSidebarSearchField from './HomeRightSidebarSearchField';
import HomeRightSidebarActualThemesSection from './HomeRightSidebarActualThemesSection';
import HomeRightSidebarRecommendationsSection from './HomeRightSidebarRecommendationsSection';

import { HomeStylesType } from '../../../styles/HomeStyles';
import { useCommonStyles } from '../../../styles/common';

type PropsType = {
    classes: HomeStylesType
}

const HomeRightSidebar: React.FC<PropsType> = ({ classes }) => {
    const commonClasses = useCommonStyles()
    
    return (
        <div className={classes.rightSidebarWrapper}>
            <div className={classes.rightSidebar}>
                <div></div>
                <div className={classes.rightSidebarInner}>
                    <HomeRightSidebarSearchField classes={classes} />
                    <div className={classes.rightSidebarContent}>
                        <HomeRightSidebarActualThemesSection classes={classes} />
                        <HomeRightSidebarRecommendationsSection commonClasses={commonClasses} classes={classes} />
                        <footer className={classes.rightSidebarTwitterFooter}>
                            <a href="/" className={cn(classes.rightSidebarSectionSimpleText, classes.rightSidebarTwitterFooterItem)}>Условия предоставления услуг</a>
                            <a href="/" className={cn(classes.rightSidebarSectionSimpleText, classes.rightSidebarTwitterFooterItem)}>Политика конфиденциальности</a>
                            <a href="/" className={cn(classes.rightSidebarSectionSimpleText, classes.rightSidebarTwitterFooterItem)}>Политика в отношении файлов cookie</a>
                            <a href="/" className={cn(classes.rightSidebarSectionSimpleText, classes.rightSidebarTwitterFooterItem)}>Информация о рекламе</a>
                            <span className={cn(classes.rightSidebarTwitterFooterMore, classes.rightSidebarTwitterFooterItem)}>
                                <a href="/" className={classes.rightSidebarSectionSimpleText}>Еще</a>
                                <MoreIcon className={classes.rightSidebarTwitterFooterMoreIcon} />
                            </span>
                            <span className={cn(classes.rightSidebarSectionSimpleText, classes.rightSidebarTwitterFooterItem)}>© Twitter, Inc., 2021.</span> 
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeRightSidebar;