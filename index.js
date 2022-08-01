let randnum1=Math.floor(Math.random() * 6) +1; 

let randimg1=`images/dice${randnum1}.png`;

let img1=document.querySelectorAll("img")[0].setAttribute("src",randimg1);


////////////////////////////////////////////////////

let randnum2=Math.floor(Math.random() * 6) +1; 

let randimg2=`images/dice${randnum2}.png`;

let img2=document.querySelectorAll("img")[1].setAttribute("src",randimg2);


///////////////////////////////////////////////////////////

if(randnum1>randnum2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins!";
    
}
else if (randnum2>randnum1)
{
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else
{
    document.querySelector("h1").innerHTML="Draw!";
}