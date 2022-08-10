


//node.textcontent -debugging online



//challenge number 10
// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText
let names ="johndel";
let greetings = "Hi, my name is ";
let welcomeEl=document.getElementById("welcome-el");
welcomeEl.innerText = greetings + names;
welcomeEl.innerText +="👋"

//string vs numbers



/*
//Challenge number 9
// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

let name = "Johndel";
let greeting = "Hi, my name is ";
let myGreeting= greeting + name;
console.log(myGreeting);
*/

/* 
let username = "per"
//Challenge number7
// Create a variable, message, that stores the string: "You have tree new notifications"
let message = "You have tree new notifications"
let messageToUser = message + ", "+ "per" + " !";
//Challenge number8
// Create a variable, messageToUser, that contains the message we have logged
console.log(messageToUser)
*/



//challenge number6
// grab the count-el element, store it in a countEl variable
let count = 0;
let countEl=document.getElementById("count-el");
let saved=document.getElementById("count-el1");
let saveEl = document.getElementById("save-el")
function increment() {
    count = count + 1;
    // set countEl's innerText to the count
    countEl.innerText=count;
}
function decrement() {
    if (count>0){
        count=count-1
        countEl.innerText=count
        }
        else{
        count=0
        countEl.innerText=count
        }
}
function reset() {
    // set countEl's innerText to the count
    count=0
    countEl.innerText=count;
    
}
// 1. Create a function, save(), which logs out the count when it's called
function save(){
    saved.textContent=count;
   //saved.textContent+=count+ "\n";
     
}

//DOM -Documennt Object Mode describe how you use js to modiffy a website


/*
let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function incrementLap() {
    lapsCompleted = lapsCompleted + 1
}

incrementLap()
incrementLap()
incrementLap()

console.log(lapsCompleted)
*/




/*challenge number 5
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

// Create a function that logs out the sum of all the lap times
function logout(){
    console.log(lap1+lap2+lap3);
}
logout();
*/


/*challenge number 4
// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

function LogOut(){
console.log(42);
}
LogOut()
*/



//function
/*
function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}
// Setting up the the race 🏎 🏎 🏎
countdown()
// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾
// Get ready for a new race 🏎 🏎 🏎
countdown()
*/


//increment button
//initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
/*


let count=0
// camelCase
let countEl = document.getElementById("count-el")//pass arguments
function increment(){
   count=count+1
   countEl.innerText=count
}
function decrement(){
    if (count>0){
    count=count-1
    countEl.innerText=count
    }
    else{
    count=0
    countEl.innerText=count
    }
 }
 function reset(){
    count=0
    countEl.innerText=count
 }
*/


// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70

/*challenge3
let bonusPoints=50
console.log(bonusPoints)
bonusPoints= bonusPoints+50
console.log(bonusPoints)
bonusPoints=bonusPoints-75
console.log(bonusPoints)
bonusPoints=bonusPoints+45
console.log(bonusPoints)
*/


//Reassigning and increment
/*increment
let count=5
count=count+1
console.log (count)
*/

/*reassigning
let count=5
count=1
console.log (count)
*/


//front-end career path from scrimba



// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console



/*challenge 2
let myAge =24;
let humanDogRatio =2;
let myDogAge = myAge * humanDogRatio;
console.log(myDogAge)
*/



//arithmetic: + - / * %  you can assign variable that has value and use operation you want


// 1. Create a variable, myAge, and set its value to your age
// 2. Log the myAge variable to the console
//challenge 1
// let myAge=24
// console.log(myAge)



//this is my first javascipt
//document.getElementById("count-el").innerText=5
//let count=0
//console.log(count)


