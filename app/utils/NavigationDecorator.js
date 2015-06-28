import { Navigation } from 'react-router';

import assign from 'react/lib/Object.assign';

export default (Component) => {
    assign(Component.prototype, Navigation);
    // Component.prototype.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
};
