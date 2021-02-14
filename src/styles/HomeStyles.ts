import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../theme';
import { colors } from './colors'

export const useHomeStyles = makeStyles({
    flexInner: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        flexBasis: 'auto',
    },
    wrapper: {
        display: 'flex',
    },
    leftSidebar: {
        flex: '1 1 auto',
        display: 'flex',
        justifyContent: 'flex-end',
        height: '100%',
    },
    leftSidebarInner: {
        width: 275,
        '@media (max-width: 1280px)': {
            width: 88
        },
        '@media (max-width: 1024px)': {
            width: 68,
        }
    },
    leftSidebarContentWrapper: {
        height: '100%',
        top: 0,
        position: 'fixed',
    },
    leftSidebarContent: {
        width: 275,
        padding: '0 10px',
        '@media (max-width: 1280px)': {
            width: 88
        },
        '@media (max-width: 1024px)': {
            width: 68,
        }
    },        
    leftSidebarMenu: {
        listStyle: 'none',
        padding: 0,
        margin: '0 0 8px 0'
    },
    leftSidebarMenuItem: {
        padding: '0',
        '@media (max-width: 1280px)': {
            textAlign: 'center'
        }
    },
    leftSidebarMenuItemNavLink: {
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'initial',
        padding: 8,
        borderRadius: 30,
        transition: 'background-color 0.1s linear',
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            '& *': {
                color: theme.palette.primary.main
            },
            '& $unactiveIcon': {
                display: 'none'
            },
            '& $activeIcon': {
                display: 'block',
            }
        }
    },
    unactiveIcon: {},
    activeIcon: {
        display: 'none'
    },
    leftSidebarMenuItemActiveNavLink: {
        '& *': {
            color: theme.palette.primary.main
        },
        '& $unactiveIcon': {
            display: 'none'
        },
        '& $activeIcon': {
            display: 'block',
        }
    },
    leftSidebarMenuItemText: {
        marginLeft: 20,
        marginRight: 15,
        fontSize: 19,
        fontWeight: 700,
        '@media (max-width: 1280px)': {
            display: 'none',
        }
    },
    leftSidebarMenuItemIcon: {
        fontSize: 30
    },
    commonIconButtonStyle: {
        padding: 9,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            '& svg': {
                color: theme.palette.primary.main
            }
        }
    },
    tweetButton: {
        width: '90%',
        minWidth: 79,
        minHeight: 49,
        fontSize: 15,
        margin: '0 5px',
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
        '@media (max-width: 1280px)': {
            display: 'none'
        }
    },
    tweetIconButton: {
        display: 'none',
        backgroundColor: theme.palette.primary.main,
        margin: '0 auto',
        '& svg': {
            color: theme.palette.primary.contrastText
        },
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
        '@media (max-width: 1280px)': {
            display: 'block'
        }
    },
    mainBlock: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexGrow: 1,
        flexShrink: 1,
        height: '100%'
    },
    mainBlockInner: {
        width: 990,
        '@media (max-width: 1094px)': {
            width: 920,
        },
        '@media (max-width: 1004px)': {
            width: 610,
        }
    },
    mainBlockContent: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%'
    },
    feed: {
        maxWidth: 600,
        width: '100%',
        borderRight: `1px solid ${theme.palette.secondary.light}`,
        borderLeft: `1px solid ${theme.palette.secondary.light}`,
        minHeight: '100vh',
        height: '100%'
    },
    feedHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 53,
        position: 'sticky',
        top: -0.5,
        borderBottom: `1px solid ${theme.palette.secondary.light}`,
        padding: '0 15px',
        backgroundColor: theme.palette.primary.contrastText,
        zIndex: 3
    },
    feedTitle: {
        fontWeight: 800,
        fontSize: 19
    },
    tweetPageTitle: {
        display: 'flex',
        alignItems: 'center'
    },
    tweetForm: {
        display: 'flex',
        padding: '5px 15px 10px 15px'
    },
    tweetFormAvatarWrapper: {
        paddingTop: 5,
        marginRight: 10
    },
    feedAvatarWrapper: {
        borderRadius: '50%',
        display: 'inline-block',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'transparent', 
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
        '&:hover': {
            borderColor: 'rgba(0, 0, 0, 0.12)',
            '& $feedAvatarOverlay': {
                backgroundColor: 'rgba(26, 26, 26, 0.15)',  
            }
        },
    },
    feedAvatarOverlay: {
        position: 'absolute',
        zIndex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    feedAvatar: {
        width: 49,
        height: 49
    },
    tweetFormWriteWrapper: {
        paddingTop: 5,
        flexGrow: 1
    },
    tweetFormInputWrapper: {
        padding: '10px 0',
    },
    tweetFormInput: {
        fontSize: 19,
        border: 'none',
        resize: 'none',
        width: '100%',
        fontFamily: 'inherit',
        outline: 'none'
    },
    tweetPublishSettingButtonWrapper: {
        paddingBottom: 10,
        display: 'flex',
        borderBottom: `1px solid ${theme.palette.secondary.light}`
    },
    tweetPublishSettingButton: {
        minWidth: 48,
        minHeight: 30,
        outline: 'none',
        transition: 'background-color 0.1s linear',
        userSelect: 'none',
        padding: '0 5px',
        borderRadius: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: '20px',
        fontSize: 13,
        fontWeight: 700,
        color: theme.palette.primary.main,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        }
    },
    tweetPublicIcon: {
        marginRight: 6,
        fontSize: 22
    },
    tweetFormControls: {
        paddingTop: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tweetFormFooterLeftSide: {
        marginLeft: -10
    },
    tweetFormFooterRightSide: {
        display: 'flex',
        alignItems: 'center'    
    },
    tweetFormTextIndicator: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        marginRight: 10,
        transition: 'transform 0.2s linear',
    },
    tweetFormTextIndicatorIncreased: {
        transform: 'scale(1.5, 1.5)'
    },
    tweetFormGreyProgress: {
        color: theme.palette.secondary.light,
        transition: 'opacity 0.2s linear'
    },
    tweetFormMainProgress: {
        color: theme.palette.primary.main,
        position: 'absolute',
        transition: 'opacity 0.2s linear'
    },
    tweetFormTransparentProgress: {
        opacity: 0    
    },
    tweetFormMainProgressIsFull: {
        color: colors.red.main
    },
    tweetFormMainProgressWarning: {
        color: colors.yellow.main
    },
    tweetFormTextIndicatorLabel: {
        position: 'absolute',
        fontSize: 9,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        color: colors.black.light
    },
    tweetFormTextIndicatorLabelRed: {
        color: colors.red.main
    },
    tweetFormSubmitButton: {
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        }
    },
    tweetFormError: {
        marginTop: 10,
        paddingTop: 0,
        paddingBottom: 0,
    },
    feedHeaderDivider: {
      width: '100%',
      borderTop: `1px solid ${theme.palette.secondary.light}`,
      borderBottom: `1px solid ${theme.palette.secondary.light}`,
      backgroundColor: theme.palette.secondary.contrastText,
      height: 10
    },
    feedBlock: {
        height: '100%',
    },
    feedBlockLoadingProgress: {
        marginTop: 55,
        textAlign: 'center'
    },
    feedTweet: {
        padding: '10px 15px 0',
        outline: 'none',
        transition: 'background-color 0.2s linear',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.secondary.contrastText,
        },
        
        borderBottom: `1px solid ${theme.palette.secondary.light}`,
    },
    feedTweetInner: {
        display: 'flex',
        color: 'inherit',
        textDecoration: 'none'
    },
    tweetAvatarWrapper: {
        marginRight: 10
    },
    tweetPost: {
        padding: '10px 0',
        flex: '1 1 0'
    },
    tweetHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: -9,
        marginBottom: 2,
    },
    tweetHeaderAbout: {
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.secondary.dark
    },
    tweetHeaderAuthorName: {
        fontWeight: 700,
        color: 'initial'
    },
    tweetHeaderOfficialStatus: {
        fontSize: 20,
        marginLeft: 2,
        marginRight: 5,
    },
    tweetHeaderUsername: {
        color: theme.palette.secondary.dark
 
    },
    tweetHeaderTimeFromPublish: {},
    tweetHeaderMoreButtonWrapper: {},
    tweetContent: {},
    tweetTextContent: {
        wordBreak: 'break-word'
    },
    tweetMediaContent: {},
    tweetMediaImgWrapper: {
        marginTop: 10,
        maxWidth: '100%',
        overflow: 'hidden',
        borderRadius: 20,
        border: `1px solid ${colors.paleblue.main}`,
    },
    tweetMediaImgLink: {
        textDecoration: 'none',
        color: 'initial',
        '&>img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
        }
    },
    tweetMediaTags: {
        marginTop: 5
    },
    tweetMediaTagLink: {
        fontSize: '15px !important',
        color: theme.palette.secondary.dark,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    tweetStatistics: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 425,
        margin: '1px 0 -9px -9px'
    },
    tweetInfo: {
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
            '& $tweetInfoIconButton': {
                backgroundColor: theme.palette.primary.light,
                '& svg': {
                    color: theme.palette.primary.main
                },
                '& + $tweetInfoText': {
                    color: theme.palette.primary.main
                }   
            },
            '& $tweetInfoIconButton$tweetInfoRetweetButton': {
                backgroundColor: colors.green.light,
                '& svg': {
                    color: colors.green.main
                },
                '& + $tweetInfoText': {
                    color: colors.green.main
                }
            },
            '& $tweetInfoIconButton$tweetInfoLikeButton': {
                backgroundColor: colors.red.light,
                '& svg': {
                    color: colors.red.main
                },
                '& + $tweetInfoText': {
                    color: colors.red.main
                }
            },
        }
    },
    tweetInfoIconButton: {
        padding: 9
    },
    tweetInfoIcon: {
        fontSize: 20,
        color: theme.palette.secondary.dark
    },
    tweetInfoText: {
        transition: 'color 0.1s linear',
        fontSize: 13,
        color: theme.palette.secondary.dark,
        minWidth: 'calc(1em + 30px)'
    },
    tweetInfoRetweetButton: {},
    tweetInfoLikeButton: {},
    rightSidebarWrapper: {
        display: 'flex',
        justifyContent: 'flex-start',
        height: '100%',
        width: 350,
        marginRight: 10,
        '@media (max-width: 1094px)': {
            width: 290,
        },
        '@media (max-width: 1004px)': {
            display: 'none'
        }
    },
    rightSidebar: {
        minHeight: 793,
        height: '100%'
    },        
    rightSidebarInner: {
        top: '-168px',
        position: 'sticky',
        width: 350,
        paddingBottom: 59,
        '@media (max-width: 1094px)': {
            width: 290,
        }
    },
    rightSidebarSearchField: {
        marginBottom: 10,
        minHeight: 30,
        height: 53,
        width: 350,
        backgroundColor: theme.palette.primary.contrastText,
        position: 'fixed',
        zIndex: 100,
        top: 0,
        display: 'flex',
        alignItems: 'center',
        '@media (max-width: 1094px)': {
            width: 290,
        }
    },
    rightSidebarContent: {
        marginTop: 63
    },
    rightSidebarSearchFieldInput: {
        width: '100%',
        minHeight: 42,
        borderRadius: 30,
        padding: '0 50px',
        backgroundColor: theme.palette.secondary.light,
        '& input::placeholder': {
            color: `${colors.black.light} !important`,
            opacity: 1
        }
    },
    rightSidebarSearchFieldIcon: {
        fontSize: 22,
        position: 'absolute',
        left: 16,
        zIndex: 3,
        color: colors.black.light,
    },
    rightSidebarSection: {
        backgroundColor: theme.palette.secondary.contrastText,
        border: `1px solid ${theme.palette.secondary.contrastText}`,
        marginBottom: 15,
        borderRadius: 16,
        overflow: 'hidden'
    },
    rightSidebarSectionHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '9px 15px',
        borderBottom: `1px solid ${theme.palette.secondary.light}`,
        marginBottom: 1
    },
    rightSidebarSectionTitle: {
        fontWeight: 800,
        fontSize: 19,
        lineHeight: '26px',
        '@media (max-width: 1094px)': {
            fontSize: 16
        }
    },
    rightSidebarSectionBody: {
    },
    rightSidebarSectionItem: {
        padding: '10px 15px',
        borderBottom: `1px solid ${theme.palette.secondary.light}`,
        cursor: 'pointer',
        transition: 'background-color 0.1s linear',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.03)'    
        }
    },
    rightSidebarSectionItemInner: {
        textDecoration: 'none',
        color: 'inherit',
    },
    rightSidebarSectionItemBody: {
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    },
    rightSidebarSectionItemLeftSide: {
        marginRight: 10,
        flex: '0 0 49px',
        height: 49
    },
    rightSidebarSectionItemRightSide: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexGrow: 1,
    },
    rightSidebarSectionItemRightSideUserLinkBlock: {
        flexShrink: 1,
        maxWidth: '162px',
        display: 'inline-block',
        outline: 'none',
        textDecoration: 'none',
        color: 'initial',
        overflowWrap: 'break-word',
        '&:hover, &:focus': {
            '& $rightSidebarSectionItemRightSideUserName': {
                textDecoration: 'underline'
            },
        },
        '@media (max-width: 1094px)': {
            maxWidth: '98px',
        }
    },
    rightSidebarSectionItemRightSideUserName: {
        display: 'inline-flex',
        alignItems: 'center',
        maxWidth: '100%',
        flexShrink: 1,

        '& span': {
            fontWeight: 700,
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        }
    },
    rightSidebarSectionItemRightSideUserId: {
        color: colors.black.light,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    rightSidebarSectionItemAdStatus: {
        display: 'flex',
        alignItems: 'flex-end',
        paddingTop: 5,
        fontSize: 13,
        marginLeft: 59,
        color: colors.black.light,
        '& span': {
            lineHeight: 1,
            marginBottom: 2
        }
    },
    rightSidebarSectionItemAdStatusIcon: {
        fontSize: 18,
        marginRight: 5
    },
    rightSidebarActualsSectionItemHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rightSidebarSectionSimpleText: {
        fontSize: 13,
        lineHeight: 1,
        color: colors.black.light,
    },
    rightSidebarActualsSectionItemFooter: {
        marginTop: 5
    },
    rightSidebarSectionShowMore: {
        padding: '15px',
        cursor: 'pointer',
        transition: 'background-color 0.1s linear',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.03)'    
        }
    },
    rightSidebarSectionShowMoreLink: {
        color: theme.palette.primary.main,
        textDecoration: 'none'
    },
    rightSidebarTwitterFooter: {
        padding: '0 15px',
        display: 'flex',
        flexWrap: 'wrap',
        '& a': {
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'underline'
            }
        }
    },
    rightSidebarTwitterFooterMore: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '&>a': {
            marginBottom: 1
        }
    },
    rightSidebarTwitterFooterMoreIcon: {
        fontSize: 15,
        color: colors.black.light
    },
    rightSidebarTwitterFooterItem: {
        lineHeight: '20px',
        margin: '2px 10px 2px 0',
        '&:hover a': {
            textDecoration: 'underline'
        }
    },
    tweetFormModal: {
        '& .MuiDialog-scrollPaper': {
            display: 'flex',
            alignItems: 'flex-start'
        },
        '& .MuiPaper-root': {
            top: '5%',
            maxWidth: '80vw',
            maxHeight: '90vh',
            minWidth: 600,
            flexShrink: 1,
            margin: 0,
        }
    },
    tweetFormModalContent: {
        padding: '0 !important'
    },
    tweetFormModalHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 53,
        borderBottom: `1px solid ${colors.modalDividerColor}`,
        padding: '0 15px',
        backgroundColor: theme.palette.primary.contrastText,
    },
    fullTweet: {
        padding: '10px 15px 0'
    },
    fullTweetHeader: {
        marginBottom: -3,
    },
    fullTweetAbout: {
        display: 'flex',
        marginBottom: 5
    },
    fullTweetTextContent: {
        '& span': {
            fontSize: 23,
            wordBreak: 'break-word'
        }
    },
    fullTweetStatistics: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
        maxWidth: 450,
        minHeight: '3.2rem',
    },
    fullTweetInfoIcon: {
        fontSize: 24
    },
    fullTweetMetaData: {
        margin: '15px 0',
        color: theme.palette.secondary.dark,
    },
    fullTweetActuality: {
        display: 'flex',
        alignItems: 'center',
        padding: '15px 5px',
        borderTop: `1px solid ${theme.palette.secondary.light}`,
        borderBottom: `1px solid ${theme.palette.secondary.light}`,
    },
    fullTweetActualityLink: {
        display: 'inline-block',
        textDecoration: 'none',
        color: theme.palette.secondary.dark,
        boxSizing: 'border-box',
        '& + &': {
            marginLeft: 20
        },
        '& span': {
            fontWeight: 700,
            color: 'initial'
        },
        '&:hover': {
            textDecoration: 'underline',
            textDecorationColor: colors.black.main
        }
    }
})

export type HomeStylesType = ReturnType<typeof useHomeStyles>
