
setTimeout(function() {
    var navbar = document.querySelector('.un');
    navbar.classList.remove('uk-invisible');
    navbar.classList.add('uk-animation-slide-left');
}, 800);

setTimeout(function() {
    var navbar = document.querySelector('.deux');
    navbar.classList.remove('uk-invisible');
    navbar.classList.add('uk-animation-slide-left');
}, 1500);

setTimeout(function() {
    var navbar = document.querySelector('.trois');
    navbar.classList.remove('uk-invisible');
    navbar.classList.add('uk-animation-slide-left');
}, 2800);

setTimeout(function() {
    var navbar = document.querySelector('.quatre');
    navbar.classList.remove('uk-invisible');
    navbar.classList.add('uk-animation-slide-right');
}, 3800);

setTimeout(function() {
    var navbar = document.querySelector('.cinq');
    navbar.classList.remove('uk-invisible');
    navbar.classList.add('uk-animation-slide-top');
}, 4300);

const nam =document.getElementById('form-name');
const email =document.getElementById('form-email');
const phone =document.getElementById('form-phone');
const submit =document.querySelector('.envoy');
const message =document.getElementById('form-message');

submit.addEventListener('click',(e)=>{
e.preventDefault();
console.log("Clicked");

let ebody = `
<b>Nom : </b>${nam.value}
<br>
<b>e-mail : </b>${email.value}
<br>
<b>Phone : </b>${phone.value}
<br>
<b>message : </b>${message.value}
<br>
`


Email.send({
    SecureToken : "84586217-6da8-4408-bcb7-93cae669277c",
    To : 'guillaumeroch3@gmail.com',
    From : "guillaumeroch3@gmail.com",
    Subject : "Email reçu de " + email.value,
    Body : ebody
}).then(
  message => alert(message)
);
});
// geting canvas by Boujjou Achraf
var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
//converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
    drops[x] = 1; 

//drawing the characters
function draw()
{
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#03ad23";//green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for(var i = 0; i < drops.length; i++)
    {
        //a random chinese character to print
        var text = matrix[Math.floor(Math.random()*matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 35);
