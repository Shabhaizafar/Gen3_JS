//Higher order Function 

function Main(){
    var choice = prompt("1) num \n 2) str \n\nEnter Your Choice : ");
    switch(choice)
    {
        case 'num': Numbers();
                    break;
        case 'str': Strings();
                    break;
        default : console.log("Enter Valid Choice !!!!!");
    }
}

// Main();

function Numbers(){
    var n1 = +prompt("Enter the Valid of N1 : ");
    var n2 = +prompt("Enter the Valid of N2 : ");
    var choice = +prompt("1) for Addition\n2) for Subtraction \n\nEnter your Choice :");
    switch(choice){
        case 1: Add(n1,n2);
                break;
        case 2: Sub(n1,n2);
                break;
        default: console.log("Please Enter Valid Oparation !!!");
    }
}
function Add(a,b){
    console.log(`Addition of ${a} and ${b} is : ${a+b}.`);
}
function Sub(a,b){
    console.log(`Subtraction of ${a} and ${b} is : ${a-b}.`);
}

function Strings(){
    var str1 = prompt("Enter String 1 : ");
    var str2 = prompt("Enter String 2 : ");
    var choice = +prompt("1) for concatination\n2) for Uppercase \n\nEnter your Choice :");
    switch(choice){
        case 1: Strcat(str1,str2);
                break;
        case 2: UpperCase(str1,str2);
                break;
        default: console.log("Please Enter Valid Oparation !!!");
    }
}
function Strcat(a,b){
    console.log(`Concatination of "${a}" and "${b}" is "${a+b}"`);
}
function UpperCase(a,b){
    console.log(`To Uppercase : ${(a+b).toUpperCase()}`);
}