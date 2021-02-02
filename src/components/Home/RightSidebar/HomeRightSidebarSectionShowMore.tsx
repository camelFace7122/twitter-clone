import React from 'react';

import { HomeStylesType } from '../../../styles/HomeStyles';

type PropsType = {
    classes: HomeStylesType
}

const HomeRightSidebarSectionShowMore: React.FC<PropsType> = ({ classes }) => {
    return (
        <div className={classes.rightSidebarSectionShowMore}>
            <a href="/" className={classes.rightSidebarSectionShowMoreLink}>
                Показать еще
            </a>
        </div>
    )
}

export default HomeRightSidebarSectionShowMore;