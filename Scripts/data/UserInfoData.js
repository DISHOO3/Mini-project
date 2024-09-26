export let UserInfo = JSON.parse(localStorage.getItem('UserInfo'));

if(!UserInfo) {
  UserInfo = [
    {
      fullName: 'Dishank Parmar',
      email: 'dishank003@gmail.com',
      userName: 'dishank.parmar',
      password: 'dishank1234'
    },
    {
      fullName: 'Zaisha Parmar',
      email: 'zaisha28@gmail.com',
      userName: 'zaisha.parmar',
      password: 'zaisha1234'
    },
  ]; 
}
