export let UserInfo = JSON.parse(localStorage.getItem('UserInfo'));

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
