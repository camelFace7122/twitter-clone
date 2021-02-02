import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ShopIcon from '@material-ui/icons/Shop';

import { HomeStylesType } from '../../../styles/HomeStyles';
import { CommonStylesType } from '../../../styles/common';

type PropsType = {
    classes: HomeStylesType
    commonClasses: CommonStylesType,
    avatarLink?: string
    userName: string
    userId: string
    isVerified?: boolean
    withAd?: boolean
}

const HomeRightSidebarRecommendationsSectionItem: React.FC<PropsType> = ({commonClasses, classes, avatarLink, userName, userId, isVerified, withAd}) => {
    return (
        <div className={classes.rightSidebarSectionItem}>
            <div className={classes.rightSidebarSectionItemBody}>
                <div className={classes.rightSidebarSectionItemLeftSide}>
                    <a href={'/'} className={classes.feedAvatarWrapper}>
                        <div className={classes.feedAvatarOverlay}></div>
                        <Avatar src={avatarLink}
                            className={classes.feedAvatar} alt={userName} />
                    </a>
                </div>
                <div className={classes.rightSidebarSectionItemRightSide}>
                    <a href='/' className={classes.rightSidebarSectionItemRightSideUserLinkBlock}>
                        <div className={classes.rightSidebarSectionItemRightSideUserName}>
                            <span>{userName}</span>
                            {isVerified && <VerifiedUserIcon color='primary' className={classes.tweetHeaderOfficialStatus} />}
                        </div>
                        <div className={classes.rightSidebarSectionItemRightSideUserId}>
                            {userId}
                        </div>
                    </a>
                    <Button variant='outlined' color='primary' className={commonClasses.followButton} style={{ maxHeight: 30 }}>Читать</Button>
                </div>
            </div>
            {
                withAd && 
                <div className={classes.rightSidebarSectionItemAdStatus}>
                    <ShopIcon className={classes.rightSidebarSectionItemAdStatusIcon} />
                    <span>Реклама</span>
                </div>
            }
            
        </div>
    )
}

export default HomeRightSidebarRecommendationsSectionItem;