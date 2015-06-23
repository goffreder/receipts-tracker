const { AppBar } = mui;

class Header extends React.Component {
    render() {
        return (
            <AppBar
                title={this.props.title}
                onLeftIconButtonTouchTap={this.props.iconClickHandler}
            />
        );
    }
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired,
    iconClickHandler: React.PropTypes.func.isRequired
};

export default Header;
