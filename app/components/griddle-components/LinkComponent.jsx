export default class LinkComponent extends React.Component {
    render() {
        const link = this.props.data;

        const linkComponent = link
            ? <a href={link} target="_blank">{link}</a>
            : <span>No link available</span>;

        return linkComponent;
    }
}

LinkComponent.propTypes = {
    data: React.PropTypes.any.isRequired
};
