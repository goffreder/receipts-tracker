import { Receipt } from '../config/models';

export default class Receipts extends React.Component {
    render() {
        return (
            <div>Receipts</div>
        );
    }
}

Receipts.propTypes = {
    receipts: React.PropTypes.arrayOf(Receipt).isRequired
};
