let fortune = 5

if (fortune >= 0 && fortune <= 3){
    console.log("Oh no! You selected a low fortune!");
}
else if (fortune >= 4 && fortune <= 7){
    console.log("You have selected an average fortune.");
}
else if (fortune >= 8 && fortune <= 10){
    console.log("Congratulations! You selected a great fortune.");
}
else{
    console.log("It was hard to determine your fortune, try again!")
}

