import appData from '../constants/appData';

import userActions from '../actions/userActions';

import appStore from '../stores/appStore';

import { RouteHandler } from 'react-router';

import Header from './Header';
import LeftSideBar from './LeftSideBar';

const { Styles, LeftNav } = mui;
const { Colors, Spacing, Typography } = Styles;
const ThemeManager = new Styles.ThemeManager();

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = appStore.getState();

        this.handleMenuIconClick = this.handleMenuIconClick.bind(this);
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

    componentDidMount() {
        appStore.addChangeListener(this.handleAppStoreChange.bind(this));

        userActions.userLoadData();
    }

    componentWillUnmount() {
        appStore.removeCHangeListener(this.handleAppStoreChange.bind(this));
    }

    handleAppStoreChange() {
        this.setState(appStore.getState());
    }

    handleMenuIconClick() {
        userActions.userLeftSideBarToggle();
    }

    render() {
        const menuItems = [{
            route: 'receipts',
            text: 'Receipts',
            number: this.state.receipts.length.toString() || null
        }, {
            route: 'products',
            text: 'Products',
            number: this.state.products.length.toString() || null
        }, {
            route: 'stores',
            text: 'Stores',
            number: this.state.stores.length.toString() || null
        }];

        let title;

        switch (true) {
            case this.context.router.isActive('dashboard'):
                title = 'Dashboard';
                break;
            case this.context.router.isActive('stores'):
                title = 'Stores';
                break;
            case this.context.router.isActive('products'):
                title = 'Products';
                break;
            case this.context.router.isActive('receipts'):
                title = 'Receipts';
                break;
            default:
                title = appData.description;
                break;
        }

        return (
            <div>
                <Header
                    title={title}
                    iconClickHandler={this.handleMenuIconClick}
                />
                <LeftSideBar
                    title={appData.description}
                    isOpen={this.state.leftSideBarOpen}
                    menuItems={menuItems}
                    ref="leftNav"
                />
                <RouteHandler />
            </div>
        );
    }
}

Main.contextTypes = {
    router: React.PropTypes.func
};

Main.childContextTypes = {
    muiTheme: React.PropTypes.object
};
