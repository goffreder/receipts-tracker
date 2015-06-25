import GriddleWrapper from './GriddleWrapper';

import Store from '../models/Store';

export default class Stores extends React.Component {
    render() {
        const columns = [ 'id', 'description', 'address' ];

        return (
            <GriddleWrapper
                columns={columns}
                results={this.props.stores}
                noDataMessage="No stores found."
            />
        );
    }
}

Stores.propTypes = {
    stores: React.PropTypes.arrayOf(Store)
};
