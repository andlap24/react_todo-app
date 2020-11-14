const BASE_URL = 'https://swapi.dev/api';

export const getData = async url => fetch(`${BASE_URL}${url}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    return response.json();
  })
  .then(result => result.results);

export const getUsers = async(url) => {
  const users = await getData(url);

  return users;
};

export const getInfo = async url => fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    return response.json();
  })
  .then(result => result);
