const name =document.getElementById('fname');
const email =document.getElementById('femail');
const phone =document.getElementById('ftel');
const submit =document.getElementsByClassName('uk-form-stacked')[0];

submit.addEventListener('submit',(e)=>{
e.preventDefault();
console.log("Clicked");

let ebody = `
<b>Nom : </b>${fname.value}
<br>
<b>e-mail : </b>${femail.value}
<br>
<b>Phone : </b>${ftel.value}
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