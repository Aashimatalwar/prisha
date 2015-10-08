var userChoice = prompt("Enter your choice..paper/scissors/rock");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} 
else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} 
else {
	computerChoice = "scissors";
} 
console.log("Computer chose: " + computerChoice);
console.log("User chose: " + userChoice);

var compare = function(choice1,choice2)
{
    if(choice1===choice2){

        document.write ("The result is a tie!");
       
    }
    else if(choice1==="rock"){
        if(choice2==="scissors"){
            document.write ("Rock wins");
        }
        else{
            document.write ("paper wins");
        }
    }
    else if(choice1==="paper"){
        if(choice2==="rock"){
            document.write ("paper wins");
        }
        else{
             document.write ("scissors wins");
        }
    }
    else if(choice1==="scissors"){
        if(choice2==="paper"){
            document.write ("Scissors wins!");
        }
        else{
            document.write ("rock wins");
        }
    }
};

compare(userChoice,computerChoice);
