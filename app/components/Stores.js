import { Store } from '../config/models';

export default class Stores extends React.Component {
    render() {
        console.log(this.props.stores);

        return (
            <div>Stores</div>
        );
    }
}

Stores.propTypes = {
    stores: React.PropTypes.arrayOf(Store).isRequired
};
