import { LOCALE } from '../../constants/constants';

export default class DateComponent extends React.Component {
    render() {
        const date = new Date(this.props.data).toLocaleDateString(LOCALE);

        return (
            <span>{date}</span>
        );
    }
}

DateComponent.propTypes = {
    data: React.PropTypes.any.isRequired
};
