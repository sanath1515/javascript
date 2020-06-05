var randomnumber1=Math.ceil(6*Math.random());
var randomnumber2=Math.ceil(6*Math.random());

// document.querySelector("h1").style.color="green";

var a="dice"+randomnumber1+".png";
var b="dice"+randomnumber2+".png";

var image_a= "images/"+a;
var image_b="images/" +b;

if(randomnumber1>randomnumber2)
{
  document.querySelector("h1").textContent="Player 1 wins";
}
else if(randomnumber1<randomnumber2)
{
  document.querySelector("h1").textContent="Player 2 wins";
}
else
{
  document.querySelector("h1").textContent="draw";
}

document.querySelector(".container .dice .img1").setAttribute("src",image_a);

document.querySelector(".container .dice .img2").setAttribute("src",image_b);
