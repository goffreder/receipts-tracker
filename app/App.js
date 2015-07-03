import 'normalize-css/normalize.css';
import './styles/css/griddle.css';

import Router from 'react-router';
import AppRoutes from './config/routes';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

Router.create({
    routes: AppRoutes,
    scrollBehavior: Router.ScrollToTopBehavior
}).run((Handler) => {
    React.render(<Handler/>, document.body);
});
