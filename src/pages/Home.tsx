import React from 'react'
import cn from 'classnames';

import HomeLeftSidebar from '../components/Home/LeftSidebar/HomeLeftSidebar'
import HomeFeed from '../components/Home/Feed/HomeFeed';

import { useHomeStyles } from './../styles/HomeStyles'
import HomeRightSidebar from '../components/Home/RightSidebar/HomeRightSidebar';

const Home = () => {
    const classes = useHomeStyles()

    return (
        <div className={classes.wrapper}>
            <HomeLeftSidebar classes={classes} />
            <main className={classes.mainBlock}>
                <div className={cn(classes.mainBlockInner, classes.flexInner)}>
                    <div className={classes.mainBlockContent}>
                        <HomeFeed classes={classes} />
                        <HomeRightSidebar classes={classes} />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home