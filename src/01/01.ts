export function sum(a: number, b: number) {
    return a + b
}

export function mult(a: number, b: number) {
    return a * b
}

export const splitIntoWords = (sentense: string) => {
    const words = sentense.toLocaleLowerCase ().split (' ')
        return words.filter(w=>w !== "" && w !== "-")
        .map (w => w
            .replace ("!", "")
            .replace (".", "")
            .replace (",", ""))
}