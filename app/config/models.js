const Store = React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    description: React.PropTypes.string.isRequired,
    address: React.PropTypes.string.isRequired
});

const Product = React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    label: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired
});

const Receipt = React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    date: React.PropTypes.string.isRequired,
    store: React.PropTypes.number.isRequired,
    total_gross: React.PropTypes.number.isRequired,
    total_net: React.PropTypes.number.isRequired,
    products: React.PropTypes.arrayOf(Product)
});

export default {
    Store,
    Product,
    Receipt
};
