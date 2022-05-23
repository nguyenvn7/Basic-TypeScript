import { User } from '../Models';

export async function LoginAPI(payload: { userName: string; password: string }) {
  try {
    return await fetch('http://localhost:8080/api/login', {
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
export async function RegisterAPI(payload: User) {
  try {
    return await fetch('http://localhost:8080/api/register', {
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
