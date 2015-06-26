import { CURRENCY } from '../../constants/constants';

export default class CurrencyComponent extends React.Component {
    render() {
        const currency = `${this.props.data} ${CURRENCY}`;

        return (
            <span>{currency}</span>
        );
    }
}

CurrencyComponent.propTypes = {
    data: React.PropTypes.any.isRequired
};
