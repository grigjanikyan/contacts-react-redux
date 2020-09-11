import axios from "axios";

const token = localStorage.getItem("auth");
const API_ENDPOINT = 'https://randomuser.me/api/1.3';

class _api {
    requester = axios.create();

    constructor() {

        this.requester.interceptors.request.use(request => {

            request.baseURL = '/';
            request.headers.common['X-Requested-With'] = 'XMLHttpRequest';

            return request;
        })

        this.requester.interceptors.response.use(
            response => {
                return response;
            },
            error => {
                return Promise.reject(error);
            }
        )
    }

    async get(resource, params = {}) {

        params = new Map(Object.entries(params))

        const options = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            }
        };
        const url = `${API_ENDPOINT + resource}?${_api.serializeParams(params)}`;
        const response = await this.request(url, options);

        return response.data;
    }

    async post(resource, params = {}) {

        const options = {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            data: {...params}
        };
        const url = API_ENDPOINT + resource;
        const response = await this.request(url, options);

        return response.data;
    }

    async put(resource, params = {}) {

        const options = {
            method: "PUT",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            data: {...params}
        };
        const url = API_ENDPOINT + resource;
        const response = await this.request(url, options);

        return response.data;
    }

    async delete(resource, params = {}) {

        const options = {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            data: {...params}
        };
        const url = API_ENDPOINT + resource;
        const response = await this.request(url, options);

        return response.data;
    }

    async request(url, options) {
        return this.requester(url, options);
    }

    static serializeParams(params) {
        const array = [];

        params.forEach((value, key) => {
            array.push(`${key}=${encodeURIComponent(value)}`)
        });

        return array.join("&");
    }
}

export default new _api();
