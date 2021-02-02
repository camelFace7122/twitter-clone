import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../theme';
import { colors } from './colors'

export const useSignInStyles = makeStyles({
    wrapper: {    
        display: 'flex',
        height: 'calc(100vh - 85px)'
    },
    benefitsSide: {
        backgroundColor: colors.sky.main,
        position: 'relative',
        overflow: 'hidden'
    },
    sidesCommon: {
        flex: '0 0 50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    sidesInner: {
        maxWidth: 380,
    },
    benefitsSideInfoList: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        position: 'relative'
    },
    benefitsSideInfoListItem: {
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.primary.contrastText,
        '& + li': {
            marginTop: 30,
        }
    },
    benefitsSideInfoListText: {
        marginLeft: 15,
        fontSize: 19,
        fontWeight: 700
    },
    benefitsSideInfoListIcon: {
        fontSize: 34
    },
    benefitsSideBiggestIcon: {
        position: 'absolute',
        right: '-50vh',
        top: '-35vh',
        height: '160vh',
        width: '160vh',
    },
    authSide: {
        backgroundColor: theme.palette.primary.contrastText,
    },
    authSideTwitterIcon: {
        fontSize: 50,
        marginBottom: 28
    },
    authSideTitle: {
        fontSize: 30,
        fontWeight: 700,
        lineHeight: 1.3125,
        marginBottom: 50
    },
    authSideSubtitle: {
        fontWeight: 700,
        marginBottom: 15
    },
    authSideButton: {
        width: '100%',
        minHeight: '49px',
        minWidth: '79px',
        '& + button': {
            marginTop: 15
        }
    },
    signUpModal: {
        '& .MuiPaper-root': {
            height: 650,
            maxHeight: '90vh',
        }
    },
    signInModal: {
        '& .MuiPaper-root': {
            paddingBottom: 20,
            minWidth: 600
        }
    },
    authModalRegisterBtn: {
        height: 30,
        marginLeft: 'auto'
    },
    authModalLoginBtn: {
        minHeight: 49,
    },
    authModalTopWrapper: {
        display: 'flex',
        flex: '0 0 auto'
    },
    authModalTopPressingBlock: {
        flexBasis: '50%',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    authModalTopIcon: {
        fontSize: 28
    },
    signInModalTopWrapper: {
        textAlign: 'center',
        '& *': {
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
    authModalTitle: {
        border: 'none',
    },
    authModalTitleText: {
        lineHeight: 1,
        fontSize: 23,
        fontWeight: 700
    },
    authModalTextField: {
        marginBottom: 10,
        marginTop: 10
    },
    authWaySwitcher: {
        marginTop: 15,
        fontSize: 15
    },
    authModalBirthDateFormDescription: {
        marginTop: 30,
        color: theme.palette.secondary.dark,
        '& p': {
            lineHeight: '1.3',
            fontSize: 15,
        }
    },
    authModalBirthDateFormGroup: {
        display: 'flex',
        flexDirection: 'row'
    },
    authModalBirthDateFormTitle: {
        fontWeight: 700,    
        color: colors.black.main
    },
    authModalFooter: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '25px',
      '& span': {
        margin: '0 5px'
      },
      '& a': {
        cursor: 'pointer'
      }
    },
    monthFormControl: {
        flexGrow: 2,
        marginRight: 10
    },
    dayFormControl: {
        flexGrow: 1,
        marginRight: 10
    },
    yearFormControl: {
        flexGrow: 1
    }
}) 

export type signInStylesType = ReturnType<typeof useSignInStyles>