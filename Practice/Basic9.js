
// ### Switch Statement
// 1. Write a program that uses a switch statement to print the name of the day based on a number input (1 for Monday, 2 for Tuesday, etc.).
// var day = +prompt("1) for Monday\n2) for Tuesday\n3) for Wednesday\n4) for Thursday\n5) for Friday\n6) for Saturday\n7) for Sunday\n\nEnter your Choice : ");
// switch (day) {
//     case 1: console.log("Monday");
//         break;
//     case 2: console.log("Tuesday");
//         break;
//     case 3: console.log("Wednesday");
//         break;
//     case 4: console.log("Thursday");
//         break;
//     case 5: console.log("Friday");
//         break;
//     case 6: console.log("Saturday");
//         break;
//     case 7: console.log("Sunday");
//         break;
//     default : console.log("please Select Valid Number");
// }

// 2. Create a function that returns the corresponding month name based on a given month number (1 for January, 2 for February, etc.).

// var n = +prompt("1) for Jan\n2) for Feb\n3) for March\n4) for April\n5) for May\n6) for June\n7) for July\n8) for Aug\n9) for Sep\n10) for Oct\n11) for Nav\n12) for Dec\n\nEnter your Choice : ");

// function month_name(n){
//     switch(n)
//     {
//         case 1 : return "Jan";
//         case 2 : return "Feb";
//         case 3 : return "March";
//         case 4 : return "April";
//         case 5 : return "May";
//         case 6 : return "June";
//         case 7 : return "July";
//         case 8 : return "Aug";
//         case 9 : return "Sep";
//         case 10 : return "Oct";
//         case 11 : return "Nav";
//         case 12 : return "Dec";
//         default : return "Please Enter Valid Number !!";
        
//     }
// }
// console.log(month_name(n));
// 3. Use a switch statement to categorize a person's age group (child, teenager, adult, senior) based on their age.
// 4. Write a function that takes a grade letter and prints the corresponding GPA using a switch statement.
// 5. Use a switch statement to print the name of the season based on the month number.

var age = 54;
switch(true)
{
    case true : if(age<=12)
                    console.log('child');
                else if(age<=18)
                    console.log('teenager');
                else if(age<=50)
                    console.log('adult');
                else
                    console.log('senior');
}




// 6. Create a function that returns the name of a fruit based on a number input (1 for apple, 2 for banana, etc.) using a switch statement.
// 7. Write a program that uses a switch statement to print a message based on the traffic light color (red, yellow, green).
// 8. Use a switch statement to determine the type of a character (vowel, consonant, digit, special character).
// 9. Write a function that prints a message based on the day of the week using a switch statement.
// 10. Use a switch statement to categorize an item based on its type (electronics, clothing, food, furniture).
