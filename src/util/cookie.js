import cookie from 'js-cookie';

export function setCookie(user) {
  const arr = Object.entries(user);
  for (let i = 0; i < arr.length; i += 1) {
    cookie.set(arr[i][0], arr[i][1]);
  }
  return true;
}
export function getCookie() {
  return {
    email: cookie.get('email'),
    role: cookie.get('role'),
    username: cookie.get('username'),
  };
}
export function removeCookie() {
  cookie.remove('appkey');
  cookie.remove('email');
  cookie.remove('role');
  cookie.remove('username');
  cookie.remove('login');
  return true;
}
