export const createHrefWithParams = (
    href: string,
    params: { [K: string]: string | number },
): string => {
    const entries = Object.entries(params)

    return entries.reduce((newHref, [key, value]) => {
        if (value !== undefined) {
            newHref = newHref.replace(`:${key}`, value.toString())
        }

        return newHref
    }, href)
}
