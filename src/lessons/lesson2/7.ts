{
    const promise: Promise<string> = new Promise((resolve) => {
        setTimeout(() => resolve('resolve'), 1000)
    })

    async function print():Promise<void> {
        console.log(await promise)
    }

    print()
}