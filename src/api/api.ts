import axios, { AxiosPromise } from 'axios';
import { urls } from '../constants';
import { TGetListResponse } from './types';

export default {
    getList: (): AxiosPromise<TGetListResponse> => {
        return axios({
            headers: {
                Accept: 'application/vnd.github.v3+json',
            },
            method: 'get',
            url: urls.GET_LIST,
        });
    },
};
