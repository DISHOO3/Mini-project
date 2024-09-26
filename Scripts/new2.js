import { UserInfo } from "./data/UserInfoData.js";

let name = document.querySelector('.name-text-box');
let nameText = document.querySelector('.name-text');
let email = document.querySelector('.email-text-box');
let emailText = document.querySelector('.email-exists-text');
let username = document.querySelector('.username-text-box');
let usernameText = document.querySelector('.username-exists-text');
let password = document.querySelector('.password-text-box');
let passwordText = document.querySelector('.password-text');
let password2 = document.querySelector('.password2-text-box');
let password2Text = document.querySelector('.password-match-text');
let signupButton = document.querySelector('.sign-up-button');

function checkPasswords() {
  if((password2.value == '')||(password.value == '')) {
    document.querySelector('.password-match-text').innerHTML = null;
  }
  else if (password2.value === password.value){
    document.querySelector('.password-match-text').innerHTML = '';
    
  }
  else {
    document.querySelector('.password-match-text').innerHTML = "Password doesn't match";
  }
}

function checkIfEmpty(input, text) {
  if(input.value == '') {
    text.innerHTML = 'This field is required*';
    return 0;
  }
  else if(((text.innerHTML == '')&&(input.value != ''))||text.innerHTML === 'This field is required*'){
    text.innerHTML = '';
    return 1;
  }
  else {
    return 0;
  }
}

username.addEventListener('input', () => {
  for(let i = 0; i<UserInfo.length; i++) {
    if(username.value === UserInfo[i].userName) {
      document.querySelector('.username-exists-text').innerHTML= 'Account with this username already exists';
      break;
    } else if((username.value !== UserInfo[i].userName)&&(usernameText.innerHTML != 'This field is required*')) {
      document.querySelector('.username-exists-text').innerHTML= null;
    }
  }
})

email.addEventListener('input', () => {
  for(let i = 0; i<UserInfo.length; i++) {
    if(email.value === UserInfo[i].email) {
      document.querySelector('.email-exists-text').innerHTML= 'Account with this email already exists';
      break;
    } else if((email.value !== UserInfo[i].email)&&(emailText.innerHTML != 'This field is required*')){
      document.querySelector('.email-exists-text').innerHTML= null;
    }
  }
})

password2.addEventListener('input', checkPasswords);
password.addEventListener('input', checkPasswords);

signupButton.addEventListener('click', () => {
  checkIfEmpty(name, nameText);
  checkIfEmpty(email, emailText);
  checkIfEmpty(username, usernameText);
  checkIfEmpty(password, passwordText);
  checkIfEmpty(password2, password2Text);

  if (checkIfEmpty(name, nameText)&&
  checkIfEmpty(email, emailText)&&
  checkIfEmpty(username, usernameText)&&
  checkIfEmpty(password, passwordText)&&
  checkIfEmpty(password2, password2Text)) {
    UserInfo.push({
      fullName: name.value,
      email: email.value,
      userName: username.value,
      password: password.value
    })
    console.log(UserInfo);
  }

})

