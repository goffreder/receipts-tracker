import Product from './Product';

export default React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    date: React.PropTypes.string.isRequired,
    store: React.PropTypes.number.isRequired,
    total_gross: React.PropTypes.number.isRequired,
    total_net: React.PropTypes.number.isRequired,
    products: React.PropTypes.arrayOf(Product)
});
