/*eslint-disable */

import appStore from '../stores/appStore';

import Stores from './Stores';
import Products from './Products';
import Receipts from './Receipts';

class StoresWrapper extends React.Component {
    render() {
        console.warn('WRAPPER METHOD - waiting for react-router 1.0 for removal');

        return <Stores stores={appStore.getStores()} />;
    }
}

class ProductsWrapper extends React.Component {
    render() {
        console.warn('WRAPPER METHOD - waiting for react-router 1.0 for removal');

        return <Products products={appStore.getProducts()} />;
    }
}

class ReceiptsWrapper extends React.Component {
    render() {
        console.warn('WRAPPER METHOD - waiting for react-router 1.0 for removal');

        return <Receipts receipts={appStore.getReceipts()} />;
    }
}

export default {
    Stores: StoresWrapper,
    Products: ProductsWrapper,
    Receipts: ReceiptsWrapper
};

/*eslint-enable */
