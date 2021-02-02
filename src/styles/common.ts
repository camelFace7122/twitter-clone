import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../theme';

export const useCommonStyles = makeStyles({
    followButton: {
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        }
    }
})

export type CommonStylesType = ReturnType<typeof useCommonStyles>