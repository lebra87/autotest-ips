{
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('reject')
        }, 100)
    })
    promise.catch(error => {
        console.log(`Rejected: ${error}`)
    })
}