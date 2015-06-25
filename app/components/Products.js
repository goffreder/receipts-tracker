import GriddleWrapper from './GriddleWrapper';

import Product from '../models/Product';

export default class Products extends React.Component {
    render() {
        const columns = [ 'id', 'label', 'price' ];

        return (
            <GriddleWrapper
                columns={columns}
                results={this.props.products}
            />
        );
    }
}

Products.propTypes = {
    products: React.PropTypes.arrayOf(Product).isRequired
};
