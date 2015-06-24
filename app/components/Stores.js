import Griddle from 'griddle-react';

import { Store } from '../config/models';

export default class Stores extends React.Component {
    render() {
        const columns = [ 'id', 'description', 'address' ];

        return (
            <Griddle columns={columns} results={this.props.stores} />
        );
    }
}

Stores.propTypes = {
    stores: React.PropTypes.arrayOf(Store).isRequired
};
