import GriddleWrapper from './GriddleWrapper';

import Receipt from '../models/Receipt';

export default class Receipts extends React.Component {
    render() {
        const columns = [ 'id', 'date', 'store', 'total_gross', 'total_net' ];

        return (
            <GriddleWrapper
                columns={columns}
                results={this.props.receipts}
            />
        );
    }
}

Receipts.propTypes = {
    receipts: React.PropTypes.arrayOf(Receipt).isRequired
};
