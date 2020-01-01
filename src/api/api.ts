import axios, { AxiosPromise } from 'axios';
import { urls } from '../constants';
import { IGetRepoResponse, TGetListResponse } from './types';

export default {
    getList: (): AxiosPromise<TGetListResponse> => {
        return get(urls.GET_LIST);
    },

    getRepo: (): AxiosPromise<IGetRepoResponse> => {
        return get(urls.GET_REPO);
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
