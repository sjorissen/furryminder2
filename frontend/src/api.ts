import urls from './urls';

/**
 * GET request
 * @param url make a request to this endpoint
 */
export async function get(url: string): Promise<ReturnType<typeof fetch>> {
  return fetch(url, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  });
}

/**
 * POST request
 * @param url make a request to this endpoint
 * @param payload data being submitted (ex: email/password)
 */
export async function post(url: string, payload: any): Promise<ReturnType<typeof fetch>> {
  return fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}

/**
 * Can also create functions for specific purposes (login used here because that's all I really
 * have right now). We call post() here and pass it the username/password combo that the user
 * inputs. login() is then called in Login.tsx where our form is.
 * @param payload username (email) and password from login form
 */
export async function login(payload: { username: string; password: string }) {
  return post(urls.login, payload);
}
