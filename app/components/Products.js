import { Product } from '../config/models';

export default class Products extends React.Component {
    render() {
        console.log(this.props.products);

        return (
            <div>Products</div>
        );
    }
}

Products.propTypes = {
    products: React.PropTypes.arrayOf(Product).isRequired
};
