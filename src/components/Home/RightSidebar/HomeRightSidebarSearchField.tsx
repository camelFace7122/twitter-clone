import React from 'react';

import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InputBase from '@material-ui/core/InputBase';

import { HomeStylesType } from '../../../styles/HomeStyles';

type PropsType = {
    classes: HomeStylesType
}

const HomeRightSidebarSearchField: React.FC<PropsType> = ({classes}) => {
    return (
        <div className={classes.rightSidebarSearchField}>
            <SearchOutlinedIcon className={classes.rightSidebarSearchFieldIcon} />
            <InputBase placeholder={'Поиск в Твиттере'} className={classes.rightSidebarSearchFieldInput} />
        </div>
    )
}

export default HomeRightSidebarSearchField;