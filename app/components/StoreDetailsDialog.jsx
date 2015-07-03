const { Dialog, RaisedButton } = mui;

export default class StoreDetailsDialog extends React.Component {
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

        return (
            <div>
                <Dialog
                    ref="dialog"
                    title="Store details"
                    actions={dialogActions}
                >
                    Details
                </Dialog>
                <RaisedButton label="Details" secondary={true} onClick={this.handleDialogShow} />
            </div>
        );
    }
}

StoreDetailsDialog.propTypes = {
    data: React.PropTypes.any.isRequired,
    rowData: React.PropTypes.object.isRequired
};
