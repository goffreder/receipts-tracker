import GriddleWrapper from './GriddleWrapper';
import StoreDetailsDialog from './StoreDetailsDialog';

import Store from '../models/Store';

export default class Stores extends React.Component {
    render() {
        const columnMetadata = [{
            columnName: 'id',
            type: 'id'
        }, {
            columnName: 'name',
            displayName: 'Name'
        }, {
            columnName: 'address',
            displayName: 'Address'
        }, {
            columnName: 'details',
            header: false,
            cssClassName: 'double-column',
            customComponent: StoreDetailsDialog
        }];

        const results = this.props.stores.map((store) => {
            store.details = 'details';

            return store;
        });

        return (
            <GriddleWrapper
                columnMetadata={columnMetadata}
                results={results}
                noDataMessage="No stores found."
            />
        );
    }
}

Stores.propTypes = {
    stores: React.PropTypes.arrayOf(Store)
};
