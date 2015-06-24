import { Route, DefaultRoute } from 'react-router';

import Main from '../components/Main';
import Dashboard from '../components/Dashboard';
import { Stores } from '../components/Wrappers';
import { Receipts } from '../components/Wrappers';
import { Products } from '../components/Wrappers';

export default (
    <Route name="root" path="/" handler={Main}>
        <Route name="dashboard" handler={Dashboard} />
        <Route name="stores" handler={Stores} />
        <Route name="receipts" handler={Receipts} />
        <Route name="products" handler={Products} />

        <DefaultRoute handler={Dashboard} />
    </Route>
);
