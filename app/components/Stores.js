import GriddleWrapper from './GriddleWrapper';

import Store from '../models/Store';

export default class Stores extends React.Component {
    render() {
        const columnMetadata = [{
            columnName: 'id',
            displayName: '',
            type: 'id'
        }, {
            columnName: 'name',
            displayName: 'Name'
        }, {
            columnName: 'address',
            displayName: 'Address'
        }];

        return (
            <GriddleWrapper
                columnMetadata={columnMetadata}
                results={this.props.stores}
                noDataMessage="No stores found."
            />
        );
    }
}

Stores.propTypes = {
    stores: React.PropTypes.arrayOf(Store)
};
