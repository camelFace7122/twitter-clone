import React from 'react';
import cn from 'classnames';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';

import HomeTweetForm from '../Feed/HomeTweetForm';

import { HomeStylesType } from '../../../styles/HomeStyles';

type PropsType = {
    classes: HomeStylesType
    open: boolean
    handleClose: () => void
}

const TweetFormModal: React.FC<PropsType> = ({ classes, open, handleClose }) => {

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.tweetFormModal}>
                <DialogContent className={classes.tweetFormModalContent}>
                    <div className={classes.tweetFormModalHeader}>
                        <IconButton color='primary' className={cn(classes.commonIconButtonStyle)} style={{ marginRight: -9 }}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <HomeTweetForm classes={classes} maxRows={30} rows={4} isModal={true} />
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default TweetFormModal;