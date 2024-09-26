let UserInfo = JSON.parse(localStorage.getItem('UserInfo'));

if(!UserInfo) {
  UserInfo = [
    {
      fullName: 'Dishank Parmar',
      userName: 'dishank.parmar',
      password: 'dishank1234'
    },
    {
      fullName: 'Zaisha Parmar',
      userName: 'zaisha.parmar',
      password: 'zaisha1234'
    },
  ]; 
}


let username = document.querySelector('.username-text-box');
let password= document.querySelector('.password-text-box');
let isWrong= true;
document.querySelector('.sign-in-button').addEventListener('click', ()=> {
  for(let i =0; i<UserInfo.length; i++) {
    if ((UserInfo[i].userName === username.value)&&(UserInfo[i].password === password.value)) {
      isWrong = false;
      break;
    } else {
      isWrong = true;
    }
  }
  if(isWrong) {
    username.value = '';
    password.value = '';
    document.querySelector('.wrong-info-alert').innerHTML = `Wrong username or password`;
    console.log('no match');
  } else {
    console.log('match');
    document.querySelector('.wrong-info-alert').innerHTML = ``;
  }
})




