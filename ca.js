//var result=document.querySelector("input");\
// document.querySelector("button").addEventListener(("click"),function(){
// console.log(document.querySelector("button").innerHTML);
// })
// addEventListener("click",function()
// {
//    var c =button.value;
//    result.value=c;
//    console.log(result.value);

// })

var result=document.querySelector("input");
function fun(num)
{
    result.value+=num;
}
function fun1()
{
    result.value="";
}
function del()
{
    result.value=result.value.slice(0,-1);
}

function calculate()
{  
    var a=result.value;
    var b=eval(a);
    result.value=b;
}
