const popUpBox = document.querySelector('.popUpBox')
const closePopUp = document.querySelector('.closePopUp')
const email = document.getElementById('email')
const form = document.querySelector('form')
function emailPopUp() {
    document.getElementById("popUpBox").style.display = "block";
}
const popUpTimer = setTimeout("emailPopUp()", 500);
console.log('hey')

function handleClick(e) {
    popUpBox.style.display = 'none';
}
function invalidEmail() {
    email.style.border = '2px solid red';
}
closePopUp.addEventListener('click', handleClick);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const emailInput = document.querySelector('input[id = email]');


    if (email.value === '') {
        console.log('no email')
        return email.style.border = '2px solid red';
    }
})
console.log(email)
