// FORM BLUR EVENT LISTENERS
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,10}$/; //I want from a to z both lowcase and uppercase and from 2 and 10 letters(^=start with) ($= terminate)

  if (!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}
function validateZip() {
  const zip = document.getElementById('zip');
  const re = /^[0-9]{5}(-[0-9]{4})?$/; //I want numbers from 0 to 9 and they have to be 5, and I want group them together (()=group) with dash- and again other 4 numbers from 0 to 9. With the ? I make it optional

  if (!re.test(zip.value)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}
function validateEmail() {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/; //We want numbers, letters, underscore, litteral dash (in the backslash ) and litteral dot. We need to use the backslash(escape) to don't run in some problem.
  //We put the + bacuse we wanna search for more than 1. and we put the @ and after again numbers and letters and literal . with escape symb, and now after the .com again letter and numbers

  if (!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}
function validatePhone() {
  const phone = document.getElementById('phone');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  //we want literal parentesis with escape and question mark because is optional, after 3 digits. another backslah and another literal parentesis with ? for optional.
  // we wanna be able to separate in optional dash, dot or space

  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}
