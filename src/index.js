// const isOdd = require('is-odd');

// console.log(isOdd('1')); //=> true
// console.log(isOdd('3')); //=> true
 
// console.log(isOdd(0)); //=> false
// console.log(isOdd(2)); //=> false

const fs= require('fs');
const path= require('path');
const fetchapi = require('./api');

fetchapi("https://rickandmortyapi.com/api/character")



//console.log(__dirname);
//console.log(__filename);

const readFile = async () => {
    try{

        const filepath = path.resolve(`${__dirname}/Texto.txt`)
        const data = await fs.promises.readFile(filepath,"binary" );
        console.log(data);
    } catch(error){
        console.log(error);
    }
}

const readFile1 = async () => {
    try{

        const filepath = path.resolve(`${__dirname}/src/Texto.txt`)
        const data = await fs.promises.writeFile(filepath,"binary" );
        console.log(data);

    }catch(error){
        console.log(error);

    }

}