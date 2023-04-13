const targetURL = `${URL}`;
const apikey = `${APIKEY}`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // url.host = 'api.openai.com';
    url.host = targetURL;
    request.headers.set('Authorization', apikey);
    return fetch(url, {
      headers: request.headers,
      method: request.method,
      body: request.body,
      redirect: 'follow',
    });
  },
};
