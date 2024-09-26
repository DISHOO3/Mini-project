import { UserInfo } from "./data/UserInfoData.js";

let username = document.querySelector('.username-text-box');
let email = document.querySelector('.email-text-box');
let password = document.querySelector('.password-text-box');
let password2 = document.querySelector('.password2-text-box');
let isWrong= true;

username.addEventListener('input', () => {
  for(let i = 0; i<UserInfo.length; i++) {
    if(username.value === UserInfo[i].userName) {
      document.querySelector('.username-exists-text').innerHTML= 'Account with this username already exists';
      break;
    } else {
      document.querySelector('.username-exists-text').innerHTML= null;
    }
  }
})

email.addEventListener('input', () => {
  for(let i = 0; i<UserInfo.length; i++) {
    if(email.value === UserInfo[i].email) {
      document.querySelector('.email-exists-text').innerHTML= 'Account with this email already exists';
      break;
    } else {
      document.querySelector('.email-exists-text').innerHTML= null;
    }
  }
})

password2.addEventListener('input', () => {
  if(password2.value === password.value) {
    document.querySelector('.password-match-text').innerHTML = 'Password matches';
  }
  else if ((password2.value === '')|| (password.value === '')) {
    document.querySelector('.password-match-text').innerHTML = null;
  }
  else {
    document.querySelector('.password-match-text').innerHTML = "Password doesn't match";
  }
})

