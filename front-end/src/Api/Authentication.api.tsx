import { User } from '../Models';

export async function loginAPI(payload: { account: string; password: string }) {
  try {
    return await fetch(`${process.env.REACT_APP_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        payload,
      }),
    });
  } catch (err) {
    console.log('🚀 ~ file: Authentication.api.tsx ~ line 14 ~ LoginAPI ~ err', err);
  }
}
export async function registerAPI(payload: User) {
  try {
    return await fetch(`${process.env.REACT_APP_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        payload,
      }),
    });
  } catch (err) {
    console.log('🚀 ~ file: Authentication.api.tsx ~ line 14 ~ LoginAPI ~ err', err);
  }
}

export function RefreshToken() {}
