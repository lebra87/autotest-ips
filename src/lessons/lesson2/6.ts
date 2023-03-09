const promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve('resolve'), 1000)
})

promise.then(value => {
    console.log(`Fulfilled: ${value}`)
})