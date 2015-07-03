import { CURRENCY } from '../../constants/constants';

export default class CurrencyComponent extends React.Component {
    render() {
        const value = this.props.data.toFixed(2);
        const currency = `${value} ${CURRENCY}`;

        return (
            <span>{currency}</span>
        );
    }
}

CurrencyComponent.propTypes = {
    data: React.PropTypes.any.isRequired
};
