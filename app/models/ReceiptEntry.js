export default React.PropTypes.shape({
    productId: React.PropTypes.number,
    label: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf([ 'product', 'discount' ]).isRequired,
    amount: React.PropTypes.number.isRequired
});
