// Function to change webpage background color
var coins = "5";

function badgeFive(){
if (coins >= 5){
badgeDog();
}
else{
alert("You don't have enough coins for this yet!")
}
}


function badgeTen(){
if (coins >= 10){
badgeCat();
}
else{
alert("You don't have enough coins for this yet!")
}
}

function badgeFifteen(){
if (coins >= 15){
badgeFrog();
}
else{
alert("You don't have enough coins for this yet!")
}
}

function bgFive(){
if (coins >= 5){
changeBodyBg('lavender');
}
else{
alert("You don't have enough coins for this yet!")
}
}

function bgTen(){
if (coins >= 10){
changeBodyBg('lemonchiffon');
}
else{
alert("You don't have enough coins for this yet!")
}
}

function bgFifteen(){
if (coins >= 15){
changeBodyBg('darkseagreen');
}
else{
alert("You don't have enough coins for this yet!")
}
}

function changeBodyBg(color) {
  document.body.style.background = color;
}

// Function to add dog badge
function badgeDog() {
  document.getElementById("badges").innerHTML = "<img src='https://64.media.tumblr.com/22d31c1b20083fc42693ab06cb143f26/tumblr_o7k6mtHGq01vvrntdo1_1280.png' />";
}

// Function to add cat badge
function badgeCat() {
  document.getElementById("badges").innerHTML = "<img src='https://64.media.tumblr.com/tumblr_mdnhnzfBpN1rnqolfo1_500.png' />";
}


// Function to add frog badge
function badgeFrog() {
  document.getElementById("badges").innerHTML = "<img src='https://64.media.tumblr.com/52cbd3bd39e05a3077419f423246584c/046bbac4f325e662-41/s500x750/5c99414e17240faaf2669e945d9f52df7aad4688.png' />";
}

