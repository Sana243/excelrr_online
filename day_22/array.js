//let arr1=[1,2,3,4,5,6,'hello'];
//console.log(arr1);

//arr1.splice(5);//removes all elements from index 5 to end  of array
//arr1.splice(4,2);// removes 2 elements from 4 to end array
//console.log(arr1);
//arr1.splice(2,0,'bye','hi')//adds 2 element at index 2
//console.log(arr1);
//arr1.splice(2,2,'bye','hi')//removes 2 element from index 2 and adds 2 D
//console.log(arr1);

let arr1=[1,2,3,4,5,6,'hello'];
let output=arr1.some(
    (e)=>e%2==0//even numbers
)
console.log(output);//true

let arr2=[1,2,3,4,5,6,'hello'];
let output2=arr2.findIndex(
    (e)=>e%2==0//even numbers
)
console.log(output2);//1

let arr3=[1,2,3,4,5,6,'hello'];
console.log(arr3);
arr3.reverse()
console.log(arr3);
console.log(arr3.reverse());//['hello',6,5,4,3,2,1]

let arr4=[10,20,30];
let output4=arr4.toString();
console.log(arr4);
console.log(output4);//10,20,30
console.log(typeof output4);//string

let arr5=['hello','world','hi'];
let output5=arr5.toString();
console.log(arr5);
console.log(output5);//hello,world,hi

let arr6=[10,20,30]
let output6=arr6.join('-❤️');
console.log(output6);


let arr7=[10,20,30,40,50,60];
let output7=arr7.slice(2,4);
console.log(output7);
console.log(arr7.slice(3));

let arr8=[10,20,30,40,50,60];
arr8.forEach(
    (element,index,array) => {
        console.log(`element:${element}`);
        console.log('square of element:',element*element);
           
    }
)
let arr9=[10,20,30,40,50,60];
         for(let element of arr9){
            console.log(element);
         }

         for(let index in arr9){
            console.log(index,'-',arr9[index]);
         }

let arr10=[10,20,30,40,50,60];
let output10=arr10.indexOf(20);//1
console.log(arr10.indexOf(100));//-1
console.log(arr10.indexOf(100,0));


let arr11=[10,20,30,40,50,60];
delete arr11[1];
console.log(arr11);


let arr12=[10,20,30,40,50,60];
arr12.fill(100);
console.log(arr12);
arr12.fill(100,5);
arr12.fill(200,3,5);
console.log(arr12);

let str1='hello';
console.log(str1.padStart(10,'*'));//*****hello
console.log(str1.padEnd(10,'*'));//hello*****

let str2='   hello   ';
console.log(str2.length);
str2.trimStart();
console.log(str2.length)
console.log(str2);
str2.trimEnd();
console.log(str2.length);

let arr13=[10,60,40,50,30];
arr13.sort();
console.log(arr13);

let arr14=['welcome','to','session'];
arr14.reduceRight(
    (accumulator,currentValue,currentIndex,array)=>{
        return accumulator+' '+currentValue;
    }
)
console.log(arr14);

let arr15=[10,20,30,40,50,60,10];
console.log(arr15.lastIndexOf(10));
console.log(arr15.indexOf(10));

let arr16=[10,20,30,40,50,60];
arr16.copyWithin(4,0,3);
console.log(arr16);

let str3='hello';
console.log(str3.repeat(3));


let str4='hellohellohello';
console.log(str4.split('h'));

let str5='hello';
console.log(str5);
console.log(str5[0]);
console.log(str5.substring(2,4));
console.log(str5.replace('e','ee'));
console.log(str5.substr(2,4));//deprecated or not using


let arr17=[[1,2,3],[4,5,6],[7,8,9]];
console.log(arr17);
console.log(arr17.flat());

let arr18=[[1,2,3],[4,5,6],[7,8,9]];
console.log(arr18);
console.log(arr18.flat().flatMap((element)=>{
    return element+10;
}));
