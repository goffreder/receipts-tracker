import { Receipt } from '../config/models';

export default class Receipts extends React.Component {
    render() {
        console.log(this.props.receipts);

        return (
            <div>Receipts</div>
        );
    }
}

Receipts.propTypes = {
    receipts: React.PropTypes.arrayOf(Receipt).isRequired
};
