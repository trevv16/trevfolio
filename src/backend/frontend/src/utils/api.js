import axios from 'axios';
import Auth from '../Auth';

const API = `${process.env.REACT_APP_BACKEND_HOST}`;

function headers() {
  const token = Auth.getToken();
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer: ${token}`
  };
}

function queryString(params) {
  const query = Object.keys(params)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');
  return `${query.length ? '?' : ''}${query}`;
}

function fetch(url, params = {}) {
  return axios.get(`${API}/${url}${queryString(params)}`, {
    headers: headers()
  });
}

export default {
  fetch(url, params = {}) {
    return fetch(url, params);
  },

  upload(verb, url, data) {
    switch (verb.toLowerCase()) {
      case 'post':
        return axios.post(`${API}/${url}`, data, { headers: headers() });
      case 'put':
        return axios.put(`${API}/${url}`, data, { headers: headers() });
      case 'patch':
        return axios.patch(`${API}/${url}`, data, { headers: headers() });
      default:
        return axios.post(`${API}/${url}`, data, { headers: headers() });
    }
  },

  post(url, data) {
    return axios.post(`${API}/${url}`, data, { headers: headers() });
  },

  put(url, data) {
    return axios.put(`${API}/${url}`, data, { headers: headers() });
  },

  patch(url, data) {
    return axios.patch(`${API}/${url}`, data, { headers: headers() });
  },

  delete(url) {
    return axios.delete(`${API}/${url}`, { headers: headers() });
  }
};
