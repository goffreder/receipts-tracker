import axios from 'axios';

import { ServerActionTypes } from '../constants/actionTypes';
import { REST } from '../constants/apiURLs';

import appDispatcher from '../dispatcher/appDispatcher';

export default {
    serverLoadData() {
        const storesURL = `${REST}/stores`;
        const productsURL = `${REST}/products`;
        const receiptsURL = `${REST}/receipts`;

        axios.all([
            axios.get(storesURL),
            axios.get(productsURL),
            axios.get(receiptsURL)
        ]).then(axios.spread((stores, products, receipts) => {
            appDispatcher.handleServerAction({
                type: ServerActionTypes.SERVER_LOAD_DATA_SUCCESS,
                stores: stores.data,
                products: products.data,
                receipts: receipts.data
            });
        })).catch((res) => {
            appDispatcher.handleServerAction({
                type: ServerActionTypes.SERVER_LOAD_DATA_FAILED,
                res
            });
        });
    }
};
