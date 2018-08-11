import Fecth from 'whatwg-fetch';

export function get(url, object) {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'appication/json',
      Authorization: `Token "${object.auth_token}", email="${object.email}"`
    }
  }).then((response) => {
    if(response.ok)
      return response.json();
    else {
      response = {
        "message": "Error al acceder al sistema, intente más tarde."
      }
    }
    return response;
  })
};

export function post(url, object) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(object)
  }).then((response) => {
    if(response.ok)
      return response.json();
    else if (response.status === 401) {
      response = {
        "code": 7001,
        "message": "Usuario o contraseña incorrectos",
        "auth_token": ""
      };
      return response;

    }
    else {
      alert();
    }
  })
};
