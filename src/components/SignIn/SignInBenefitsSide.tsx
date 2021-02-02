import React from 'react';
import cn from 'classnames';

import Typography from '@material-ui/core/Typography';

import SearchIcon from '@material-ui/icons/Search';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import TwitterIcon from '@material-ui/icons/Twitter';

import { signInStylesType } from '../../styles/SignInStyles';

type PropsType = {
    classes: signInStylesType
}

const SignInBenefitsSide: React.FC<PropsType> = ({classes}) => {
    return (
        <section className={cn(classes.benefitsSide, classes.sidesCommon)}>
            <TwitterIcon color='primary' className={classes.benefitsSideBiggestIcon} />
            <div className={classes.sidesInner}>
                <ul className={classes.benefitsSideInfoList}>
                    <li className={classes.benefitsSideInfoListItem}>
                        <SearchIcon className={classes.benefitsSideInfoListIcon} />
                        <Typography className={classes.benefitsSideInfoListText}>Читайте о том, что вам интересно.</Typography>
                    </li>
                    <li className={classes.benefitsSideInfoListItem}>
                        <PeopleAltOutlinedIcon className={classes.benefitsSideInfoListIcon} />
                        <Typography className={classes.benefitsSideInfoListText}>Узнайте, о чем говорят в мире.</Typography>
                    </li>
                    <li className={classes.benefitsSideInfoListItem}>
                        <ChatBubbleOutlineIcon className={classes.benefitsSideInfoListIcon} />
                        <Typography className={classes.benefitsSideInfoListText}>Присоединяйтесь к общению.</Typography>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default SignInBenefitsSide;

