import { Store } from '../config/models';

export default class Stores extends React.Component {
    render() {
        return (
            <div>Stores</div>
        );
    }
}

Stores.propTypes = {
    stores: React.PropTypes.arrayOf(Store).isRequired
};
