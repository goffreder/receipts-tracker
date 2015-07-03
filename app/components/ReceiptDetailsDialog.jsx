import NavigationDecorator from '../utils/NavigationDecorator';

import Griddle from 'griddle-react';
import CurrencyComponent from './griddle-components/CurrencyComponent';

const { Dialog, RaisedButton } = mui;

@NavigationDecorator
export default class ReceiptDetailsDialog extends React.Component {
    constructor(props) {
        super(props);

        this.handleDialogShow = this.handleDialogShow.bind(this);
        this.handleEditReceipt = this.handleEditReceipt.bind(this);
    }

    handleDialogShow(e) {
        e.preventDefault();

        this.refs.dialog.show();
    }

    handleEditReceipt() {
        console.log('Editing receipt...');

        this.transitionTo('/receipt/11');
    }

    render() {
        const dialogActions = [
            { text: 'Edit Receipt', onTouchTap: this.handleEditReceipt },
            { text: 'Close' }
        ];

        const columnMetadata = [{
            columnName: 'label',
            displayName: 'Label'
        }, {
            columnName: 'amount',
            displayName: 'Value',
            cssClassName: 'double-column',
            customComponent: CurrencyComponent
        }];

        const columns = columnMetadata.map((meta) => {
            return meta.columnName;
        });

        return (
            <div>
                <Dialog
                    ref="dialog"
                    title="Receipt details"
                    actions={dialogActions}
                >
                    <Griddle
                        columnMetadata={columnMetadata}
                        columns={columns}
                        results={this.props.data}
                        resultsPerPage={this.props.data.length}
                        showPager={false}
                        useGriddleStyles={false}
                        showFilter={true}
                    />
                </Dialog>
                <RaisedButton label="Details" secondary={true} onClick={this.handleDialogShow} />
            </div>
        );
    }
}

ReceiptDetailsDialog.contextTypes = {
    router: React.PropTypes.func
};

ReceiptDetailsDialog.propTypes = {
    data: React.PropTypes.any.isRequired,
    rowData: React.PropTypes.object.isRequired
};
