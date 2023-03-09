{
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolve')
        }, 1000)
    })

    async function print() {
        return await promise
    }

    print().then(value => {
        console.log(value)
    })
}