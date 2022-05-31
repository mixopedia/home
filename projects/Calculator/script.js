let a=0;
let b=0;
let r=0;
f="";

let sv;
function buttonclick(val)
{
    console.log(val)
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}
function clearbutton(val)
{
    document.getElementById("screen").value="";
    a=0;
}
function backspace() {
    var bsp = document.getElementById("screen").value;
    document.getElementById("screen").value=bsp.substring(0,bsp.length -1);
}

function plusclick(){
    f="+";
    if(a==0){
        a = parseFloat(document.getElementById("screen").value);
        document.getElementById("screen").value="";
    }
    else if(a!=0){
        a = a+parseFloat(document.getElementById("screen").value)
        document.getElementById("screen").value="";
    }
    
}
function minusclick(){
    f="-";
    if(a==0){
        a = parseFloat(document.getElementById("screen").value);
        document.getElementById("screen").value="";
    }
    else if(a!=0){
        a = a-parseFloat(document.getElementById("screen").value)
        document.getElementById("screen").value="";
    }
}
function mulclick(){
    f="*";
    if(a==0){
        a = parseFloat(document.getElementById("screen").value);
        document.getElementById("screen").value="";
    }
    else if(a!=0){
        a = a*parseFloat(document.getElementById("screen").value)
        document.getElementById("screen").value="";
    }
    
}
function divclick(){
    f="/";
    if(a==0){
        a = parseFloat(document.getElementById("screen").value);
        document.getElementById("screen").value="";
    }
    else if(a!=0){
        a = a/parseFloat(document.getElementById("screen").value)
        document.getElementById("screen").value="";
    }
    
}


function equalbutton(){
    switch(f){
        case "+":
            b = parseFloat(document.getElementById("screen").value);
            c=a+b;
            document.getElementById("screen").value=c;
            a=0;
            break;
        case "-":
            b = parseFloat(document.getElementById("screen").value);
            c=a-b;
            document.getElementById("screen").value=c;
            a=0;
            break;
        case "*":
            b = parseFloat(document.getElementById("screen").value);
            c=a*b;
            document.getElementById("screen").value=c;
            a=0;
            break;
        case "/":
            b = parseFloat(document.getElementById("screen").value);
            c=a/b;
            document.getElementById("screen").value=c;
            a=0;
            break;

    }
}
