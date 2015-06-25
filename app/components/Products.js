import GriddleWrapper from './GriddleWrapper';

import Product from '../models/Product';

export default class Products extends React.Component {
    render() {
        const columns = [ 'id', 'label', 'price' ];

        return (
            <GriddleWrapper
                columns={columns}
                results={this.props.products}
                noDataMessage="No products found."
            />
        );
    }
}

Products.propTypes = {
    products: React.PropTypes.arrayOf(Product)
};
