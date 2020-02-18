// let arr = [];
// //create an array
// for (let i = 1; i< 11; i++) {
// 	arr.push(i);
// }

// // console.log(arr);
// //create the table
// for(let j of arr){
// 	for (let k of arr){
// 		document.write(`	
// 		${k} x ${j}= ${j*k}
// 		<br>
// 		`)
// 	}
// 	document.write("<br>");
	
// }



var greet = (name: string): string => {
   if (name) {
       return "Hi  " + name;
   } else {
       return "Hi dear User";
   }
};
document.write(greet('John'));

