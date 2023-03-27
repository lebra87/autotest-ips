function getRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomString(length: number): string {
    var rnd = '';
    while (rnd.length < length)
        rnd += Math.random().toString(36).substring(2);
    return rnd.substring(0, length)

    //const chrs: string = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789'
    // var str: string = ''
    // for (var i: number = 0; i < length; i++) {
    //     var pos = Math.floor(Math.random() * chrs.length)
    //     str += chrs.substring(pos, pos+1)
    // }
    // return str
}

function getCurrentTime() {
    
}

console.log(getRandomString(5))