//matthew beaulieu - dice roller js - software engineering 2mwf

//couldn't get both dice to work from just one function

//function for button one
function ButtClick(){
    num = Math.floor(Math.random()*6) + 1;
    document.querySelector('#butt').innerHTML = num;
}
//function for button two
function ButtonClick(){
    num = Math.floor(Math.random()*6) + 1;
    document.querySelector('#button').innerHTML = num;
}