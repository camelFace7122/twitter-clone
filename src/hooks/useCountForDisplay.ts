import React from 'react';

export function useCountForDisplay(count: number | undefined) {
    let [countForDisplay, setCountForDisplay] = React.useState<string>('') 

    const makeCountForDisplay = (number: number) => {
        if (number > 1000) {
            return ((number/1000) - 0.1).toFixed(1).replace(/\.0+/, '') + ' тыс.'
        }
        return `${number}`
    }

    React.useEffect(() => {
        setCountForDisplay(makeCountForDisplay(count || 0))
    }, [count])

    return countForDisplay
}