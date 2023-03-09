{
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('resolve'), 1000)
        setTimeout(() => reject('reject'), 100)
    })

    async function print(): Promise<void> {
        console.log(await promise)
    }
    print()
}