import GriddleWrapper from './GriddleWrapper';
import ReceiptDetailsDialog from './ReceiptDetailsDialog';
import Receipt from '../models/Receipt';

export default class Receipts extends React.Component {
    render() {
        const columnMetadata = [{
            columnName: 'id',
            type: 'id'
        }, {
            columnName: 'date',
            displayName: 'Date',
            type: 'date'
        }, {
            columnName: 'storeName',
            displayName: 'Store'
        }, {
            columnName: 'total_gross',
            displayName: 'Gross Total',
            cssClassName: 'double-column',
            type: 'currency',
            visible: false
        }, {
            columnName: 'total_net',
            displayName: 'Net Total',
            cssClassName: 'double-column',
            type: 'currency'
        }, {
            columnName: 'entries',
            displayName: 'Details',
            cssClassName: 'double-column',
            customComponent: ReceiptDetailsDialog,
            header: false
        }];

        this.props.receipts.forEach((receipt) => {
            receipt.storeName = receipt.store.name;
        });

        return (
            <div>
                <GriddleWrapper
                    columnMetadata={columnMetadata}
                    results={this.props.receipts}
                    noDataMessage="No receipts found."
                />
            </div>
        );
    }
}

Receipts.propTypes = {
    receipts: React.PropTypes.arrayOf(Receipt)
};
