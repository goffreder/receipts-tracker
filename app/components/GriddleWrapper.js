import Griddle from 'griddle-react';
import CurrencyComponent from './griddle-components/CurrencyComponent';
import DateComponent from './griddle-components/DateComponent';
import LinkComponent from './griddle-components/LinkComponent';

const { RaisedButton } = mui;

export default class GriddleWrapper extends React.Component {
    render() {
        const style = {
            margin: '20px auto',
            width: '80%'
        };

        const columns = this.props.columns || this.props.columnMetadata.filter((meta) => {
            return meta.visible !== false;
        }).map((meta) => {
            return meta.columnName;
        });

        this.props.columnMetadata.forEach((meta) => {
            switch (meta.type) {
                case 'id':
                    meta.cssClassName = 'single-column';
                    break;
                case 'link':
                    meta.cssClassName = 'link-column';
                    meta.customComponent = LinkComponent;
                    break;
                case 'date':
                    meta.cssClassName = 'double-column';
                    meta.customComponent = DateComponent;
                    break;
                case 'currency':
                    meta.customComponent = CurrencyComponent;
                    break;
                default:
                    break;
            }
        });

        return (
            <div style={style}>
                <Griddle
                    columns={columns}
                    columnMetadata={this.props.columnMetadata}
                    results={this.props.results}
                    resultsPerPage={10}
                    useGriddleStyles={false}
                    showFilter={true}
                    noDataMessage={this.props.noDataMessage}
                />
            </div>
        );
    }
}

GriddleWrapper.propTypes = {
    columns: React.PropTypes.arrayOf(React.PropTypes.string),
    columnMetadata: React.PropTypes.arrayOf(React.PropTypes.shape({
        columnName: React.PropTypes.string.isRequired,
        order: React.PropTypes.number,
        locked: React.PropTypes.bool,
        cssClassName: React.PropTypes.string,
        displayName: React.PropTypes.string,
        customComponent: React.PropTypes.func,
        type: React.PropTypes.oneOf([
            'id',
            'date',
            'link',
            'sub-griddle',
            'currency'
        ])
    })).isRequired,
    results: React.PropTypes.array,
    noDataMessage: React.PropTypes.string
};
