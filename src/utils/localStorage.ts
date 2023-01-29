import { Token } from '../types/index';
export const addUserToLocalStorage = (token: Token) => {
  localStorage.setItem('user', JSON.stringify(token));
};
export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user');
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user');
  const user = result ? JSON.parse(result) : null;
  return user;
};
