import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import Typography from '@material-ui/core/Typography';

import { HomeStylesType } from '../../../styles/HomeStyles';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon/SvgIcon';

type PropsType = {
    classes: HomeStylesType
    UnactiveIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
    ActiveIcon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>
    text: string
    pathTo?: string
}

const HomeLeftSidebarMenuItem: React.FC<PropsType> = ({ classes, UnactiveIcon, ActiveIcon, text, pathTo}) => {
    return (
        <li className={classes.leftSidebarMenuItem}>
            <NavLink to={pathTo ? pathTo : ''} className={classes.leftSidebarMenuItemNavLink} activeClassName={classes.leftSidebarMenuItemActiveNavLink}>
                <UnactiveIcon className={cn(classes.leftSidebarMenuItemIcon, {[`${classes.unactiveIcon}`]: ActiveIcon})} />
                {ActiveIcon ? <ActiveIcon className={cn(classes.leftSidebarMenuItemIcon, classes.activeIcon)} /> : null}
                <Typography className={classes.leftSidebarMenuItemText}>
                    {text}
                </Typography>
            </NavLink>
        </li>
    )
}

export default HomeLeftSidebarMenuItem;