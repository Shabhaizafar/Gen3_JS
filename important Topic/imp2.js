// Break and continue keyword.

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(i,j);
//     }   
// }
/*
0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2
*/

//1) i ==1  and use break
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if(i==1)
//         {
//             break;
//         }
//         console.log(i,j);
//     }   
// }
/*
0 0
0 1
0 2
2 0
2 1
2 2
*/
//2) i ==1  and use continue
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if(i==1)
//         {
//             continue;
//         }
//         console.log(i,j);
//     }   
// }
/*
0 0
0 1
0 2
2 0
2 1
2 2
*/


// // 3) j ==1  and use break
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if(j==1)
//         {
//             break;
//         }
//         console.log(i,j);
//     }   
// }

/*
0 0
1 0
2 0

*/
// 3) j ==1  and use continue
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if(j==1)
//         {
//             continue;
//         }
//         console.log(i,j);
//     }   
// }
/*
0 0
0 2
1 0
1 2
2 0
2 2
*/ 