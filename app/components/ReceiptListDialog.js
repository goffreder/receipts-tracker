import Griddle from 'griddle-react';
import CurrencyComponent from './griddle-components/CurrencyComponent';

import { LOCALE, CURRENCY } from '../constants/constants';

const { Dialog } = mui;

export default class ReceiptListDialog extends React.Component {
    constructor(props) {
        super(props);

        this.handleDialogShow = this.handleDialogShow.bind(this);
    }

    handleDialogShow(e) {
        e.preventDefault();

        this.refs.dialog.show();
    }

    render() {
        const dialogActions = [
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

        const storeName = this.props.rowData.storeName;
        const date = new Date(this.props.rowData.date).toLocaleDateString(LOCALE);
        const total = this.props.rowData.total_net;

        return (
            <div>
                <Dialog
                    ref="dialog"
                    title={`${storeName}, ${date} - ${total} ${CURRENCY}`}
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
                <a href="#" onClick={this.handleDialogShow}>Show list</a>
            </div>
        );
    }
}

ReceiptListDialog.propTypes = {
    data: React.PropTypes.any.isRequired,
    rowData: React.PropTypes.object.isRequired
};
