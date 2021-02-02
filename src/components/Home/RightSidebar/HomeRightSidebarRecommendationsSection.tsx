import React from 'react'

import Typography from '@material-ui/core/Typography';

import HomeRightSidebarRecommendationsSectionItem from './HomeRightSidebarRecommendationsSectionItem';
import HomeRightSidebarSectionShowMore from './HomeRightSidebarSectionShowMore';

import { HomeStylesType } from '../../../styles/HomeStyles';
import { CommonStylesType } from '../../../styles/common';

type PropsType = {
    classes: HomeStylesType
    commonClasses: CommonStylesType
}

const HomeRightSidebarRecommendationsSection: React.FC<PropsType> = ({classes, commonClasses}) => {
    return (
        <aside className={classes.rightSidebarSection} aria-label='Лента: Кого читать'>
            <div className={classes.rightSidebarSectionHeader}>
                <Typography className={classes.rightSidebarSectionTitle}>
                    Кого читать
                </Typography>
            </div>
            <div className={classes.rightSidebarSectionBody}>
                <HomeRightSidebarRecommendationsSectionItem classes={classes} commonClasses={commonClasses} avatarLink={'https://pbs.twimg.com/profile_images/1287616420201684994/Ublhk-rQ_400x400.jpg'} 
                                                            userName={'Sinopec Russia'} userId={'@SinopecRussia'} isVerified={false} withAd={true} />
                <HomeRightSidebarRecommendationsSectionItem classes={classes} commonClasses={commonClasses} avatarLink={'https://pbs.twimg.com/profile_images/1302872975054643200/1470CrLO_400x400.jpg'} 
                                                            userName={'Маргулан Сейсембай'} userId={'@mseissembai'} isVerified={false} withAd={false} />
                <HomeRightSidebarRecommendationsSectionItem classes={classes} commonClasses={commonClasses} avatarLink={'https://pbs.twimg.com/profile_images/996114977005162497/MWdzD9lF_400x400.jpg'} 
                                                            userName={'Grant Cardone'} userId={'@GrantCardone'} isVerified={true} withAd={false} />
            </div>
            <HomeRightSidebarSectionShowMore classes={classes} />
        </aside>
    )
}

export default HomeRightSidebarRecommendationsSection;