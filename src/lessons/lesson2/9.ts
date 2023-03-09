{
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('reject')
        }, 100)
    })

    async function print() {
        return await promise
    }

    print().catch(error => {
        console.log(error)
    })
}