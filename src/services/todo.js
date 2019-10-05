import update from 'immutability-helper';
import axios from 'axios';
let BASE_URL = "https://astridjerald.pythonanywhere.com"
let headers = {
  "content-type": "application/json",
  "accept": "*/*"
}


const service = {
  get: (url, options = {}) => {
    options.method = "GET";
    return fetch(url, options);
  },

  post: (url, options = {}) => {
    // options.method = options.method || "POST";
    // options.headers = headers;
    // options.mode = "cors"
    // axios used due to errors coming from fetch api
    return axios.post(url, options)
  },

  put: function (url, options = {}) {
    options.method = "PUT";
    options.headers = headers;
    options.mode = "cors"
    return fetch(url, options);
  },

  delete: (url, options = {}) => {
    options.method = "DELETE";
    options.headers = headers;
    options.mode = "cors"
    return fetch(url, options);
  }
};

/**
 * Get the list of todo items.
 * @return {Array}
 */
export function getAll(id) {
  let data = []
  return service.post(BASE_URL + `/todo/get`, { 'user_id': id })
}

export function getItemById(itemId) {
  service.get(BASE_URL + `/todo/` + itemId, { data: {} }).then(results => {
    return results.json();
  })
}

export function updateStatus(itemId, completed) {
  return service.put(BASE_URL + `/todo/` + itemId, { body: JSON.stringify({ "_is_done": completed ? 1 : 0 }) })
}

export function deleteItemService(itemId) {
  return service.delete(BASE_URL + `/todo/` + itemId, {})
}

/**
 * Adds a new item on the list and returns the new updated list (immutable).
 *
 * @param {Array} list
 * @param {Object} data
 * @return {Array}
 */
export function addToList(list, data) {
  console.log("The data", data)
  return service.post(BASE_URL + `/todo/create`, data)

}


