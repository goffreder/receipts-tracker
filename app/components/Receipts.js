import GriddleWrapper from './GriddleWrapper';
import Receipt from '../models/Receipt';

export default class Receipts extends React.Component {
    render() {
        const columnMetadata = [{
            columnName: 'id',
            displayName: '',
            type: 'id'
        }, {
            columnName: 'date',
            displayName: 'Date',
            type: 'date'
        }, {
            columnName: 'storeName',
            displayName: 'Store'
        }, {
            columnName: 'entries',
            displayName: 'List',
            type: 'sub-griddle'
        }, {
            columnName: 'total_gross',
            displayName: 'Gross Total',
            cssClassName: 'double-column',
            type: 'currency'
        }, {
            columnName: 'total_net',
            displayName: 'Net Total',
            cssClassName: 'double-column',
            type: 'currency'
        }];

        this.props.receipts.forEach((receipt) => {
            receipt.storeName = receipt.store.name;
        });

        return (
            <GriddleWrapper
                columnMetadata={columnMetadata}
                results={this.props.receipts}
                noDataMessage="No receipts found."
            />
        );
    }
}

Receipts.propTypes = {
    receipts: React.PropTypes.arrayOf(Receipt)
};
