import { Product } from '../config/models';

export default class Products extends React.Component {
    render() {
        return (
            <div>Products</div>
        );
    }
}

Products.propTypes = {
    products: React.PropTypes.arrayOf(Product).isRequired
};
