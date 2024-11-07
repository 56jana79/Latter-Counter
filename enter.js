var input = document.getElementById("textarea")
var words= document.getElementById("word");
var score = document.getElementById("score");


// input.addEventListener("keydown",function(event){
//     var count=0;
//     if(event.key ==' '){
//    var a= count+=1; 
       
//     }
//     word.innerHTML="WORD:"+a;
 
// })
// input.addEventListener("keypress",)

// function key(event){
//     var count=0;
//     if(event.key ==' '){
//         count+=1; 
//     }
//     score.innerHTML="WORD:"+count;
 
// }
//this00000000000000000000000000000000000000000000//

// function counter(){
// var lattercount = input.value ;
// var countof = lattercount.length;


// var wordcount = lattercount.trim().split(" ").filter(function (word){
// return word.length>0;

// }).length;

// score.innerHTML="latter:"+countof;
// words.innerHTML="Word:"+wordcount;

// }
// input.addEventListener("input",counter);

//11111111111111111111111111111111111111111111111111111//

function latter(){
var a = input.value ;
// if(a ==' '){
//     latterlen+=1
// }

var count =0;
for(let i=0;i<a.length;i++){
    if(a[i]==' ' && a[i+1]!=' '){
        count+=1;
}
}

let r =a.replaceAll(" ", "");

score.innerHTML="latter:"+r.length;
words.innerHTML="word:"+count;

}
input.addEventListener("input",latter);



