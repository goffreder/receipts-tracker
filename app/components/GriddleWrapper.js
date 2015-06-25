import Store from '../models/Store';
import Product from '../models/Product';
import Receipt from '../models/Receipt';

import Griddle from 'griddle-react';

export default class GriddleWrapper extends React.Component {
    render() {
        const style = {
            margin: '20px auto',
            width: '80%'
        };

        return (
            <div style={style}>
                <Griddle
                    columns={this.props.columns}
                    results={this.props.results}
                    resultsPerPage={3}
                    useGriddleStyles={false}
                    showFilter={true}
                />
            </div>
        );
    }
}

GriddleWrapper.propTypes = {
    columns: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    results: React.PropTypes.arrayOf(React.PropTypes.oneOfType([
      Store,
      Product,
      Receipt
    ])).isRequired
};
