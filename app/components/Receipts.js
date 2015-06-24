import Griddle from 'griddle-react';

import { Receipt } from '../config/models';

export default class Receipts extends React.Component {
    render() {
        const columns = [ 'id', 'date', 'store', 'total_gross', 'total_net' ];

        return (
            <Griddle columns={columns} results={this.props.receipts} />
        );
    }
}

Receipts.propTypes = {
    receipts: React.PropTypes.arrayOf(Receipt).isRequired
};
