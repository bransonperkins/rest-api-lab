// Exercise 3

var arrayOfWords = ['cucumber', 'tomatoes', 'avocado']
var complicatedArray = ['cucumber', 44, true]

function makeAllCaps(array){
    return new Promise((resolve, reject) => {
        let capsArray = array.map(word => {

            if(typeof word === 'string'){
                return word.toUpperCase()
            } else {
                reject('Error: Not all items in the array are strings!')
            }
        })
        resolve(capsArray);
    })
}

function sortWords(array){
    return new Promise((resolve, reject) => {
        if(array) {
            array.forEach((el) => {
                if(typeof el !== 'string'){
                    reject('Error: Not all items in the array are strings!')
                }
            })
            resolve(array.sort());
        } else {
            reject('Error: Something went wrong with sorting words.')
        }
    })
}

makeAllCaps(arrayOfWords)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error))

makeAllCaps(complicatedArray)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error))