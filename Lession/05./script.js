"use strict"

calculation();

console.log("esmu failā");


var nosaukums = 5; 
var x = 5;
var option = 5;
var y = 5;


console.log(typeof nosaukums);

var teksts = "4";

console.log(typeof teksts);

var longtext = "garš teksts";

console.log(longtext);
console.log(typeof longtext);

var somevariable = teksts;


var daljskaitlis = 5.4;
console.log(daljskaitlis);
console.log(typeof daljskaitlis);

var truefalse = true;
var falsetrue = false;
console.log(truefalse);
console.log(typeof truefalse);

// var 12 = 12; //tā nevar 😞
// var 12ret = 12;
var skaitlis12 = 12;
var sk12lis = 12;


// Objekti

var objekts = [1,2,3,4];
console.log(objekts);
console.log(typeof objekts);

var objekts2 = [1,2,3,"4"];
console.log(objekts2);
console.log(typeof objekts2);

console.log(objekts2[1]); //2

console.log(objekts2[4]);//undefined? 

objekts2[2] = null;//null
console.log(objekts2);

console.log(objekts2[2] == objekts2[4]);
console.log(null == null);
console.log(0 == null);

console.log(objekts2[2] === objekts2[4]);


// NaN === Not a number;

var nan = NaN;
console.log(nan);
console.log(typeof nan);

console.log(typeof objekts2[2]);
console.log(typeof objekts2[4]);



console.log("Atgrizos no pārtraukuma");
 
// JS
// komentārs 

/* 
vairāku rindu komentārs 


*/


var jaunsobjekts = [{
    name : "Rolands",
    phone: "26162400"
},{
    name : "Rolands2",
    phone: "26162400"
},
]

console.log(jaunsobjekts);
console.log(typeof jaunsobjekts);

console.log(jaunsobjekts[1]);
console.log(typeof jaunsobjekts[1].name);


var var1 = 5;
var Var1 =10;
console.log(var1); //5
console.log(Var1); //10

var1 = Var1;

console.log(var1); //10

var1 = "teksts"; 
console.log(var1);


function calculation(){
    console.log("Mēs esam funkcijā");
} 

calculation();
calculation();
calculation();
calculation();
calculation();




// calc();

// console.log(calculation);
// console.log(calculation());
// console.log(calc);
// console.log(calc());


var citafn = calc;

var calc = function(){
    console.log("cita funkcija");
    return 5;
}

var returnedValue = calc();


function newCalculation(x,y){
    return x*y;
}

console.log(newCalculation(5,10));

var text2 = "text"

console.log(newCalculation(text2,"textus"));

console.log(newCalculation(4,3,6));


// Logical structures


var condition = true; 

//if statement

// true = 1;
// false = 0;

condition =true;

if (condition){
    console.log("condition executed");
    condition = false;
} else {
    console.log("condition false");
}


var ifelse = 4 

if (ifelse == 5 ){
    console.log("true")
} else if (ifelse > 5){
    console.log(">5")
} else {
    console.log("<5")
}

//switch
var mynumber = 30;

switch (mynumber) {
    case 30:  
        console.log(30); 
        break;
    case 15:
        console.log(15);
        break;    
    default:
        console.log("end");
        break;
}

// Cikli

for(var i = 0; i<5; 1 = i+1;){
    console.log(i);
}

for (var i=0; i<4; i++){
    for (var j=0; j<4; j++){
        console.log(i);
        console.log(j);
        console.log(i*j);
    }    
}

var masivs = [4,3,2,1,0];

for (i=0; i,masivs.length; i++){
    console.log(masivs{i});

}