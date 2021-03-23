let GumBall= [
    'Tiger','Elephant','Cat','Monky','Turtle'
];
let Result= Math.floor(Math.random()*GumBall.length);

function name(){
if(Result === 0 ){
    console.log(GumBall[0]);
    console.log("Determination, Persistance, and Patience.")
} else if (Result === 1){
    console.log(GumBall[1]);
    console.log("Reliable, Strong, and Peaceful.")
}
else if (Result === 2){
    console.log(GumBall[2]);
    console.log("Motivated, Risk Taker")
}
else if (Result === 3){
    console.log(GumBall[3]);
    console.log("Goofy, Cheerfull, and Independence")
}
else {
    console.log(GumBall[4]);
    console.log("Intuitive, Senstive, and Introvert")
}
}
name();

/*The understanding I got from the video for different between front-end and back-end. 
think of it as in the restaurant. 
The waitress(Front-end) who's getting an Orders from the Customer(End-users)
to make the request to the chef(Back-end), so they could respond back to Customers through the waitress.

Front-end is pretty much the language that manupilating back-end to get database that requested in order to deliver to the end-users.

Another thing I got from video is when they talked about protocal,
there is a different languages and we have to choose one that both know to communicate with each other between human and computer.
*/
