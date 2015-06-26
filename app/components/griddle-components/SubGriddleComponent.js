import Griddle from 'griddle-react';

const { Dialog } = mui;

export default class SubGriddleComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleGriddleDialogShow = this.handleGriddleDialogShow.bind(this);
    }

    handleGriddleDialogShow(e) {
        e.preventDefault();

        console.log(this.props);

        this.refs.griddleDialog.show();
    }

    render() {
        const dialogActions = [
            { text: 'Close' }
        ];

        return (
            <div>
                <Dialog
                    ref="griddleDialog"
                    actions={dialogActions}
                >
                    <Griddle
                        results={this.props.data}
                        useGriddleStyles={false}
                        showFilter={true}
                    />
                </Dialog>
                <a href="#" onClick={this.handleGriddleDialogShow}>Show list</a>
            </div>
        );
    }
}

SubGriddleComponent.propTypes = {
    data: React.PropTypes.any.isRequired
};
