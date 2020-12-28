window.addEventListener('DOMContentLoaded', () => {

    const inputPhone = document.querySelector('.phone'),
          inputEmail = document.querySelector('.email'),
          inputName = document.querySelector('.name'),
          checkboxRules = document.querySelector('.real-checkbox'),
          errorPhone = document.querySelector('.error-phone'),
          errorEmail = document.querySelector('.error-email'),
          submitButton = document.querySelector('.partner_form_btn');

    let validPhone = false,
        validEmail = false;

    function validatePhone() {
        const re = /^[+]{1}[0-9]{11}$/;
        validPhone = re.test(inputPhone.value);
        if (!validPhone) {
            errorPhone.classList.add('show');
            errorPhone.classList.remove('hide');
            inputPhone.style.color = '#F26522';
        }
        else {
            errorPhone.classList.add('hide');
            errorPhone.classList.remove('show');
            inputPhone.style.color = '#000000';
        }
        check();
    } 

    inputPhone.addEventListener('blur', validatePhone);

    function validateEmail() {
        const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,6}$/i;
        validEmail = re.test(inputEmail.value);
        if (!validEmail) {
            errorEmail.classList.add('show');
            errorEmail.classList.remove('hide');
            inputEmail.style.color = '#F26522';
        }
        else {
            errorEmail.classList.add('hide');
            errorEmail.classList.remove('show');
            inputEmail.style.color = '#000000';
        }
        check();
    } 

    inputEmail.addEventListener('blur', validateEmail);

    function check() {
        if (validPhone && validEmail && checkboxRules.checked && inputName.value !== '') {
            submitButton.removeAttribute('disabled');
        } else {
            submitButton.setAttribute('disabled', 'disabled');
        }
    }

    inputName.addEventListener('keyup', check);
    checkboxRules.addEventListener('click', check);


    function closePhone() {
        errorPhone.classList.add('hide');
        errorPhone.classList.remove('show');
    }

    function closeEmail() {
        errorEmail.classList.add('hide');
        errorEmail.classList.remove('show');
    }

    
    errorPhone.addEventListener('click', closePhone);
    errorEmail.addEventListener('click', closeEmail);


});