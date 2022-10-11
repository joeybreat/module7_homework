'use strict'

let func = function(obj){
    for(let i in func){
        if(func.hasOwnProperty(i)){
            console.log(i);
        }
    }
}

const car = {
    color: 'red',
    wheels: 4
}

func(car);