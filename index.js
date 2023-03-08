var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imgSource = " " + "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imgSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imgSource = " " + "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imgSource);


if (randomNumber1 > randomNumber2) {
   document.querySelector("h1").innerHTML = "Player 1 Wins";

} else if (randomNumber2 > randomNumber1) {
   document.querySelector("h1").innerHTML = "Player 2 Wins";

} else {
   document.querySelector("h1").innerHTML = "Draw!";
}

/*$("h1").mouseover(function(){
   $("h1").before("<button>Toggle<button/>");
   $("h1").slideToggle();
});**/

// Or Alternatively
/*
$("h1").on("click", function(){
   var h1button = $("h1").before("<button>Toggle</button>");
   $(h1button).slideToggle();
})

**/
