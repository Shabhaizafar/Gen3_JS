/*
1) n=4
* 
* * 
* * *
* * * *
*/
// var n = 4;
// var ans = "";
// for (let i = 0; i <n; i++) {
//     ans = "";
//     for (let j = 0; j <=i; j++) {
//        ans+="* ";//ans = ans +"* " = "" + "* "  = "* " + "* " = "* *"
//     }
//     console.log(ans);
// }   

/*
1) n=4
1
1 1
1 1 1
1 1 1 1
*/
// var n = 4;
// var ans = "";
// for (let i = 0; i <n; i++) {
//     ans = "";
//     for (let j = 0; j <=i; j++) {
//        ans+="1 ";
//     }
//     console.log(ans);
// }   

/*
1) n=4
1
2 3
4 5 6
7 8 9 10
*/
// var n = 4;
// var ans = "";
// var k = 1;
// for (let i = 0; i <n; i++) {
//     ans = "";
//     for (let j = 0; j <=i; j++) {
//     //    ans+=k;
//             ans = ans + k + " ";
//        k++;
//     }
//     console.log(ans);
// } 
/*
1) n=4
A
A A 
A A A
A A A A
*/
// var n = 4;
// var ans = "";

// for (let i = 0; i <n; i++) {
//     ans = "";
//     for (let j = 0; j <=i; j++) {
//        ans+="A ";
//     }
//     console.log(ans);
// } 


/*
1) n=4
A
B C 
D E F
G H I J
*/
// var n = 4;
// var ans = "";
// var k = 65;
// for (let i = 0; i <n; i++) {
//     ans = "";
//     for (let j = 0; j <=i; j++) {
//        ans = ans + String.fromCharCode(k) + " ";
//        k++;
//     }
//     console.log(ans);
// } 


/*
1) n=4
A
B B
C C C
D D D D
*/
// var n = 4;
// var ans = "";
// var k = 65;
// for (let i = 0; i <n; i++) {
//     ans = "";
//     for (let j = 0; j <=i; j++) {
//        ans = ans + String.fromCharCode(k) + " ";
//     }
//     k++;
//     console.log(ans);
// } 


// /*
// 1) n=4
// A
// A B
// A B C
// A B C D
// */
// var n = 4;
// var ans = "";
// var k = 65;
// for (let i = 0; i <n; i++) {
//     ans = "";
//     k=65;
//     for (let j = 0; j <=i; j++) {
//        ans = ans + String.fromCharCode(k) + " ";
//        k++;
//     }
//     console.log(ans);
// } 

/*
1) n=4
A 
B A
C B A
D C B A
*/
// var n = 4;
// var ans = "";
// var k = 65;
// for (let i = 0; i <n; i++) {
//     ans = "";
//     k=65+i;
//     for (let j = 0; j <=i; j++) {
//        ans = ans + String.fromCharCode(k) + " ";
//        k--;
//     }
//     console.log(ans);
// } 

/* 
n=4
      *
    * * *
  * * * * *
* * * * * * *
* *       * *
* *       * *


n=5
        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
* * *       * * *
* * *       * * *
* * *       * * *

*/
var n = 10;
var ans = "";
var space = n-1;
for (let i = 0; i <n; i++) {
    ans = "";
    for (let j = space; j > i; j--) {
        ans+="&nbsp;&nbsp;&nbsp;";
    }
    for (let j = 0; j <=i; j++) {
       ans+="* ";
      }
    for (let j = 0; j <i; j++) {
        ans+="* ";
       }
    document.write(ans,"<br>");
}
for (let i = 0; i < n-2; i++) {
  ans = "";
  for (let j = 0; j <n-2; j++) {
    ans+="* ";
   }
   for (let j = 0; j < 3; j++) {
    ans+="&nbsp;&nbsp;&nbsp;";
   }
   for (let j = 0; j <n-2; j++) {
    ans+="* ";
   }
   document.write(ans,"<br>");
}