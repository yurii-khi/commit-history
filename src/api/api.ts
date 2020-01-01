import axios, { AxiosPromise } from 'axios';
import { urls } from '../constants';
import { TGetListResponse } from './types';

export default {
    getList: (): AxiosPromise<TGetListResponse> => {
        return get(urls.GET_LIST);
    },
};

function get(url: string): AxiosPromise {
    return axios({
        headers: {
            Accept: 'application/vnd.github.v3+json',
        },
        method: 'get',
        url,
    });
}
