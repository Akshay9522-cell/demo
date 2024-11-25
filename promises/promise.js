

const promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        isReady=[true,false][Math.floor(Math.random()*2)]
        isReady?resolve('Soup is ready'):reject('soup is not ready')
    },2000)
})

console.log(
    promise
    .then(success=>console.log({success}))
    .catch(error=>console.log({error}))
)