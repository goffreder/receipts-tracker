import Griddle from 'griddle-react';

import { Product } from '../config/models';

export default class Products extends React.Component {
    render() {
        const columns = [ 'id', 'label', 'price' ];

        return (
            <Griddle columns={columns} results={this.props.products} />
        );
    }
}

Products.propTypes = {
    products: React.PropTypes.arrayOf(Product).isRequired
};
