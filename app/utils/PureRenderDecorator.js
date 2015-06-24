const { PureRenderMixin } = React.addons;

export default (Component) => {
    Component.prototype.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
};
