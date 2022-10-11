'use strict'

let func = function(str, obj){
    console.log(str in obj);
    //return(str in obj);
}

const car = {
    color: 'red',
    wheels: 4
}

func('color', car);