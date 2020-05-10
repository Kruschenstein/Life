import * as React from 'react';
import './Cell.css';
import Cell from './engine/Cell';

class CellView extends React.Component<{ cell: Cell }, {}> {
    render() {
        return (
            <div className={this.props.cell.isAlive() ? 'alive' : 'dead'}></div>
        );
    }
}

export default CellView;