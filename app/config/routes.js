import { Route, DefaultRoute } from 'react-router';

import Main from '../components/Main';
import Dashboard from '../components/Dashboard';
import Stores from '../components/Stores';
import Receipts from '../components/Receipts';
import Products from '../components/Products';

export default (
    <Route name="root" path="/" handler={Main}>
        <Route name="dashboard" handler={Dashboard} />
        <Route name="stores" handler={Stores} />
        <Route name="receipts" handler={Receipts} />
        <Route name="products" handler={Products} />

        <DefaultRoute handler={Dashboard} />
    </Route>
);
