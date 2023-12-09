const form = document.querySelector('.form');
const small = document.querySelector('small');
const email = document.getElementById('email');
const register = document.querySelector('.register');
const success = document.querySelector('.success');
const update = document.querySelector('.update');


function checkEmail(input) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // console.log(regEx.test(input.value.trim()));
    if (regEx.test(input.value.trim())) {
        showSuccess(input);
    }  else if (input.value === ""){
        showError(input, `This is a required field`)
    } else {
        showError(input, `Please enter a valid email`);
    }
}

function showError(input, message) {
    small.classList.add('error');
    small.innerText = message;
    input.classList.add('error');
}

function showSuccess(input) {
    register.className = 'register hidden';
    success.className = 'success active';
    update.innerText = input.value;

    const returnBtn = document.querySelector('.return');
    returnBtn.addEventListener('click', (e) => {
        register.className = 'register active';
        success.className = 'success hidden';
        email.value = '';
})
}

// Event Listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkEmail(email);
});
