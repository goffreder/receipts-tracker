import Store from './Store';
import ReceiptEntry from './ReceiptEntry';

export default React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    date: React.PropTypes.string.isRequired,
    storeId: React.PropTypes.number.isRequired,
    store: Store,
    total_gross: React.PropTypes.number.isRequired,
    total_net: React.PropTypes.number.isRequired,
    entries: React.PropTypes.arrayOf(ReceiptEntry).isRequired
});
