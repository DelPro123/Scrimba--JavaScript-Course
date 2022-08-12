//rabbit is the fastest with 102scs
//while turtle is the lowest with 202 secs
//console log the fastest time

let rabbit =102;
let turtle=202;

function fastesttime(){
    if (rabbit<turtle){
        return rabbit
    }else if (turtle<rabbit){
        return turtle
    }else{
        return rabbit
    }
}

let get_time = fastesttime();

console.log(get_time)

//challenge
// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out
let player1Time = 102
let player2Time = 107

function total_time(){
    let race_total= player1Time+player2Time
    return race_total
}

let a = total_time()
console.log(a)


