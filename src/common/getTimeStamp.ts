function getTimeStamp(): string {
    let rnd: string = ''
    let timeNow = new Date()
    rnd += `${timeNow.toISOString()}`
    return rnd
}
export {
    getTimeStamp,
}