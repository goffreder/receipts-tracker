import userActions from '../actions/userActions';

const { Styles, LeftNav } = mui;
const { Colors, Spacing, Typography } = Styles;

export default class LeftSideBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleHeaderClick = this.handleHeaderClick.bind(this);
        this.handleLeftNavChange = this.handleLeftNavChange.bind(this);
    }

    componentWillUpdate(props) {
        if (props.isOpen !== this.props.isOpen) {
            this.refs.leftNav.toggle();
        }
    }

    handleHeaderClick() {
        this.context.router.transitionTo('root');

        userActions.userLeftSideBarToggle();
    }

    handleLeftNavChange(e, key, payload) {
        this.context.router.transitionTo(payload.route);
    }

    render() {
        const styles = {
            cursor: 'pointer',
            fontSize: '24px',
            color: Typography.textFullWhite,
            lineHeight: Spacing.desktopKeylineIncrement + 'px',
            fontWeight: Typography.fontWeightLight,
            backgroundColor: Colors.cyan500,
            paddingLeft: Spacing.desktopGutter,
            paddingTop: '0px',
            marginBottom: '8px'
        };

        const header = (
            <div style={styles} onClick={this.handleHeaderClick}>
                {this.props.title}
            </div>
        );

        return (
            <LeftNav
                header={header}
                docked={false}
                menuItems={this.props.menuItems}
                ref="leftNav"
                onChange={this.handleLeftNavChange}
            />
        );
    }
}

LeftSideBar.propTypes = {
    title: React.PropTypes.string.isRequired,
    isOpen: React.PropTypes.bool.isRequired,
    menuItems: React.PropTypes.arrayOf(React.PropTypes.shape({
        route: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
        number: React.PropTypes.string
    })).isRequired
};

LeftSideBar.contextTypes = {
    router: React.PropTypes.func
};
