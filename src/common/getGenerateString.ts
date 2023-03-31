function getGenerateString(length: number): string {
    const chrs: string = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789'
    let str: string = ''
    for (let i: number = 0; i < length; i++) {
        let pos = Math.floor(Math.random() * chrs.length)
        str += chrs.substring(pos, pos + 1)
    }
    return str
}

export {
    getGenerateString,
}