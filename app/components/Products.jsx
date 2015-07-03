import GriddleWrapper from './GriddleWrapper';
import Product from '../models/Product';

export default class Products extends React.Component {
    render() {
        const columnMetadata = [{
            columnName: 'id',
            displayName: '',
            type: 'id'
        }, {
            columnName: 'name',
            displayName: 'Name'
        }, {
            columnName: 'brand',
            displayName: 'Brand'
        }, {
            columnName: 'picture',
            displayName: 'Picture',
            visible: false
        }, {
            columnName: 'link',
            displayName: 'Link',
            type: 'link',
            visible: false
        }];

        return (
            <GriddleWrapper
                columnMetadata={columnMetadata}
                results={this.props.products}
                noDataMessage="No products found."
            />
        );
    }
}

Products.propTypes = {
    products: React.PropTypes.arrayOf(Product)
};
