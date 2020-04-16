// Exercise 2

function compareToTen(num){
    p = new Promise((resolve, reject) => {
        if(num > 50) {
            resolve(num + " is greater than 50, success!")
        } else if(num === 50) {
            resolve(num + " is equal to 50, that works!")
        } else {
            reject(num + " is less than 50, error!")
        }
    })
    return p;
}

compareToTen(55)
    .then(result => console.log(result))
    .catch(error => console.log(error))

compareToTen(34)
    .then(result => console.log(result))
    .catch(error => console.log(error))