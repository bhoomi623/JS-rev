let score ="33abc"

//console.log(typeof score);
//console.log(typeof (score));


let valueinnumber = Number(score)
//console.log(typeof valueinnumber);
//console.log(valueinnumber);



//for a value of score like 33ac it will give NaN means not a number
//for a value of score like null it will give 0 

// "33"=> 33
//"33abc"=> NaN
// true=>1; false =>0


let isloggedin = ""


let booleanisloggedin= Boolean( isloggedin)
//console.log(booleanisloggedin)   

// 1=>true ; 0=>false ; 
// ""=>false
//"asdf"=> true


let somenumber= 33

let stringnumber =  String(somenumber)
//console.log(stringnumber);
//console.log(typeof stringnumber)


//***************************************operations*************************************** */

let value =3
let negvalue = -value
//console.log(negvalue);  // gives -3

let str1="hello"
let str2="bhoomi"

let str3= str1 + str2
console.log(str3);

//console.log("1"+2);  //12
//console.log(1+"2");  //12
//console.log("1"+2+2);  //122
//console.log(1+2+"2");//32

//console.log(+true)  // 1
//console.log(+"");  //0


let num1,numm2,num3;

num1=num2=num3=2+2

let gamecounter = 100
gamecounter++;  // ++gamecounter will also give 101   its about prefix and postfix
console.log(gamecounter);
