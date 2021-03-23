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