import React, { useEffect, useState } from 'react';

import { LoadingState } from '../store/types';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const withSnackbar = (Component: React.FC<any> | React.ComponentClass<any>, successText: string, errorText: string) => {
    return ({status, ...props}: any) => {
        const [openSnackbar, setOpenSnackbar] = useState<boolean>(false)

        const handleSnackbarClose = () => {
            setOpenSnackbar(false)
        }

        useEffect( () => {
            if (status !== LoadingState.NEVER) {
                setOpenSnackbar(true)
            }
        }, [status] )

        return (
            <>
                <Component {...props} isLoading={status === LoadingState.LOADING} />
                <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
                    <div>
                        {
                            status === LoadingState.LOADED &&
                            <Alert onClose={handleSnackbarClose} severity="success">
                                {successText}
                            </Alert>
                        }
                        {
                            status === LoadingState.ERROR && 
                            <Alert onClose={handleSnackbarClose} severity="error">
                                {errorText}
                            </Alert>
                        }
                    </div>
                </Snackbar>
            </>
        )
    }
}

export default withSnackbar