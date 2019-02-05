import axios from 'axios';

let authToken = null;
let apiRootUrl = 'https://reqres.in/api/';

class Network {
  static setHost(rootUrl) {
    apiRootUrl = rootUrl;
  }

  static setAuthToken(accessToken) {
    authToken = accessToken;
  }

  static getUrl(route) {
    if (route.indexOf('http://') === 0 || route.indexOf('https://') === 0 || route.indexOf('www.') === 0) {
      return route;
    }
    return `${apiRootUrl}${route}`;
  }

  static getUrlWithParams(route, params) {
    let url = Network.getUrl(route);
    if (params) {
      for (const property in params) {
        if (params.hasOwnProperty(property)) {
          url = Network.addQueryStringParameter(url, property, params[property]);
        }
      }
    }
    return url;
  }

  static addQueryStringParameter(uri, key, value) {
    const re = new RegExp(`([?&])${key}=.*?(&|$)`, 'i');
    const separator = uri.indexOf('?') !== -1 ? '&' : '?';
    if (uri.match(re)) {
      return uri.replace(re, `$1${key}=${value}$2`);
    }
    return `${uri + separator + key}=${value}`;
  }

  static basicHeaders() {
    const headers = {};

    headers['Content-Type'] = 'application/json';
    headers.Accept = 'application/json';

    if (authToken) {
      headers.Authorization = `Bearer ${authToken}`;
    }

    return headers;
  }

  static errorHandler(error) {
    if (error.response) {
      throw {
        errors: (error.response.data && error.response.data.errors) || [
          {
            code: '0',
            status: 500,
            title: 'Unknown error',
            meta: error.response,
          },
        ],
      };
    } else if (error.request) {
      // The request was made but no response was received
      throw {
        errors: [
          {
            code: '0',
            status: 500,
            title: 'Unknown error',
            meta: error.request,
          },
        ],
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      throw {
        errors: [
          {
            code: '0',
            status: 500,
            title: 'Unknown error',
            meta: error.message,
          },
        ],
      };
    }
  }

  static async get(route, params = {}, headers = this.basicHeaders()) {
    try {
      const result = await axios.get(this.getUrlWithParams(route, params), { headers });
      return result.data;
    } catch (err) {
      this.errorHandler(err);
    }
  }

  static async put(route, body = {}, headers = this.basicHeaders()) {
    try {
      const result = await axios.put(this.getUrl(route), body, { headers });
      return result.data;
    } catch (err) {
      this.errorHandler(err);
    }
  }

  static async patch(route, body = {}, headers = this.basicHeaders()) {
    try {
      const result = await axios.patch(this.getUrl(route), body, { headers });
      return result.data;
    } catch (err) {
      this.errorHandler(err);
    }
  }

  static async post(route, body = {}, headers = this.basicHeaders()) {
    try {
      const result = await axios.post(this.getUrl(route), body, { headers });
      return result.data;
    } catch (err) {
      this.errorHandler(err);
    }
  }

  static async delete(route, headers = this.basicHeaders()) {
    try {
      const result = await axios.delete(this.getUrl(route), { headers });
      return result.data || true;
    } catch (err) {
      this.errorHandler(err);
    }
  }
}

export default Network;
