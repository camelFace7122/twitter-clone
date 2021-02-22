export const defineUserPlatform = () => {

    const userPlatform = window.navigator.platform 

    if (userPlatform.includes('Android')) {
        return 'Twitter for Android'
    }

    if (userPlatform.includes('iPhone')) {
        return 'Twitter for iPhone'
    }

    if (userPlatform.includes('iPad')) {
        return 'Twitter for iPad'
    }

    if (userPlatform.includes('iPad')) {
        return 'Twitter for iPad'
    }
    
    if (userPlatform.includes('Linux') || userPlatform.includes('Win32')) {
        return 'Twitter Web App'
    }

    if (!userPlatform) {
        return 'Unknown Platform'
    }

    return userPlatform
}