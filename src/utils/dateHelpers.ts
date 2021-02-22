import { format } from 'date-fns'
import formatDistance from 'date-fns/formatDistance'
import ruLang from 'date-fns/locale/ru'

export const getTimeFrom = (date: Date): string => {
    return formatDistance(
        new Date(date), 
        new Date(), 
        { locale: ruLang }
        )
}

export const formatDate = (date: Date, shape: string) => {
    return format(
        new Date(date),
        shape,
        { locale: ruLang }
    )
}