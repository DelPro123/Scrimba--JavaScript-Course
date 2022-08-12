// Arrays - ordered lists of items

// 0 indexed
let featuredPosts = [
    "Check out my Netflix clone",        // 0 
    "Here's the code for my project",    // 1
    "I've just relaunched my portfolio"  // 2
]

console.log( featuredPosts.length )


//intro of array
//index of array
//multiple data types in array

// Array - ordered list of items - coposite / complex data type

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)
let del = ["Johndel L Siriban", 23, true]

//adding and removing item from arrays

let cards =[7,8]

cards.push(2);

console.log(cards);

//Challenge

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!";

messages.push(newMessage);

console.log(messages);

// How can you remove the last item in an array? Try to google it!
messages.pop();
console.log(messages);

//combining the array to the for loop

for( let i=0; i<=4;i+=1){
    console.log(messages[i]);

}

//technic no.2 required

for(let loop=0; loop<=messages.length; loop+=1){
    console.log(messages[loop])
}